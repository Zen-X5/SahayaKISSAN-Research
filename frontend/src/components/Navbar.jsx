import { NavLink } from "react-router-dom";

export default function Navbar({ isOpen, onClose }) {
  return (
    <aside className={`navbar ${isOpen ? "navbar-open" : "navbar-closed"}`}>
      <nav className="nav-links">
        <NavLink to="/" className="nav-item" onClick={onClose}>
          <span className="nav-index">1.</span>
          <span className="nav-text">Agricultural Scenario in Assam</span>
        </NavLink>

        <NavLink to="/page2" className="nav-item" onClick={onClose}>
          <span className="nav-index">2.</span>
          <span className="nav-text">Agricultural Research in India</span>
        </NavLink>

        <NavLink to="/page3" className="nav-item" onClick={onClose}>
          <span className="nav-index">3.</span>
          <span className="nav-text">y</span>
        </NavLink>

        <NavLink to="/page4" className="nav-item" onClick={onClose}>
          <span className="nav-index">4.</span>
          <span className="nav-text">Climate Change, Technology Gaps, and Farmer Distress in India</span>
        </NavLink>
      </nav>
    </aside>
  );
}
