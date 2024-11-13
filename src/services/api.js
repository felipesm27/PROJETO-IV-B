const API_URL = "http://localhost:3001/clientes";
const headers = { "Content-Type": "application/json" };

export async function fetchClientes() {
  try {
    const response = await fetch(API_URL, { headers });
    const data = await response.json();
    return { status: 200, data }; // Garante que o status e os dados sejam retornados em caso de sucesso
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return { status: 400, error: error.message || "Erro ao buscar clientes" }; // Retorna um objeto com status e erro em caso de falha
  }
}

// Função para adicionar um novo cliente
export async function addCliente(req, res) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(200).json(data); // Responde com status 200 e dados do cliente adicionado
  } catch (error) {
    console.error("Erro ao adicionar cliente:", error);
    res.status(400).send(error); // Responde com status 400 em caso de erro
  }
}

// Função para atualizar um cliente existente
export async function updateCliente(req, res) {
  const { id } = req.params;
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.status(200).json(data); // Responde com status 200 e dados do cliente atualizado
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    res.status(400).send(error); // Responde com status 400 em caso de erro
  }
}

// Função para deletar um cliente
export async function deleteCliente(req, res) {
  const { id } = req.params;
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers,
    });
    res.status(200).send(); // Responde com status 200 em caso de sucesso no delete
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    res.status(400).send(error); // Responde com status 400 em caso de erro
  }
}
