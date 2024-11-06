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

  // Carregar os clientes ao iniciar o componente
  useEffect(() => {
    const carregarClientes = async () => {
      const dados = await fetchClientes();
      setClientes(dados);
    };
    carregarClientes();
  }, []);

  // Filtrar clientes de acordo com a pesquisa
  const clientesFiltrados = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <main style={{ padding: "1rem", paddingBottom: "5rem" }}>
        <BarraDePesquisa
          valorPesquisa={pesquisa}
          aoAlterarPesquisa={setPesquisa}
        />
        <ListaDeClientes clientes={clientesFiltrados} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
