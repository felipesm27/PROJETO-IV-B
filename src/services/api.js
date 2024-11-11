const API_URL = "http://localhost:3001/clientes";
const headers = { "Content-Type": "application/json" };

// Função para buscar todos os clientes
export async function fetchClientes() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Erro:", error);
    return { status: 500, error: "Erro ao buscar clientes" };
  }
}

// Função para adicionar um novo cliente
export async function addCliente(cliente) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(cliente),
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Erro:", error);
    return { status: 500, error: "Erro ao adicionar cliente" };
  }
}

// Função para atualizar um cliente existente
export async function updateCliente(clienteId, cliente) {
  try {
    const response = await fetch(`${API_URL}/${clienteId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(cliente),
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Erro:", error);
    return { status: 500, error: "Erro ao atualizar cliente" };
  }
}

// Função para deletar um cliente
export async function deleteCliente(clienteId) {
  try {
    const response = await fetch(`${API_URL}/${clienteId}`, {
      method: "DELETE",
      headers,
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Erro:", error);
    return { status: 500, error: "Erro ao deletar cliente" };
  }
}
