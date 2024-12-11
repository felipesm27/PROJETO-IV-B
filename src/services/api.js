const API_URL = "http://localhost:3001/clientes";
const headers = { "Content-Type": "application/json" };

export async function fetchClientes() {
  try {
    const response = await fetch(API_URL, { headers });
    const data = await response.json();
    return { status: 200, data }; // Garante que o status e os dados sejam retornados em caso de sucesso
  } catch (error) {
    return { status: 400, message: "Erro ao carregar cliente", error }; // Retorna uma mensagem customizada e o erro original
  }
}

// Função para adicionar um novo cliente
export async function addCliente(cliente) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    const data = await response.json();
    return { status: 200, data };
  } catch (error) {
    return { status: 400, message: "Erro ao cadastrar cliente", error };
  }
}

// Função para atualizar um cliente existente
export async function updateCliente(clienteId, clienteAtualizado) {
  try {
    const response = await fetch(`${API_URL}/${clienteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clienteAtualizado),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar cliente");
    }

    const data = await response.json();
    return { status: 200, data }; // Retorna o cliente atualizado
  } catch (error) {
    return { status: 400, message: error.message };
  }
}

// Função para deletar um cliente
export async function deleteCliente(clienteId) {
  try {
    const response = await fetch(`${API_URL}/${clienteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao excluir cliente");
    }

    return { status: 200 }; // Retorna sucesso se a exclusão for realizada
  } catch (error) {
    return { status: 400, message: "Erro ao excluir cliente", error };
  }
}
