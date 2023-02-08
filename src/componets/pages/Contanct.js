import React from "react";
function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Formularz kontaktowy</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Informacje kontaktowe</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Formularz kontaktowy</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Imię i Nazwisko</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Podaj Imię i Nazwisko"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Numer telefonu</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Podaj Numer telefonu"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">E-mail</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Podaj E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Wiadomość</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Podaj swoją wiadomość"
                    />
                  </div>

                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      Wyślij
                    </button>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Informacje kontaktowe</h5>
                  <div className="underline"></div>
                  <p> Targowisko, Polska</p>
                  <p> Numer kontaktowy: 508 008 256</p>
                  <p> E-mail: tomekkamieniarz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
