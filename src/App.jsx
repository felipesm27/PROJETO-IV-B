import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addCliente } from "./services/api"; // Importa a função de serviço
import { sucessoCadastro } from "./utils/swalUtils";
import "./App.css";
import "./styles/MainContent.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BarraDePesquisa from "./components/BarraDePesquisa";
import ListaDeClientes from "./components/ListaDeClientes";
import ContagemRegistros from "./components/ContagemRegistros";
import useClientes from "./hooks/useClientes"; // Importa o hook personalizado
import BotaoNovoCliente from "./components/BotaoNovoCliente"; // Importa o novo componente
import FormularioCadastroCliente from "./components/FormularioCadastroCliente"; // Importa o formulário

function App() {
  const { clientes, error, setClientes } = useClientes(); // Usa o hook para obter clientes e erro
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisaFocada, setPesquisaFocada] = useState(false);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const abrirFormularioNovoCliente = () => setExibirFormulario(true);
  const fecharFormulario = () => setExibirFormulario(false);

  const cadastrarCliente = async (novoCliente) => {
    try {
      const clienteComId = { ...novoCliente, id: uuidv4() }; // Gera um ID único usando UUID

      const response = await addCliente(clienteComId);
      if (response.status === 200) {
        sucessoCadastro(novoCliente.nome); // Exibe alerta de sucesso
        setClientes((prevClientes) => [...prevClientes, response.data]); // Atualiza a lista localmente
        fecharFormulario(); // Fecha o formulário após o cadastro
      } else {
        console.error("Erro ao cadastrar cliente:", response.message);
      }
    } catch (error) {
      console.error("Erro na conexão:", error);
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

        {/* Mostrar o botão "Novo" e a barra de pesquisa apenas se o formulário não estiver visível */}
        {!exibirFormulario && (
          <>
            <BotaoNovoCliente onAbrirFormulario={abrirFormularioNovoCliente} />

            <BarraDePesquisa
              valorPesquisa={pesquisa}
              aoAlterarPesquisa={setPesquisa}
              onFocus={() => setPesquisaFocada(true)}
              onBlur={() => setPesquisaFocada(false)}
            />
          </>
        )}

        <ContagemRegistros total={clientesFiltrados.length} />

        {error && <p className="error-message">{error}</p>}

        <div className="area-lista-clientes">
          <ListaDeClientes clientes={clientesFiltrados} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
