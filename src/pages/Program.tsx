import React from 'react';
import { Link } from 'react-router-dom';

export const Program = () => {
  return (
    <div className="pageContent">
      <h2>Program</h2>
      <section>
        <p>
          Här hittar du en ungefärlig tidsplan för lördagen den{' '}
          <strong>16 augusti 2025</strong>. Tiderna är inte minutiösa!
        </p>
      </section>
      <section>
        <h3>Lördag 16 augusti</h3>
        <strong>ca 11.00 – Avgång med taxibåt från Räfsnäs brygga</strong>
        <br />
        Vi möts vid bryggan och åker gemensamt ut till Arholma Nord. Exakta
        tider och info kommer att uppdateras löpande under fliken{' '}
        <Link to="/travel">Resa hit</Link>.
        <br />
        <br />
        <strong>ca 12.00–14.00 – Ankomst & lunch på egen hand</strong>
        <br />
        När ni kommer fram väntar en lättare take-away lunch som ni kan ta med
        er och avnjuta var ni vill på området. Incheckning sker löpande.
        <br />
        <br />
        <strong>15.30 – Vigsel</strong>
        <br />
        Vi samlas för ceremonin i skärgårdens vackra miljö.
        <br />
        <br />
        <strong>ca 16.00 – Skål & mingel</strong>
        <br />
        Efter vigseln firar vi tillsammans med bubbel och tilltugg.
        <br />
        <br />
        <strong>18.00 – Middag & tal</strong>
        <br />
        Det bjuds på grillbuffé och dryck.
        <br />
        <br />
        <strong>Efter middagen – Dans & fest</strong>
        <br />
        När solen gått ner kör vi igång festen! Musik, barhäng och dansgolv
        under stjärnorna. Vickning på småtimmarna.
        <br />
        <br />
      </section>
      <section>
        <h3>Söndag 17 augusti</h3>
        <strong>09.00–10.30 – Frukost</strong>
        <br />
        Sov ut, ät gott och ta ett morgondopp om du vill.
        <br />
        <br />
        <strong>ca 11.00 – Hemresa med taxibåt</strong>
        <br />
        Vi åker gemensamt tillbaka till Räfsnäs.
        <br />
        <br />
      </section>
    </div>
  );
};
