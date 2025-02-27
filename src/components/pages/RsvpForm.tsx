import React, { useState } from 'react';


interface RsvpFormProps {
  apiUrl: string;
}


interface Person {
  id: number | null;
  name: string;
  email: string;
  attending: boolean;
  foodAllergy: string;
}

interface RawPerson {
  id: number | null;
  name: string;
  email: string;
  attending: boolean;
  food_allergy: string;
}

function RsvpForm({ apiUrl }: RsvpFormProps) {
  // const RsvpForm: React.FC = ({ apiUrl } : RsvpFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [people, setPeople] = useState<Person[]>([]);

  const emptyPerson = { id: null, name: '', email: email, attending: false, foodAllergy: '' };

  const updatePerson = (index: number, updatedPerson: Person) => {
    setPeople((prevPeople) =>
      prevPeople.map((person, i) =>
        i === index ? updatedPerson : person
      )
    );
  };

  const addPerson = (newPerson: Person) => {
    setPeople((prevPeople) => [...prevPeople, newPerson]);
  };

  const setNumPeople = (numPeople : number) => {
    for (let i = people.length; i < numPeople; ++i) {
      const person = {...emptyPerson, email: email}
      addPerson(person)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      for (var person of people) {
        const response = await fetch(`${apiUrl}/rsvp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: person.id, name: person.name, email, attending: person.attending, food_allergy: person.foodAllergy })
        });
        const result = await response.json();
        if (response.ok) {
          console.log('RSVP received:', result);
          alert('RSVP received successfully!');
        } else {
          console.error('Error:', result);
          alert('Failed to submit RSVP.');
        }
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/fetch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (response.ok) {
        console.log('Fetch received:', result);
        const oldPeople = result.map((person: RawPerson) => {
          const { food_allergy, ...rest } = person;
          return {
            ...rest,
            foodAllergy: food_allergy
          };
        });
        const newPeople = result.length == 0 ? [{...emptyPerson, email: email}] : oldPeople;
        setPeople(newPeople)
      } else {
        console.error('Error:', result);
        alert('Failed to submit Fetch.');
      }
    } catch (error) {
      console.error('Error submitting Fetch:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const numPeopleOptions = Array.from({ length: 10 }, (_, i) => i);

  const numPeople = people.length;
  return (
    <form onSubmit={numPeople == 0 ? handleFetch : handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {numPeople > 0 &&
        <div>
          <label>Antal personer:</label>
          <select
            name="numPeople"
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(+e.target.value)}
          >
            {numPeopleOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      }
      {people.map((person, i) =>
        <div key={i}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={person.name}
              onChange={(e) => updatePerson(i, { ...person, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Attending:</label>
            <input
              type="checkbox"
              checked={person.attending}
              onChange={(e) => updatePerson(i, { ...person, attending: e.target.checked })}
            />
          </div>
          {person.attending &&
            <div>
              <label>Matallergi:</label>
              <input
                type="text"
                value={person.foodAllergy}
                onChange={(e) => updatePerson(i, { ...person, foodAllergy: e.target.value })}
              />
            </div>
          }
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default RsvpForm;
