// src/components/ItemCliente.js
import React from "react";
import "../styles/ItemCliente.css";

function ItemCliente({ cliente }) {
  const editarCliente = () => {
    console.log(`Editar cliente: ${cliente.id}`);
  };

  const excluirCliente = () => {
    console.log(`Excluir cliente: ${cliente.id}`);
  };

  return (
    <div className="item-cliente">
      <div>
        <strong>Nome:</strong> {cliente.nome} <br />
        <strong>Endereço:</strong> {cliente.endereco} <br />
        <strong>CEP:</strong> {cliente.cep} <br />
        <strong>Data de Nascimento:</strong> {cliente.data_nascimento} <br />
        <strong>Telefone:</strong> {cliente.telefone}
      </div>
      <div className="acoes-cliente">
        <button onClick={editarCliente} className="botao-editar">
          Editar
        </button>
        <button onClick={excluirCliente} className="botao-excluir">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ItemCliente;
