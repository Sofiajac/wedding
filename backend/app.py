#!/usr/bin/env python3

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

@app.route('/rsvp', methods=['POST'])
def rsvp():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    attending = data.get('attending')
    # Here you can save the data to a database or perform other actions
    print(f'RSVP received: {name}, {email}, {attending}')
    return jsonify({'message': 'RSVP received'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
