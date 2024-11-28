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
export async function addCliente(req, res) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(req.body),
    });
    res.status(200).json(data); // Responde com status 200 e dados do cliente adicionado
  } catch (error) {
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
    res.status(400).send(error); // Responde com status 400 em caso de erro
  }
}
