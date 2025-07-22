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
                  Progettiamo documenti aziendali chiari, leggibili e belli —
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
      <section className="section section-primary">
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
      <section className="section section-background">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Cosa Facciamo</h2>
          </div>

          <div className="services-grid">
            {/* Redesign documenti */}
            <div className="service-card">
              <h3 className="service-card-title">
                Redesign documenti - RifattoperLeggere
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
                <label className="service-card-label">
                  Carica il tuo documento (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="service-card-input"
                />
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
                <label className="service-card-label">
                  Carica documentazione esistente (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="service-card-input"
                />
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
                <label className="service-card-label">
                  Carica documento da analizzare (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="service-card-input"
                />
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
                <label className="service-card-label">
                  Carica contenuto da impaginare (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="service-card-input"
                />
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
                <label className="service-card-label">
                  Carica esempi di documentazione aziendale (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="service-card-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Noi Section */}
      <section className="section section-gold">
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
              per costruire documenti che non fanno paura — ma che spiegano,
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
      <section className="section section-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Come Lavoriamo</h2>
            <p className="section-text max-w-3xl">
              Non ci limitiamo a scrivere: progettiamo documenti che funzionano
              — nella forma, nel contenuto e nell'uso quotidiano. Lavoriamo con
              un approccio artigianale ma preciso, unendo competenze legali,
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
                — con grafica pulita e pensata per chi lo legge.
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
    </div>
  );
};

export default HomePage;
