// src/components/BarraDePesquisa.js
import React from "react";
import "../styles/BarraDePesquisa.css";

function BarraDePesquisa({
  valorPesquisa,
  aoAlterarPesquisa,
  onFocus,
  onBlur,
}) {
  return (
    <div className="barra-de-pesquisa">
      <input
        type="text"
        placeholder="Buscar cliente..."
        value={valorPesquisa}
        onChange={(e) => aoAlterarPesquisa(e.target.value)}
        onFocus={onFocus} // Passa o evento de foco
        onBlur={onBlur} // Passa o evento de perda de foco
        className="campo-pesquisa"
      />
      <button className="botao-pesquisa">&#128269;</button>
    </div>
  );
}

export default BarraDePesquisa;
