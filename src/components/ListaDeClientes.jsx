// src/components/ListaDeClientes.js
import React from "react";
import ItemCliente from "./ItemCliente";

function ListaDeClientes({ clientes }) {
  return (
    <div className="lista-de-clientes">
      {clientes.map((cliente) => (
        <ItemCliente key={cliente.id} cliente={cliente} />
      ))}
    </div>
  );
}

export default ListaDeClientes;
