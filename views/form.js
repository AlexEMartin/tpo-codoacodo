
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarFormulario);
});

const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validarFormulario(evento) {
  evento.preventDefault();
  let usuario = document.getElementById("usuario").value;
  if (usuario.length == 0) {
    swal("Error", "No has escrito nada en el usuario", "error");
    return;
  }
  let correo = document.getElementById("email").value;
  if (!regexEmail.test(correo)) {
    swal("Cuidado", "Correo no válido", "warning");
    return;
  }
  let consulta = document.getElementById("textarea").value;
  if (consulta.length < 10) {
    swal("Consulta", "Aprovecha para escribir en detalle tu consulta", "info");
    return;
  }
  this.submit();
}
