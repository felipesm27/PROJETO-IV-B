import React from "react";

function BotaoNovoCliente({ onAbrirFormulario }) {
  return (
    <button onClick={onAbrirFormulario} className="botao-novo">
      Novo
    </button>
  );
}

export default BotaoNovoCliente;
