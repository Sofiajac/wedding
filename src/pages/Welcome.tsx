import React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import RsvpForm from '../components/RsvpForm';
import { Link } from 'react-router-dom';

interface WelcomeProps {
  apiUrl: string;
}
// export function Welcome({ apiUrl }: WelcomeProps) {
export const Welcome = ({ apiUrl }: WelcomeProps) => {
  const [showRsvpForm, setShowRsvpForm] = useState<boolean>(false);

  const toggleForm = () => {
    setShowRsvpForm(!showRsvpForm);
  };

  const hideForm = () => {
    setShowRsvpForm(false);
  };

  return (
    <div className="pageContent">
      <div className="headingsContainer">
        <h2> Välkommen till vårt bröllop!</h2>
      </div>
      <section>
        <p className="">
          Den <strong>16 augusti 2025</strong> gifter vi –{' '}
          <strong>Johan & Emil</strong> – oss på Arholma Nord, längst ut i
          Stockholms skärgård. Vi är så glada att få fira den här dagen med er!
          Bröllopet blir en helg fylld av kärlek, havsbris, skratt och dans –
          och vi hoppas ni vill vara med hela vägen.
        </p>
      </section>
      <section>
        <h3>Vad händer?</h3>
        <ul>
          <li>
            <strong>Vigseln</strong> är kl. 15.30 på lördagen.
          </li>
          <li>
            <strong>Middag & fest</strong> startar kl 18.00.
          </li>
          <li>
            Alla som vill sover kvar över natten – boende & frukost ingår.
          </li>
          <li>
            Resa med taxibåt från Räfsnäs (ca kl. 11.00, exakt tid kommer
            senare)
          </li>
          <li>
            Detaljerat schema hittar du under fliken{' '}
            <Link to="/program">Program</Link>.
          </li>
        </ul>
      </section>
      <section>
        <h3>Packa detta!</h3>
        <p>
          Du är på en ö – tänk skärgårdsmys och sommaräventyr:
          <ul>
            <li>Kläder efter väder & något varmt till kvällen.</li>
            <li>Sköna skor för grusvägar.</li>
            <li>Ev. badkläder för bastu/dopp.</li>
            <li>
              Se hela listan och restips under fliken{' '}
              <Link to="/travel">Resa hit</Link>.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h3>Boende</h3>
        <ul>
          <li>Det är bäddat och klart när ni kommer, handduk ingår.</li>
          <li>
            Toalett och dusch finns i korridoren. Frukostbuffé och städning
            ingår.
          </li>
          <li>Vi fixar rumsfördelningen. Varje sällskap har sitt eget rum. </li>
        </ul>
      </section>
      <section>
        <h3>Klädkod</h3>
        <p>
          <strong>Sommarfin / Kavaj</strong>
          <p>
            Klä dig så du känner dig festlig, fin och fri – men redo för
            skärgård.
          </p>
        </p>
      </section>
      <section>
        <h3>Frågor?</h3>
        <p>
          Hur man OSA:ar, om barn kan följa med, hur man hittar till bryggan?
          Kolla fliken <Link to="/faq">FAQ</Link> – vi har samlat svaren där.
        </p>
        <br />
        <p>Har du fler frågor, tveka inte på att kontakta oss:</p>

        <h4>Johan:</h4>
        <p>
          Tel: <a href="tel:0709624422">0709624422</a>
          <br />
          E-post:{' '}
          <a href="mailto:Blixthjohan@gmail.com">Blixthjohan@gmail.com</a>
        </p>
        <br />

        <h4>Emil:</h4>
        <p>
          Tel: <a href="tel:0739062545">0739062545</a>
          <br />
          E-post:{' '}
          <a href="mailto:Emil.odegaard.jacobsson@gmail.com">
            Emil.odegaard.jacobsson@gmail.com
          </a>
        </p>
      </section>
      <section>
        <h3>OSA</h3>
        <p>
          OSA senast <strong>14 juni</strong>.
        </p>
        <br />
        <p>Vi längtar efter att ses,</p>
        <p>
          <strong>Johan & Emil</strong>
        </p>
      </section>
      {!showRsvpForm && <Button title="OSA" onClick={toggleForm} />}
      {showRsvpForm && <RsvpForm apiUrl={apiUrl} hideForm={hideForm} />}
      <br />
      <a href={`${apiUrl}/download_csv`} download>
        <button>Download RSVPs as CSV</button>
      </a>
    </div>
  );
};
