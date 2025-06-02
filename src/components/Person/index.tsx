import React from 'react';
import './styles.scss';
import InputField from '../Input';
import { Person } from '../RsvpForm';
import RadioButton from '../Radiobutton';

export interface PersonProps {
  index: number;
  person: Person;
  updatePerson: (index: number, updatedPerson: Person) => void;
}

const PersonComponent: React.FC<PersonProps> = ({
  index,
  person,
  updatePerson,
}) => {
  return (
    <div className="person-container" key={index}>
      <InputField
        name="guestName"
        label={`Namn gäst ${index + 1}`}
        type="text"
        value={person.name}
        onChange={(e) =>
          updatePerson(index, { ...person, name: e.target.value })
        }
        required
      />
      <div className="radio-buttons">
        <RadioButton
          label="Jag kommer"
          name={`attending-${index}`} // Unique name for each person
          value="yes"
          checked={person.attending}
          onChange={() => updatePerson(index, { ...person, attending: true })}
        />
        <RadioButton
          label="Jag kommer inte"
          name={`attending-${index}`} // Unique name for each person
          value="no"
          checked={
            person.attending === undefined ? undefined : !person.attending
          }
          onChange={() => updatePerson(index, { ...person, attending: false })}
        />
      </div>

      {person.attending && (
        <div>
          <div className="radio-buttons">
            <RadioButton
              label="Jag bor på bokat boende"
              name={`housing-${index}`} // Unique name for each person
              value="yes"
              checked={person.housing}
              onChange={() => updatePerson(index, { ...person, housing: true })}
            />
            <RadioButton
              label="Jag kommer inte"
              name={`housing-${index}`} // Unique name for each person
              value="no"
              checked={
                person.housing === undefined ? undefined : !person.housing
              }
              onChange={() => updatePerson(index, { ...person, housing: false })}
            />
          </div>
          <div className="radio-buttons">
            <RadioButton
              label="Jag reser med bokad båt till Arholma"
              name={`boat_to-${index}`} // Unique name for each person
              value="yes"
              checked={person.boat_to}
              onChange={() => updatePerson(index, { ...person, boat_to: true })}
            />
            <RadioButton
              label="Jag tar mig till Arholma på egen hand"
              name={`boat_to-${index}`} // Unique name for each person
              value="no"
              checked={
                person.boat_to === undefined ? undefined : !person.boat_to
              }
              onChange={() => updatePerson(index, { ...person, boat_to: false })}
            />
          </div>
          <div className="radio-buttons">
            <RadioButton
              label="Jag reser med bokad båt från Arholma"
              name={`boat_from-${index}`} // Unique name for each person
              value="yes"
              checked={person.boat_from}
              onChange={() => updatePerson(index, { ...person, boat_from: true })}
            />
            <RadioButton
              label="Jag tar mig från Arholma på egen hand"
              name={`boat_from-${index}`} // Unique name for each person
              value="no"
              checked={
                person.boat_from === undefined ? undefined : !person.boat_from
              }
              onChange={() => updatePerson(index, { ...person, boat_from: false })}
            />
          </div>
          <InputField
            name="foodPrefererence"
            label="Matpreferenser"
            value={person.foodAllergy}
            onChange={(e) =>
              updatePerson(index, { ...person, foodAllergy: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
};

export default PersonComponent;
