import React from "react";

function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Firma</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">informacje o firmie</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light border-bottom">
        <div className="container">
          <div className="underline"></div>
          <h2> Usługi kamieniarskie</h2>
          <hr />
          <p>
            {" "}
            Nasza firma zajmuje się realizacją ogrodzeń, elewacji, posadzek,
            schodów, altan, grill oraz innych tego typów niestandardowych
            pomysłów klientów. Nasza firma zajmuje się fachowym i kompleksowym
            wykonaniem prac z kamienia naturalnego. W naszej ofercie znajdą
            Państwo między innymi: -ogrodzenia, -elewacje, -altany -grille,
            -podadzki, -schody, -adaptacje ogrodowe - wszystko zgodnie z
            oczekiwanem klienta. Wykonujemy prace na wielu rodzajach kamienia:
            wapień, piaskowce, gnejs, łupek, dolomit, granit, porfina i wielu
            innych.
          </p>
          <p>
            Zajmujemy sie także montażem parapetów, blatów kuchennych, schodów,
            a także renowacją i impregnacją starych ogrodzeń, murów, kapliczek
            oraz nagrobków.
          </p>
        </div>
      </section>
    </div>
  );
}
export default About;
