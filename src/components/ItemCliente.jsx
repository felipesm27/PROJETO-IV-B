import React from "react";
import { confirmarExclusao, confirmarEdicao } from "../utils/swalUtils"; // Importa as funções

import "../styles/ItemCliente.css";

function ItemCliente({ cliente }) {
  const editarCliente = () => {
    // Passa o ID e o Nome para a função de edição
    confirmarEdicao(cliente.id, cliente.nome);
  };

  const excluirCliente = () => {
    // Passa o ID e o Nome para a função de exclusão
    confirmarExclusao(cliente.id, cliente.nome);
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
