// src/components/BarraDePesquisa.js
import React from "react";
import "../styles/BarraDePesquisa.css";

function BarraDePesquisa({ valorPesquisa, aoAlterarPesquisa }) {
  return (
    <div className="barra-de-pesquisa">
      <input
        type="text"
        placeholder="Buscar cliente..."
        value={valorPesquisa}
        onChange={(e) => aoAlterarPesquisa(e.target.value)}
        className="campo-pesquisa"
      />
      <button className="botao-pesquisa">&#128269;</button> {/* Lupa */}
    </div>
  );
}

export default BarraDePesquisa;
