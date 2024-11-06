// src/components/ItemCliente.js
import React from "react";
import "../styles/ItemCliente.css";

function ItemCliente({ cliente }) {
  return (
    <div className="item-cliente">
      <strong>Nome:</strong> {cliente.nome} <br />
      <strong>Endereço:</strong> {cliente.endereco} <br />
      <strong>CEP:</strong> {cliente.cep} <br />
      <strong>Data de Nascimento:</strong> {cliente.data_nascimento} <br />
      <strong>Telefone:</strong> {cliente.telefone}
    </div>
  );
}

export default ItemCliente;
