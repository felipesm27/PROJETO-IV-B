import Swal from "sweetalert2";

// Função de confirmação de exclusão
export const confirmarExclusao = (clienteId, clienteNome) => {
  return Swal.fire({
    title: "Tem certeza?",
    text: `Você está prestes a excluir o cliente ${clienteNome}. Esta ação não pode ser desfeita.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sim, excluir",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  }).then((result) => {
    if (result.isConfirmed) {
      // Para fins didáticos, simula a exclusão e exibe a mensagem
      console.log(`Cliente com ID ${clienteId} foi excluído! (simulação)`);
      Swal.fire(
        "Excluído!",
        `O cliente ${clienteNome} foi excluído com sucesso.`,
        "success"
      );
    } else {
      console.log("Exclusão cancelada");
    }
  });
};

// Função de confirmação de edição
export const confirmarEdicao = (clienteId, clienteNome) => {
  return Swal.fire({
    title: "Tem certeza?",
    text: `Você está prestes a editar os dados do cliente ${clienteNome}. Deseja continuar?`,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Sim, editar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      // Para fins didáticos, simula a edição e exibe a mensagem
      console.log(`Cliente com ID ${clienteId} será editado! (simulação)`);
      Swal.fire(
        "Edição Confirmada!",
        `Você está prestes a editar os dados do cliente ${clienteNome}.`,
        "info"
      );
    } else {
      console.log("Edição cancelada");
    }
  });
};

export const sucessoCadastro = (clienteNome) => {
  return Swal.fire({
    title: "Cadastro Realizado!",
    text: `O cliente ${clienteNome} foi cadastrado com sucesso.`,
    icon: "success",
    confirmButtonColor: "#3085d6",
  });
};
