# Gestão de Clientes

Este é um projeto de exemplo desenvolvido em React para gerenciar uma lista de clientes. O sistema permite adicionar, editar, excluir e pesquisar clientes, além de contar o número total de cadastros.

## Funcionalidades

- **Adicionar Cliente**: Clique no botão "Novo" para adicionar um novo cliente.
- **Pesquisar Cliente**: Digite o nome do cliente no campo de busca para filtrar os resultados.
- **Contagem de Cadastros**: Mostra o número total de clientes cadastrados, exceto quando o campo de pesquisa está em foco.
- **Editar Cliente**: Cada cliente possui um botão para edição.
- **Excluir Cliente**: Cada cliente possui um botão para exclusão.

## Estrutura do Projeto

- **src/App.js**: Componente principal que organiza a estrutura da aplicação e integra os outros componentes.
- **src/components/NavBar.js**: Componente para a barra de navegação.
- **src/components/Footer.js**: Componente para o rodapé.
- **src/components/BarraDePesquisa.js**: Componente para o campo de pesquisa com uma lupa.
- **src/components/ListaDeClientes.js**: Componente que exibe a lista de clientes.
- **src/components/ItemCliente.js**: Componente individual para cada cliente na lista.
- **src/services/api.js**: Serviço que gerencia as requisições para o servidor JSON.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Inicie o JSON Server para simular uma API REST com o arquivo `clientes.json`:
   ```bash
   json-server --watch clientes.json --port 3001
   ```
4. Execute o projeto React:
   ```bash
   npm start
   ```
5. Acesse a aplicação no navegador em `http://localhost:3000`.

## Dependências

- **React**: Biblioteca principal para a criação da interface do usuário.
- **JSON Server**: Utilizado para simular uma API REST com operações CRUD.

## Estrutura do Banco de Dados

O arquivo `clientes.json` armazena os dados dos clientes com o seguinte formato:

```json
{
  "clientes": [
    {
      "cliente_id": 1,
      "nome": "João Silva",
      "endereco": "Rua A, 123",
      "cep": "12345-678",
      "data_nascimento": "1990-01-01",
      "telefone": "(11) 91234-5678"
    },
    ...
  ]
}
```
