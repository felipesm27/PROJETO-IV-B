// src/services/api.js

const API_URL = "http://localhost:3001/clientes";

// Função para buscar todos os clientes
export async function fetchClientes() {
  const response = await fetch(API_URL);
  return await response.json();
}

// Função para adicionar um novo cliente
export async function addCliente(cliente) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
  return await response.json();
}

// Função para atualizar um cliente existente
export async function updateCliente(clienteId, cliente) {
  const response = await fetch(`${API_URL}/${clienteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
  return await response.json();
}

// Função para deletar um cliente
export async function deleteCliente(clienteId) {
  const response = await fetch(`${API_URL}/${clienteId}`, {
    method: "DELETE",
  });
  return await response.json();
}
