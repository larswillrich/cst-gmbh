import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewComponent from '../../pages/pictureGalary/pictureGalary'

var createReactClass = require('create-react-class');

function MydModalWithGrid(props) {
  return (
    <Modal {...props} dialogClassName="modal-xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <NewComponent></NewComponent>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Main() {
  const [modalShow, setModalShow] = useState(false);

  return (
<main id="main">
<MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Vorsprung durch Technologie</h1>
                <h2 data-aos="fade-up" data-aos-delay={400}>Innovation und Neugier - mit der CST GmbH erfolgreich in die Zukunft</h2>
                <div data-aos="fade-up" data-aos-delay={800}>
                  <a href="#about" className="btn-get-started scrollto">Mehr erfahren ...</a>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200}>
                <img src="assets/img/main.png" className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Über uns</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                <p>
                  Die Firma CST blickt auf eine Firmengeschichte von mehr als 10 Jahren zurück und überzeugt seit eh und je mit Innovationskraft. Gerade in der aktuell angespannten Marktsituation im Bereich Fenster und Türen gelingt der CST ein Wachstum, so dass der Betrieb reibungslos geführt wird.
                  Von Beginn an wurden in moderne Konstruktionsprogramme wie 3D Drucker und 3D Scanner investiert. Damit fokussiert sich die CST auf die Entwicklung von zukunftsorientierten Produkten.
                </p>
                <ul>
                  <li><i className="ri-check-double-line" /> Zukunftsorientierte Produktion durch 3D Technologie</li>
                  <li><i className="ri-check-double-line" /> Patentanmeldungen im Bereich barrierefreien Türschwellen und stabiler Pfostenverbinder</li>
                  <li><i className="ri-check-double-line" /> Eigene Werkzeuge führen zu besonders preiswerten Produkten</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                <p>
                  Insgesamt betreibt CST Nischenpolitik, wie z.B. Patentanmeldungen in dem Bereich der barrierefreien Türschwelle oder besonders stabiler Pfostenverbinder, sowie einer neuen Generation von Türbändern für Kunststofftüren.
                  Durch eigene Werkzeuge ist uns eine schnelle und sichere Produktion möglich, so dass der Markt von unseren besonders preiswerten Produkte profitieren kann.
                </p>
              </div>
            </div>
          </div>
        </section>{/* End About Us Section */}
        {/* ======= Counts Section ======= 
    <section id="counts" class="counts">
      <div class="container">

        <div class="row">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="assets/img/counts-img.svg" alt="" class="img-fluid">
          </div>

          <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">65</span>
                    <p><strong>vertrauensvolle Kunden Bundesweit</strong> verzeichnen wird.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-document-folder"></i>
                    <span data-toggle="counter-up">85</span>
                    <p><strong>Patentanmeldungen</strong> sichern uns Innovationskraft und zukünftigen Erfolg.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-clock-time"></i>
                    <span data-toggle="counter-up">10</span>
                    <p><strong>Jahre Erfahrung</strong> führen zu einem stabilen und vertrauensvollen Partner</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-award"></i>
                    <span data-toggle="counter-up">15</span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> End Counts Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Produkte</h2>
            </div>
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-5">
                <h3>Distanzplättchen</h3>
                <div className="col-lg-8 mt-4">
                  <img src="assets/img/1.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <h4 className="font-weight-bold">
                  Für den Transport von Fenster und Türelementen eignen sich Distanzplättchen selbstklebend aus verschiedenen Materialien hervorragend.
                </h4>        {/* ======= Hero Section ======= */}

                <div className="mt-3 col-lg-6 float-right align-self-center"><Button variant="info" onClick={() => setModalShow(true)}>Mehr dazu ...</Button>{' '}</div>
              </div>
            </div>{/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-5">
                <h3>Eckschweißverbinder</h3>
                <div className="col-lg-8 mt-4">
                  <img src="assets/img/2.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center display-2">
                <h4 className="font-weight-bold">
                  Diese allseitig spannenden Verbinder erhöhen die Torsionskraft Ihrer Tür ganz erheblich. Sie sind in sekundenschnelle montiert. Das Material hinterläßt keine Spuren auf dem Schweißspiegel.
                </h4>
                <div className="mt-3 col-lg-6 float-right align-self-center"><Button variant="info">Mehr dazu ...</Button>{' '}</div>
              </div>
            </div>{/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
              <div className="col-lg-5">
                <h3>Pfostenverbinder</h3>
                <div className="col-lg-3 mt-4 pl-5">
                  <img src="assets/img/3.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <h4 className="font-weight-bold">
                  Unsere Pfostenverbinder sind hergestellt aus dem besten zu erhaltenden Material das es gibt. Die statischen Eigenschaften sind durch unsere eigene Kontruktion auf das maximale ausgelegt.
                </h4>
              </div>
            </div>{/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
              <div className="col-lg-5">
                <h3>Nullschwelle</h3>
                <div className="col-lg-8 mt-4">
                  <img src="assets/img/4.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <h4 className="font-weight-bold">
                  Unsere Nullschwellenvariante ist modular aufgebaut und erlaubt den Einsatz in jeglichen Einsatzmöglichkeiten.
                </h4>
              </div>
            </div>{/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
              <div className="col-lg-5">
                <h3>Türdrücker</h3>
                <div className="col-lg-8 mt-4">
                  <img src="assets/img/5.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <h4 className="font-weight-bold">
                  Es steht ein großes Programm mit vielen Zertifikaten zur Verfügung aus den verschiedensten Materialien.
                </h4>
              </div>
            </div>{/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
              <div className="col-lg-5">
                <h3>Schraubenprogramm</h3>
                <div className="col-lg-8 mt-4">
                  <img src="assets/img/6.jpeg" className="img-fluid animated" alt="" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <h4 className="font-weight-bold">
                  Unser Schraubenprogramm bietet Schrauben in sämtlichen Varianten und Größen für jeden Einsatzbereich.
                </h4>
              </div>
            </div>{/* End F.A.Q Item*/}
          </div>
        </section>{/* End F.A.Q Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Kontaktieren Sie uns</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-8" data-aos="fade-up" data-aos-delay={100}>
                <div className="contact-about">
                  <h3>CST GmbH</h3>
                  <p>Wir freuen uns auf eine Nachricht von Ihnen und melden uns gerne zeitnah bei Ihnen.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line" />
                    <p>Gewerbering 15<br />14656 Brieselang</p>
                  </div>
                  <div>
                    <i className="ri-mail-send-line" />
                    <p><a href="mailto:info@cst-gmbh.de">info@cst-gmbh.de</a></p>
                  </div>
                  <div>
                    <i className="ri-phone-line" />
                    <p>+49 (0) 332 349 180 05</p>
                  </div>
                </div>
              </div>
              {/*  <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Ihr Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Ihre E-Mail" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Ihr Thema" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Ihre Nachricht an uns"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Sende Nachricht</button></div>
            </form>End Contact Section
          </div> */}
            </div>
          </div>
        </section>{/* End Contact Section */}
      </main>
  );
}

export default Main;