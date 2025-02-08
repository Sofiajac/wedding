import React from "react";
import { useState } from 'react';
import Button from "../Button";
import RsvpForm from './RsvpForm';

interface WelcomeProps {
  apiUrl: string;
}
// export function Welcome({ apiUrl }: WelcomeProps) {
export const Welcome = ({ apiUrl }: WelcomeProps) => {
  const [showRsvpForm, setShowRsvpForm] = useState<boolean>(false);

  const toggleForm = () => {
    setShowRsvpForm(!showRsvpForm);
  };

  return (
    <div className="pageContent">
      <div className="headingsContainer">
        <h2 className="fancyText h2">Välkommen på bröllop</h2>
        <div className="fancyText">16 - 17 augusti 2025</div>
        <div className="fancyText">Arholma</div>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Button
        title="o.s.a."
        onClick={toggleForm}
      />
      {showRsvpForm && <RsvpForm apiUrl={apiUrl} />}
      <br />
      <a href={`${apiUrl}/download_csv`} download>
        <button>Download RSVPs as CSV</button>
      </a>
    </div>
  );
};
