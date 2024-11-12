// src/hooks/useClientes.js
import { useState, useEffect } from "react";
import { fetchClientes } from "../services/api";

function useClientes() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarClientes = async () => {
      const response = await fetchClientes();
      if (response.status === 200) {
        setClientes(response.data);
      } else {
        setError(`Erro (${response.status}): ${response.error}`);
      }
    };
    carregarClientes();
  }, []);

  return { clientes, setClientes, error };
}

export default useClientes;
