function selecionaLingua() {
  let idioma = document.getElementById("idioma").value;
  console.log(idioma);
  let idiomaSelecionado;

  switch (idioma) {
    case "portugues":
      idiomaSelecionado = "Seja Bem Vindo";
      break;

    case "ingles":
      idiomaSelecionado = "Welcome";
      break;

    case "espanhol":
      idiomaSelecionado = "Bienvenido";
      break;

    case "frances":
      idiomaSelecionado = "Bienvenue";
      break;

    default:
      idiomaSelecionado = "Selecione um idioma válido";
      
  }
  console.log(idiomaSelecionado);

  document.getElementById("benvindo").innerHTML = idiomaSelecionado;
  alert(idiomaSelecionado);
}

function validateForm() {
  const name = document.getElementById("name").value;

  const email = document.getElementById("emailv").value;

  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  if (name.length < 3 || name.length > 50) {
    alert("o nome deve ter entre 3 e 50 caracteres");
    return false;
  }

  if (email.length < 5 || email.length > 50) {
    alert("o email deve ter entre 5 e 50 caracteres");
    return false;
  }

  const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //valida emails

  if (!emailPatern.test(email)) {
    alert("Por favor insira um email válido");
    return false;
  }

  return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    if(validateForm()){
        alert("Formulário validado!");
    }
});