// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} - Gestão de Clientes - Projeto
        Integrador IV-B
      </p>
    </footer>
  );
}

export default Footer;
