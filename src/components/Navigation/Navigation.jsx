import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/photos/LogoEidosnobg1.png" alt="Eidos logo" />
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a
              href="#chisiamo"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Chi siamo
            </a>
            <a
              href="#cosafacciamo"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Cosa Facciamo
            </a>
            <a
              href="#why"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Perché noi
            </a>
            <a
              href="#come"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Come lavoriamo
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contatti
            </a>
          </nav>

          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${menuOpen ? "rotate1" : ""}`}></span>
            <span className={`bar ${menuOpen ? "fade" : ""}`}></span>
            <span className={`bar ${menuOpen ? "rotate2" : ""}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
