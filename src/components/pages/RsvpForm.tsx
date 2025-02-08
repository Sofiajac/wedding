import React, { useState } from 'react';

const RsvpForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [attending, setAttending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, attending })
      });
      const result = await response.json();
      if (response.ok) {
        console.log('RSVP received:', result);
        alert('RSVP received successfully!');
      } else {
        console.error('Error:', result);
        alert('Failed to submit RSVP.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Attending:</label>
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RsvpForm;
