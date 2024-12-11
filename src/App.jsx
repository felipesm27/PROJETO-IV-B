import React, { useState } from "react";
import useClientes from "./hooks/useClientes"; // Hook personalizado
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BarraDePesquisa from "./components/BarraDePesquisa";
import ListaDeClientes from "./components/ListaDeClientes";
import ContagemRegistros from "./components/ContagemRegistros";
import BotaoNovoCliente from "./components/BotaoNovoCliente";
import FormularioCadastroCliente from "./components/FormularioCadastroCliente";
import { sucessoEdicao, erroEdicao } from "./utils/swalUtils"; // Importa as funções de alertas

import "./App.css";
import "./styles/MainContent.css";

function App() {
  const { clientes, error, cadastrarCliente, excluirCliente, editarCliente } =
    useClientes();
  const [pesquisa, setPesquisa] = useState("");
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const abrirFormularioNovoCliente = () => setExibirFormulario(true);
  const fecharFormulario = () => setExibirFormulario(false);

  const handleEditarCliente = async (clienteId, clienteAtualizado) => {
    try {
      const resultado = await editarCliente(clienteId, clienteAtualizado);
      if (resultado.success) {
        sucessoEdicao(clienteAtualizado.nome); // Exibe um alerta de sucesso com o nome do cliente
      } else {
        erroEdicao(); // Exibe um alerta genérico de erro
      }
    } catch (error) {
      console.error("Erro ao editar cliente:", error);
      erroEdicao(); // Exibe um alerta de erro no caso de falha na conexão
    }
  };

  return (
    <div>
      <NavBar />
      <main className="main-container">
        {/* Renderizar o formulário no topo */}
        {exibirFormulario && (
          <FormularioCadastroCliente
            onCadastrarCliente={cadastrarCliente}
            onCancelar={fecharFormulario}
          />
        )}

        {!exibirFormulario && (
          <>
            <BotaoNovoCliente onAbrirFormulario={abrirFormularioNovoCliente} />
            <BarraDePesquisa
              valorPesquisa={pesquisa}
              aoAlterarPesquisa={setPesquisa}
            />
          </>
        )}

        <ContagemRegistros total={clientesFiltrados.length} />

        {error && <p className="error-message">{error}</p>}

        <div className="area-lista-clientes">
          <ListaDeClientes
            clientes={clientesFiltrados}
            onExcluir={excluirCliente}
            onEditar={handleEditarCliente} // Passa a função de edição
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
