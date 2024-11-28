import React, { useState } from "react";
import "./App.css";
import "./styles/MainContent.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import BarraDePesquisa from "./components/BarraDePesquisa";
import ListaDeClientes from "./components/ListaDeClientes";
import ContagemRegistros from "./components/ContagemRegistros";
import useClientes from "./hooks/useClientes"; // Importa o hook personalizado
import BotaoNovoCliente from "./components/BotaoNovoCliente"; // Importa o novo componente

function App() {
  const { clientes, error } = useClientes(); // Usa o hook para obter clientes e erro
  const [pesquisa, setPesquisa] = useState("");

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
        {/* Chama o botao novo cliente */}
        <BotaoNovoCliente onAbrirFormulario={abrirFormularioNovoCliente} />

        <BarraDePesquisa
          valorPesquisa={pesquisa}
          aoAlterarPesquisa={setPesquisa}
          onFocus={() => setPesquisaFocada(true)}
          onBlur={() => setPesquisaFocada(false)}
        />

        <ContagemRegistros total={clientesFiltrados.length} />

        {/* Exibe a mensagem de erro, se houver */}
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
