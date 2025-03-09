#!/usr/bin/env python3

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from flask import Flask, request, jsonify, send_file
from sqlalchemy import UniqueConstraint
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import csv
import io
import smtplib

# Set up the server
smtp_server = 'localhost'
smtp_port = 25  # Default port for SMTP
email_sender = 'johanochemil@magjac.com'

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
CORS(app)  # Enable Cross-Origin Resource Sharing

def send_email(recipient, subject, body):
  message = MIMEMultipart()
  message['From'] = email_sender
  message['To'] = recipient
  message['Subject'] = subject

  message.attach(MIMEText(body, 'html'))

  server = smtplib.SMTP(smtp_server, smtp_port)
  server.send_message(message)
  server.quit()

def send_confirmation_email(email, name, attending, food_allergy, new):
  subject = "Tack för din amälan till Johan och Emils bröllop" if new else "Din anmälan till Johan och Emils bröllop har uppdaterats"
  attending_yes_no = 'Ja' if attending else 'Nej'
  food_preferences_text = f"Matpreferenser: {food_allergy}" if attending else ""
  text = f"""<h1>Hej {name}!</h1>
{'Du har anmält' if new else 'Din anmälan har nu uppdaterats med'} dessa uppgifter:'
<br/>
<br/>
Namn: {name}
<br/>
Kommer på bröllopet: {attending_yes_no}
<br/>
Kostpreferenser: {food_preferences_text}
<br/>
<br/>
Varma hälsningar Johan & Emil"""

  send_email(email, subject, text)

class RSVP(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    attending = db.Column(db.Boolean, nullable=False)
    food_allergy = db.Column(db.String(120), nullable=False)

    __table_args__ = (UniqueConstraint('name', 'email', name='_name_email_uc'),)

@app.route('/fetch', methods=['POST'])
def fetch():
    data = request.json
    email = data.get('email')
    posts = db.session.query(RSVP).filter(RSVP.email == email).all()

    result = [
        {
          "id": post.id,
          "name": post.name,
          "email": post.email,
          "attending": post.attending,
          "food_allergy": post.food_allergy
        } for post in posts]

    return jsonify(result)

@app.route('/rsvp', methods=['POST'])
def rsvp():
    data = request.json
    id = data.get('id')
    name = data.get('name')
    email = data.get('email')
    attending = data.get('attending')
    food_allergy = data.get('food_allergy')

    if id is not None:
      rsvp_to_update = db.session.query(RSVP).filter_by(id=id).first()
      if rsvp_to_update:
          rsvp_to_update.name = name
          rsvp_to_update.email = email
          rsvp_to_update.attending = attending
          rsvp_to_update.food_allergy = food_allergy
          db.session.commit()
          send_confirmation_email(email, name, attending, food_allergy, new=False)
          return jsonify({'message': 'RSVP updated'}), 200

    new_rsvp = RSVP(name=name, email=email, attending=attending, food_allergy=food_allergy)
    db.session.add(new_rsvp)
    db.session.commit()
    send_confirmation_email(email, name, attending, food_allergy, new=True)
    return jsonify({'message': 'RSVP received'}), 200

@app.route('/download_csv', methods=['GET'])
def download_csv():
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(['id', 'name', 'email', 'attending', 'food_allergy'])
    rsvps = RSVP.query.all()
    for rsvp in rsvps:
        writer.writerow([rsvp.id, rsvp.name, rsvp.email, rsvp.attending, rsvp.food_allergy])
    output.seek(0)
    byte_output = io.BytesIO(output.getvalue().encode())
    return send_file(byte_output, mimetype='text/csv', download_name='rsvp.csv', as_attachment=True)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)
