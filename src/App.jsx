import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BarraDePesquisa from "./components/BarraDePesquisa";
import ListaDeClientes from "./components/ListaDeClientes";
import { fetchClientes } from "./services/api";

function App() {
  const [clientes, setClientes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisaFocada, setPesquisaFocada] = useState(false); // Estado para controlar o foco

  useEffect(() => {
    const carregarClientes = async () => {
      const response = await fetchClientes();
      if (response.status === 200) {
        setClientes(response.data);
      } else {
        console.error(`Erro (${response.status}): ${response.error}`);
      }
    };
    carregarClientes();
  }, []);

  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

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

        {/* Condicionalmente exibe a contagem apenas se o campo de pesquisa não estiver focado */}
        {!pesquisaFocada && <p>Total de cadastros: {clientes.length}</p>}

        <div className="area-lista-clientes">
          <ListaDeClientes clientes={clientesFiltrados} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
