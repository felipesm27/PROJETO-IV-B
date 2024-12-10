import React, { useState } from "react";
import InputMask from "react-input-mask";
import "../styles/FormularioCadastroCliente.css";

function FormularioCadastroCliente({ onCadastrarCliente, onCancelar }) {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && endereco && cep && dataNascimento && telefone) {
      onCadastrarCliente({
        nome,
        endereco,
        cep,
        data_nascimento: dataNascimento,
        telefone,
      });
      setNome("");
      setEndereco("");
      setCep("");
      setDataNascimento("");
      setTelefone("");
    }
  };

  return (
    <div className="formulario-cadastro">
      <h2>Novo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CEP:</label>
          <InputMask
            mask="99999-999"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          >
            {(inputProps) => <input {...inputProps} type="text" />}
          </InputMask>
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <InputMask
            mask="(99) 99999-9999"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          >
            {(inputProps) => <input {...inputProps} type="tel" />}
          </InputMask>
        </div>
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={onCancelar}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormularioCadastroCliente;
