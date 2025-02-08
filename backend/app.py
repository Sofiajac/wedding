#!/usr/bin/env python3

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
CORS(app)  # Enable Cross-Origin Resource Sharing

class RSVP(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    attending = db.Column(db.Boolean, nullable=False)

@app.route('/rsvp', methods=['POST'])
def rsvp():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    attending = data.get('attending')
    new_rsvp = RSVP(name=name, email=email, attending=attending)
    db.session.add(new_rsvp)
    db.session.commit()
    return jsonify({'message': 'RSVP received'}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
