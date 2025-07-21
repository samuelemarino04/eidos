import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
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
                  <span className="hero-span">Perché ogni parola conta.</span>
                </p>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="hero-image">
              <div className="app-screenshot">
                <img
                  src="public\photos\Eidoslogo1.jpg"
                  alt="App Screenshot"
                  className="screenshot-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chisiamo" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Chi siamo</h2>
            <p className="section-description">
              Discover the features that make us the preferred choice for
              thousands of users worldwide.
            </p>
          </div>

          <div className="features-grid"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="cosafacciamo" className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Our Mission</h2>
            <p className="about-description">
              We believe in creating tools that empower people to do their best
              work. Our app is designed with simplicity, efficiency, and user
              experience at its core. Join thousands of satisfied users who have
              transformed their workflow with our innovative solution.
            </p>
            <div className="testimonial">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop"
                alt="Team working together"
                className="testimonial-img"
              />
              <p className="testimonial-quote">
                "This app has completely revolutionized how we work. The
                intuitive design and powerful features have saved us countless
                hours every week."
              </p>
              <div className="testimonial-author">
                - Sarah Johnson, Product Manager
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
