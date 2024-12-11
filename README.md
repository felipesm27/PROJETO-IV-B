# Gestão de Clientes

Este é um projeto de exemplo desenvolvido em **React** com **Vite** para gerenciar uma lista de clientes. O sistema permite adicionar, editar, excluir e pesquisar clientes, além de contar o número total de cadastros.

Usamos **Vite** para acelerar o processo de desenvolvimento, oferecendo uma experiência mais rápida e eficiente na construção da interface do usuário.

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
   npm run server
   ```
4. Execute o projeto React:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação no navegador em `http://localhost:3000`.

## Dependências

- **React**: Biblioteca principal para a criação da interface do usuário.
- **React DOM**: Biblioteca para manipulação do DOM com React.
- **Vite**: Ferramenta de desenvolvimento para criação de projetos React rápida e eficientemente.
- **JSON Server**: Utilizado para simular uma API REST com operações CRUD.
- **SweetAlert2:**: Biblioteca para exibir alertas personalizados, usada para confirmação de exclusão de clientes e futuras edições.
- **UUID: Biblioteca:** para geração de identificadores únicos universais (UUID) no momento do cadastro, garantindo unicidade entre os registros.
- **React-Input-Mask:** Biblioteca utilizada para aplicar máscaras em campos de entrada, como CEP e telefone, garantindo consistência na formatação dos dados.
- **ESLint e Plugins**: Ferramenta de linting para manter o código limpo e consistente.

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
    {
      "cliente_id": 2,
      "nome": "Maria Santos",
      "endereco": "Av B, 456",
      "cep": "87654-321",
      "data_nascimento": "1985-05-15",
      "telefone": "(21) 91234-5678"
    },
    ...
  ]
}
```

## Checklist de Tarefas Pendentes

Aqui estão algumas funcionalidades e melhorias que ainda precisam ser implementadas:

- [x] **Adicionar SweetAlert** para notificações e feedback de ações, como cadastro, edição, exclusão e erros.
- [x] **Finalizar a funcionalidade de cadastro** de clientes (adicionar cliente ao JSON Server).
- [x] **Finalizar a funcionalidade de edição** de clientes (atualizar informações do cliente no JSON Server).
- [x] **Finalizar a funcionalidade de exclusão** de clientes (remover cliente do JSON Server).
- [ ] **Refatorar o código onde possível** para melhorar a organização e modularidade.
- [ ] **Adicionar um indicador de carregamento (opcional)** para melhorar a experiência do usuário enquanto os dados são carregados.
