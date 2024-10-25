function ValidarCampos() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");

  if (nome.value == "") {
    alert("cade esse nomekkkkkk");
    nome.focus();
    return;
  } else {
    if (nome.value.length > 20) {
      alert("é um nome ou uma biblia? abrevia isso ai locokkkkkkkk");
      nome.value = "";
      nome.focus();
      return;
    }
  }

  if (email.value == "") {
    alert("agora esqueceu do emailkkkkkkk faz direito maluco");
    email.focus();
    return;
  } else {
    if (!ValidaEmail(email.value.trim())) {
      alert("Email Invalido");
      email.value = "";
      email.focus();
      return;
    }
    else{
        //let parteEmail = email.value.substring(0,5);
        //alert(parteEmail)

        let antesDoArroba = email.value.substring(0, email.value.indexOf("@"));
        alert (antesDoArroba);
    }
  }
}

function ValidaEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
