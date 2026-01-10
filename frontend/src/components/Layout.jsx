import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";


export default function Layout() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <header className="title">SahayaKISSAN Research</header>
      <ScrollToTop /> 

      <div className="layout">
        <button
          className={`toggle-btn ${isNavbarOpen ? "toggle-left" : "toggle-right"}`}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          aria-label="Toggle navigation"
        >
          {isNavbarOpen ? "◀" : "▶"}
        </button>

        <Navbar isOpen={isNavbarOpen} onClose={() => setIsNavbarOpen(false)} />

        <main className={`content-area ${isNavbarOpen ? "content-open" : ""}`}>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}
