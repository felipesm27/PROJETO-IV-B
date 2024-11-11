const API_URL = "http://localhost:3001/clientes";
const headers = { "Content-Type": "application/json" };

// Função auxiliar para tratar a resposta
// Verifica se a resposta foi bem-sucedida e retorna os dados ou lança um erro
async function handleResponse(response) {
  const data = await response.json(); // Converte a resposta para JSON
  if (!response.ok) {
    // Verifica se o status da resposta indica erro
    throw new Error(data.error || "Erro na requisição"); // Lança erro com a mensagem da resposta ou uma padrão
  }
  return { status: response.status, data }; // Retorna o status e os dados se tudo estiver ok
}

// Função para buscar todos os clientes
// Realiza uma requisição GET para obter a lista de clientes
export async function fetchClientes() {
  try {
    const response = await fetch(API_URL); // Faz a requisição GET para o endpoint de clientes
    return await handleResponse(response); // Trata a resposta com a função auxiliar
  } catch (error) {
    console.error("Erro ao buscar clientes:", error); // Exibe o erro no console
    return { status: 500, error: "Erro ao buscar clientes" }; // Retorna um objeto de erro padronizado
  }
}

// Função para adicionar um novo cliente
// Envia uma requisição POST com os dados do novo cliente
export async function addCliente(cliente) {
  try {
    const response = await fetch(API_URL, {
      method: "POST", // Define o método como POST para criar um novo recurso
      headers, // Inclui os headers definidos acima
      body: JSON.stringify(cliente), // Converte o objeto cliente para JSON e envia no corpo da requisição
    });
    return await handleResponse(response); // Trata a resposta com a função auxiliar
  } catch (error) {
    console.error("Erro ao adicionar cliente:", error); // Exibe o erro no console
    return { status: 500, error: "Erro ao adicionar cliente" }; // Retorna um objeto de erro padronizado
  }
}

// Função para atualizar um cliente existente
// Envia uma requisição PUT com os dados atualizados do cliente
export async function updateCliente(id, cliente) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT", // Define o método como PUT para atualizar um recurso existente
      headers, // Inclui os headers definidos acima
      body: JSON.stringify(cliente), // Converte o objeto cliente para JSON e envia no corpo da requisição
    });
    return await handleResponse(response); // Trata a resposta com a função auxiliar
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error); // Exibe o erro no console
    return { status: 500, error: "Erro ao atualizar cliente" }; // Retorna um objeto de erro padronizado
  }
}

// Função para deletar um cliente
// Envia uma requisição DELETE para remover um cliente existente
export async function deleteCliente(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE", // Define o método como DELETE para remover o recurso
      headers, // Inclui os headers definidos acima
    });
    // Em caso de DELETE, não tentar extrair JSON se o corpo for vazio
    if (!response.ok) {
      return { status: response.status, error: "Erro ao deletar cliente" }; // Retorna erro se a resposta não for ok
    }
    return { status: response.status }; // DELETE normalmente retorna apenas o status
  } catch (error) {
    console.error("Erro ao deletar cliente:", error); // Exibe o erro no console
    return { status: 500, error: "Erro ao deletar cliente" }; // Retorna um objeto de erro padronizado
  }
}
