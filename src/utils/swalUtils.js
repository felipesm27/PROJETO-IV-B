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

// Alerta de sucesso ao editar cliente
export const sucessoEdicao = (nomeCliente) => {
  Swal.fire({
    title: "Edição Concluída!",
    text: `O cliente ${nomeCliente} foi editado com sucesso.`,
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#28a745",
  });
};

// Alerta de erro ao editar cliente
export const erroEdicao = () => {
  Swal.fire({
    title: "Erro ao Editar",
    text: "Não foi possível editar o cliente. Tente novamente.",
    icon: "error",
    confirmButtonText: "OK",
    confirmButtonColor: "#dc3545",
  });
};
