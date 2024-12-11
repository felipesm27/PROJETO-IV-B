import ItemCliente from "./ItemCliente";

function ListaDeClientes({ clientes, onExcluir, onEditar }) {
  return (
    <div className="lista-de-clientes">
      {clientes.map((cliente) => (
        <ItemCliente
          key={cliente.id} // Usa o id como chave
          cliente={cliente}
          onExcluir={onExcluir}
          onEditar={onEditar}
        />
      ))}
    </div>
  );
}

export default ListaDeClientes;
