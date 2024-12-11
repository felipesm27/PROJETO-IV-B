import React, { useState } from "react";
import { confirmarExclusao } from "../utils/swalUtils";
import "../styles/ItemCliente.css";

function ItemCliente({ cliente, onExcluir, onEditar }) {
  const [modoEdicao, setModoEdicao] = useState(false); // Controle do modo de edição
  const [dadosAtualizados, setDadosAtualizados] = useState({ ...cliente }); // Estado local para edição

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDadosAtualizados({ ...dadosAtualizados, [name]: value }); // Atualiza o estado local
  };

  const salvarEdicao = () => {
    onEditar(cliente.id, dadosAtualizados); // Chama a função de edição
    setModoEdicao(false); // Sai do modo de edição
  };

  const cancelarEdicao = () => {
    setDadosAtualizados({ ...cliente }); // Reseta os dados para os originais
    setModoEdicao(false); // Sai do modo de edição
  };

  const excluirCliente = async () => {
    const result = await confirmarExclusao(cliente.id, cliente.nome); // Usa cliente.id
    if (result.isConfirmed) {
      onExcluir(cliente.id); // Passa o cliente.id para o App.jsx
    }
  };

  return (
    <div className="item-cliente">
      {modoEdicao ? (
        <div className="modo-edicao">
          <input
            type="text"
            name="nome"
            value={dadosAtualizados.nome}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="endereco"
            value={dadosAtualizados.endereco}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cep"
            value={dadosAtualizados.cep}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="data_nascimento"
            value={dadosAtualizados.data_nascimento}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="telefone"
            value={dadosAtualizados.telefone}
            onChange={handleInputChange}
          />
          <button onClick={salvarEdicao} className="botao-salvar">
            Salvar
          </button>
          <button onClick={cancelarEdicao} className="botao-cancelar">
            Cancelar
          </button>
        </div>
      ) : (
        <div>
          <strong>Nome:</strong> {cliente.nome} <br />
          <strong>Endereço:</strong> {cliente.endereco} <br />
          <strong>CEP:</strong> {cliente.cep} <br />
          <strong>Data de Nascimento:</strong> {cliente.data_nascimento} <br />
          <strong>Telefone:</strong> {cliente.telefone}
          <div className="acoes-cliente">
            <button
              onClick={() => setModoEdicao(true)}
              className="botao-editar"
            >
              Editar
            </button>
            <button onClick={excluirCliente} className="botao-excluir">
              Excluir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemCliente;
