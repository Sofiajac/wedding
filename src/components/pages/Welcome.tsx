import React from "react";
import { useState } from 'react';
import Button from "../Button";
import RsvpForm from './RsvpForm';

export const Welcome = () => {
  const [showRsvpForm, setShowRsvpForm] = useState<boolean>(false);

  const toggleForm = () => {
    setShowRsvpForm(!showRsvpForm);
  };

  return (
    <div>
      <div className="content">
        {/* <hr /> */}
        <div className="fancyText">Arholma</div>
        <div className="">16 - 17 augusti 2025</div>
        <Button
          title="o.s.a."
          onClick={toggleForm}
        />
        {showRsvpForm && <RsvpForm />}
        <br />
        <a href="http://localhost:5000/download_csv" download>
          <button>Download RSVPs as CSV</button>
        </a>
      </div>
    </div>
  );
};
