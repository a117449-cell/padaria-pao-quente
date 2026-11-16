const pagina = window.location.pathname; 
if (pagina.endsWith("index.html") || pagina.endsWith("/")) { 
     alert("Bem-vindo ao site!"); 
}

function enviarFormulario(evento) {
  evento.preventDefault();
  const nome = document.getElementById("nome").value;
  alert("Obrigado, " + nome + "! Entraremos em contacto em breve.");
  document.getElementById("formContacto").reset();
}