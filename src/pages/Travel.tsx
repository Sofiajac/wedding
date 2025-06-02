import React from 'react';

export const Travel = () => {
  return (
    <div className="pageContent">
      <h2>Resa hit</h2>
      <section>
        <p>
          Bröllopet hålls på <strong>Arholma Nord</strong> – en magisk plats
          längst ut i Stockholms norra skärgård. Ni kan ta er hit på flera sätt.
        </p>
      </section>
      <section>
        <h3>Alternativ 1 - Taxibåt från Räfsnäs brygga</h3>
        <p>
          Vi bokar en gemensam taxibåt från Räfsnäs brygga till Arholma Nord.
        </p>
        <ul>
          <li>
            <strong>Avgångstid:</strong> ca kl. 11.00
          </li>
          <li>
            <strong>Restid:</strong> ca 25–30 minuter
          </li>
          <li>
            <strong>Pris:</strong> Ingår för alla gäster
          </li>
          <li>
            <strong>Parkering:</strong> Finns ca 500m från bryggan
          </li>
          <li>
            <strong>Resan tillbaka:</strong> Söndag ca kl. 11.00
          </li>
        </ul>
        <p>Skriv i OSA om du vill åka med denna båt.</p>
        <br />
        <h4>Så tar du dig till Räfsnäs med SL</h4>
        <p>
          Från både <strong>Stockholm</strong> och <strong>Norrtälje</strong>{' '}
          går det SL-bussar hela vägen till Räfsnäs brygga.
        </p>
        <p>
          Planera din resa på:{' '}
          <a href="https://sl.se" target="_blank" rel="noopener noreferrer">
            sl.se
          </a>
          <br />
          Sök på destination <strong>"Räfsnäs brygga"</strong>
        </p>
      </section>
      <section>
        <h3>
          Alternativ 2 - Båt med Waxholmsbolaget från Strömkajen till Arholma
        </h3>
        <h4>
          <strong>Utresa till Arholma - lördag</strong>
        </h4>
        <ul>
          <li>
            <strong>Avgång:</strong> Strömkajen kl. 08.30
          </li>
          <li>
            <strong>Ankomst:</strong> Arholma kl. 13.05
          </li>
          <li>
            <strong>Restid:</strong> ca 4 timmar och 35 minuter
          </li>
          <li>
            <strong>Båt:</strong> Waxholmsbolaget
          </li>
          <li>
            <strong>Biljetter:</strong>{' '}
            <a
              href="https://www.waxholmsbolaget.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              waxholmsbolaget.se
            </a>
          </li>
        </ul>
        <p>
          Det är en tidig avfärd, men resan bjuder på fantastiska vyer genom
          hela skärgården!
        </p>
        <br />

        <p>
          Från Arholma Brygga är det ca 1,5 km promenad till Arholma Nord. Det
          finns möjlighet att få sin packning körd till Arholma Nord från
          Arholma Brygga.
        </p>
        <br />

        <h4>
          <strong>Hemresa – söndag</strong>
        </h4>
        <ul>
          <li>
            <strong>Avgång:</strong> Arholma kl. 16.15
          </li>
          <li>
            <strong>Ankomst:</strong> Strömkajen kl. 20.45
          </li>
          <li>
            <strong>Restid:</strong> ca 4 timmar och 30 minuter
          </li>
          <li>
            <strong>Biljetter:</strong>{' '}
            <a
              href="https://www.waxholmsbolaget.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              waxholmsbolaget.se
            </a>
          </li>
        </ul>
        <br />
        <p>
          Om du väljer <strong>Alternativ 2</strong>, ansvarar du själv för din
          resa.
        </p>
      </section>

      <section>
        <h3>Alternativ 3 - Kommer du med egen båt?</h3>
        <p>
          Det finns <strong>gästhamn</strong> vid Arholma Nord.
          <br />
          Om du väljer <strong>Alternativ 3</strong>, ansvarar du själv för din
          resa.
        </p>
      </section>
      <br />
      <section>
        <p>
          Vi rekommenderar att du <strong>planerar din resa i god tid</strong>,
          särskilt om du åker kollektivt eller med Waxholmsbolaget –{' '}
          <strong>båttrafiken är väderberoende och tider kan ändras</strong>.
        </p>
      </section>
    </div>
  );
};
