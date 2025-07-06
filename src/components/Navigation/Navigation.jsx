import { Button } from "react-bootstrap";

function Navigation() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">EIDOS</div>
          <nav className="nav">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <Button variant="outline" className="get-started-btn">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
