import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/MainContent.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BarraDePesquisa from "./components/BarraDePesquisa";
import ListaDeClientes from "./components/ListaDeClientes";
import ContagemRegistros from "./components/ContagemRegistros";
import { fetchClientes } from "./services/api";

function App() {
  const [clientes, setClientes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisaFocada, setPesquisaFocada] = useState(false); // Estado para controlar o foco da pesquisa

  // Carrega a lista de clientes ao montar o componente
  useEffect(() => {
    const carregarClientes = async () => {
      const response = await fetchClientes();
      if (response.status === 200) {
        setClientes(response.data); // Atualiza o estado com os clientes obtidos
      } else {
        console.error(`Erro (${response.status}): ${response.error}`);
      }
    };
    carregarClientes();
  }, []);

  // Filtra os clientes com base no termo de pesquisa
  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  // Função para abrir o formulário de adição de cliente
  const abrirFormularioNovoCliente = () => {
    console.log("Abrir formulário para adicionar novo cliente");
  };

  return (
    <div>
      <NavBar />
      <main className="main-container">
        <button onClick={abrirFormularioNovoCliente} className="botao-novo">
          Novo
        </button>

        <BarraDePesquisa
          valorPesquisa={pesquisa}
          aoAlterarPesquisa={setPesquisa}
          onFocus={() => setPesquisaFocada(true)} // Atualiza o estado para true ao focar
          onBlur={() => setPesquisaFocada(false)} // Atualiza o estado para false ao desfocar
        />

        {/* Usa o novo componente para exibir a contagem de registros */}
        <ContagemRegistros total={clientesFiltrados.length} />

        <div className="area-lista-clientes">
          {/* Passa a lista de clientes filtrados e usa uma key única para cada item */}
          <ListaDeClientes clientes={clientesFiltrados} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
