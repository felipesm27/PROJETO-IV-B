// src/components/ContagemRegistros.jsx
import React from "react";
import "../styles/ContagemRegistros.css";

function ContagemRegistros({ total }) {
  return (
    <p>
      {total > 1
        ? `${total} registros encontrados`
        : `${total} registro encontrado`}
    </p>
  );
}

export default ContagemRegistros;
