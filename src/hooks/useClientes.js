import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Importação do UUID
import {
  fetchClientes,
  addCliente,
  updateCliente,
  deleteCliente,
} from "../services/api";

function useClientes() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarClientes = async () => {
      try {
        const response = await fetchClientes();
        if (response.status === 200) {
          setClientes(response.data);
        } else {
          setError(`Erro (${response.status}): ${response.message}`);
        }
      } catch (err) {
        setError("Erro ao carregar os clientes.");
        console.error(err);
      }
    };
    carregarClientes();
  }, []);

  const cadastrarCliente = async (novoCliente) => {
    try {
      const clienteComId = { ...novoCliente, id: uuidv4() }; // Gera um ID único
      const response = await addCliente(clienteComId);
      if (response.status === 200) {
        setClientes((prevClientes) => [...prevClientes, response.data]); // Atualiza o estado
        return { success: true };
      } else {
        console.error("Erro ao cadastrar cliente:", response.message);
        return { success: false };
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
      return { success: false };
    }
  };

  const excluirCliente = async (clienteId) => {
    try {
      const response = await deleteCliente(clienteId);
      if (response.status === 200) {
        setClientes((prevClientes) =>
          prevClientes.filter((cliente) => cliente.id !== clienteId)
        );
        return { success: true };
      } else {
        console.error("Erro ao excluir cliente:", response.message);
        return { success: false };
      }
    } catch (error) {
      console.error("Erro na conexão com o servidor:", error);
      return { success: false };
    }
  };

  const editarCliente = async (clienteId, clienteAtualizado) => {
    try {
      const response = await updateCliente(clienteId, clienteAtualizado);
      if (response.status === 200) {
        setClientes((prevClientes) =>
          prevClientes.map((cliente) =>
            cliente.id === clienteId ? response.data : cliente
          )
        );
        return { success: true };
      } else {
        console.error("Erro ao editar cliente:", response.message);
        return { success: false };
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
      return { success: false };
    }
  };

  return {
    clientes,
    error,
    cadastrarCliente,
    editarCliente,
    excluirCliente,
    setClientes,
  };
}

export default useClientes;
