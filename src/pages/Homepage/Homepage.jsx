import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container max-w-6xl">
          <div className="hero-grid">
            {/* Left Column - Text Content */}
            <div className="hero-text">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="hero-title-accent">Eidos Project</span>
                </h1>
                <p className="hero-description">
                  Progettiamo documenti aziendali chiari, leggibili e belli
                  anche per chi è piccolo ma lavora in grande. Contratti,
                  policy, comunicazioni: li rendiamo comprensibili, utili e
                  professionali.
                </p>
                <p className="hero-span">Perché ogni parola conta.</p>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="hero-image">
              <img
                src="public/photos/EidosLogo1.jpg"
                alt="Eidos Project Logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chisiamo" className="section section-primary">
        <div className="container max-w-4xl">
          <div className="section-content">
            <h2 className="section-title">Chi Siamo</h2>
            <p className="section-text">
              Diamo forma chiara ai tuoi documenti aziendali.
            </p>
            <p className="section-text">
              Contratti, policy, comunicazioni: li progettiamo con parole
              semplici, struttura solida e un design che parla davvero alle
              persone.
            </p>
            <p className="section-text section-text-accent">
              Piccole realtà, freelance, studi, associazioni: lavoriamo con chi
              costruisce ogni giorno cose grandi, anche in piccolo.
            </p>
          </div>
        </div>
      </section>

      {/* Cosa Facciamo Section */}
      <section id="cosafacciamo" className="section section-background">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Cosa Facciamo</h2>
          </div>

          <div className="services-grid">
            {/* Redesign documenti */}
            <div className="service-card">
              <h3 className="service-card-title">
                Redesign documenti - Rifatto per Leggere
              </h3>
              <div className="service-card-content">
                <p className="service-card-text">
                  Hai un contratto o una policy che nessuno legge (o capisce)?
                  La rifacciamo da cima a fondo.
                </p>
                <p className="service-card-text">
                  Riorganizziamo il contenuto, semplifichiamo il linguaggio e
                  curiamo layout, gerarchie visive, spaziature e formattazione.
                </p>
                <p className="service-card-text-highlight">
                  Il risultato? Un documento bello da vedere e chiaro da usare.
                </p>
              </div>
              <div className="service-card-upload">
                <a
                  href="\public\Rifatto per leggere.pdf"
                  download
                  className="service-card-download"
                  style={{ marginTop: "8px", display: "inline-block" }}
                >
                  Scarica esempio in PDF
                </a>
              </div>
            </div>

            {/* Kit per partire bene */}
            <div className="service-card">
              <h3 className="service-card-title">
                Kit per partire bene - StartDocs
              </h3>
              <div className="service-card-content">
                <p className="service-card-text">
                  Un pacchetto su misura con tutti i documenti fondamentali, già
                  pronti per essere letti e firmati con fiducia.
                </p>
                <p className="service-card-text">
                  Inclusi testi in linguaggio chiaro + design visivo coordinato
                  (titoli, icone, sezioni evidenziate, spazio per note
                  personalizzabili).
                </p>
                <p className="service-card-text-highlight">
                  Consegnati in formato editabile, usabili anche con il tuo
                  logo.
                </p>
              </div>
              <div className="service-card-upload">
                <a
                  href="\public\Start Kit.pdf"
                  download
                  className="service-card-download"
                  style={{ marginTop: "8px", display: "inline-block" }}
                >
                  Scarica esempio in PDF
                </a>
              </div>
            </div>

            {/* Mini Audit */}
            <div className="service-card">
              <h3 className="service-card-title">Mini Audit - DocCheck</h3>
              <div className="service-card-content">
                <p className="service-card-text">
                  Hai già un documento ma non sai se funziona?
                </p>
                <p className="service-card-text">
                  Ti forniamo un'analisi rapida e visiva, con commenti su
                  linguaggio, struttura e impatto grafico.
                </p>
                <p className="service-card-text-highlight">
                  Una mappa chiara dei punti critici — per migliorarlo da solo o
                  affidarlo a noi.
                </p>
              </div>
              <div className="service-card-upload">
                <a
                  href="\public\Kit check - mini audit dei testi.pdf"
                  download
                  className="service-card-download"
                  style={{ marginTop: "8px", display: "inline-block" }}
                >
                  Scarica esempio in PDF
                </a>
              </div>
            </div>

            {/* Design grafico */}
            <div className="service-card col-span-2">
              <h3 className="service-card-title">
                Design grafico dei documenti - Carta a regola d'arte
              </h3>
              <div className="service-card-content">
                <p className="service-card-text">
                  Hai già il contenuto, ma vuoi che sia bello, leggibile e
                  coerente con la tua immagine?
                </p>
                <p className="service-card-text-highlight">
                  Noi lo impaginiamo e lo trasformiamo in un documento
                  professionale e piacevole da usare — che comunica
                  autorevolezza, cura e chiarezza visiva.
                </p>
              </div>
              <div className="service-card-upload">
                <a
                  href="\public\Vestiamo i tuoi testi.pdf"
                  download
                  className="service-card-download"
                  style={{ marginTop: "8px", display: "inline-block" }}
                >
                  Scarica esempio in PDF
                </a>
              </div>
            </div>

            {/* Template e micro-guide */}
            <div className="service-card col-span-template">
              <h3 className="service-card-title">
                Template e micro-guide - TIT Template in Tasca
              </h3>
              <div className="service-card-content">
                <p className="service-card-text">
                  Modelli già pronti da personalizzare: preventivi, lettere,
                  informative, moduli.
                </p>
                <p className="service-card-text">
                  Ogni template è costruito con un layout studiato: chiaro,
                  elegante, coerente con la tua voce e la tua immagine.
                </p>
                <p className="service-card-text-highlight">
                  Inclusa una guida d'uso per non sbagliare tono, forma o
                  contenuto.
                </p>
              </div>
              <div className="service-card-upload">
                <a
                  href="\public\Doc Template Kit.pdf"
                  download
                  className="service-card-download"
                  style={{ marginTop: "8px", display: "inline-block" }}
                >
                  Scarica esempio in PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Noi Section */}
      <section id="why" className="section section-gold">
        <div className="container max-w-4xl">
          <div className="section-content">
            <h2 className="section-title">Perché Noi</h2>
            <p className="section-text">
              Sappiamo cosa vuol dire essere una piccola realtà: avere tanto da
              dire, poco tempo e documenti che sembrano scritti da un altro
              pianeta.
            </p>
            <p className="section-text">
              Per questo uniamo design, linguaggio chiaro e competenza legale
              per costruire documenti che non fanno paura, ma che spiegano,
              proteggono e valorizzano quello che fai.
            </p>
            <p className="section-text">
              Perché anche una policy può farsi leggere, un contratto può farsi
              capire e un documento può raccontare chi sei.
            </p>
          </div>
        </div>
      </section>

      {/* Come Lavoriamo Section */}
      <section id="come" className="section section-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Come Lavoriamo</h2>
            <p className="section-text max-w-3xl">
              Non ci limitiamo a scrivere: progettiamo documenti che funzionano
              nella forma, nel contenuto e nell'uso quotidiano. Lavoriamo con un
              approccio artigianale ma preciso, unendo competenze legali,
              grafiche e tecniche.
            </p>
          </div>

          <div className="process-grid">
            {/* Ascoltiamo */}
            <div className="process-step">
              <div className="process-step-icon primary">
                <span className="process-step-number primary">1</span>
              </div>
              <h3 className="process-step-title">Ascoltiamo</h3>
              <p className="process-step-text">
                Ci racconti che tipo di documento ti serve, oppure ci mandi
                quello che hai.
              </p>
              <p className="process-step-text-highlight">
                Anche se è un disastro di Word: partiamo da lì, senza giudizio.
              </p>
            </div>

            {/* Analizziamo */}
            <div className="process-step">
              <div className="process-step-icon gold">
                <span className="process-step-number gold">2</span>
              </div>
              <h3 className="process-step-title">Analizziamo</h3>
              <p className="process-step-text">
                Studiamo il contenuto, la struttura, il tono e la resa grafica.
              </p>
              <p className="process-step-text-highlight">
                Capiremo insieme cosa tenere, cosa migliorare e come renderlo
                chiaro, leggibile e coerente.
              </p>
            </div>

            {/* Progettiamo */}
            <div className="process-step">
              <div className="process-step-icon primary">
                <span className="process-step-number primary">3</span>
              </div>
              <h3 className="process-step-title">Progettiamo</h3>
              <p className="process-step-text">
                Riscriviamo, impaginiamo, mettiamo in ordine.
              </p>
              <p className="process-step-text-highlight">
                Il risultato è un documento leggibile, credibile e professionale
                con grafica pulita e pensata per chi lo legge.
              </p>
            </div>

            {/* Consegnamo */}
            <div className="process-step">
              <div className="process-step-icon gold">
                <span className="process-step-number gold">4</span>
              </div>
              <h3 className="process-step-title">Consegnamo</h3>
              <p className="process-step-text">
                Ti restituiamo tutto in formato modificabile pronto per essere
                usato davvero.
              </p>
              <p className="process-step-text-highlight">
                E se serve, possiamo integrarlo nel tuo sito o creare versioni
                digitali con il supporto del nostro sviluppatore.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-primary2">
        <div className="container max-w-4xl">
          <div className="section-content">
            <h2 className="section-title">Contatti</h2>
            <p className="section-text">
              Hai un documento da migliorare? Vuoi saperne di più sui nostri
              servizi? Scrivici o seguici sui social.
            </p>

            <div id="contact" className="contact-content">
              {/* Form di contatto */}
              <form
                className="contact-form"
                action="https://formspree.io/f/xvgqlrdy"
                method="POST"
              >
                <div className="form-group">
                  <label className="form-label">Nome*</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email*</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Oggetto*</label>
                  <input
                    type="text"
                    name="oggetto"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Messaggio*</label>
                  <textarea
                    className="form-textarea"
                    name="messaggio"
                    rows={5}
                    required
                    placeholder="Raccontaci di che tipo di documento hai bisogno o qual è la tua esigenza..."
                  ></textarea>
                </div>

                <button type="submit" className="form-button">
                  Invia Messaggio
                </button>
              </form>

              {/* Social Links */}
              <div className="social-links">
                <h3 className="social-title">Seguici sui Social</h3>
                <div className="social-buttons">
                  <a
                    href="https://www.linkedin.com/company/eidos-design-agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button linkedin"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/eidos_designstudio?igsh=OTdxY2thengwMm40&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button instagram"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
