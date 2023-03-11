const range = document.querySelector(".tamanhoDaSenha");
const facilDePronunciar = document.getElementById("facilDePronunciar");
const facilDeLer = document.getElementById("facilDeLer");
const todosOsCaracteres = document.getElementById("todosOsCaracteres");
const letrasMaiusculas = document.getElementById("lettersUppercase");
const letrasMinusculas = document.getElementById("lettersLowcase");
const simbolos = document.getElementById("symbols");
const numeros = document.getElementById("numbers");
const gerar = document.getElementById("gerarSenha");
const checked = document.querySelectorAll("input[type='checkbox']");
const inputSenha = document.getElementById("password");
const mais = document.getElementById("mais");
const informaçoes = document.getElementById("informaçoes");
const arrChecked = Array.from(checked);
const radios = document.querySelectorAll("input[type='radio']");
const copy = document.getElementById("copy");
const arrRadios = Array.from(radios);
letrasMinusculas.disabled = true;

mais.addEventListener("click", function () {
  if (informaçoes.style.display === "none") {
    informaçoes.style.display = "block";
  } else {
    informaçoes.style.display = "none";
  }
});

copy.addEventListener("click", function () {
  if (inputSenha.value.length === 0) {
    return;
  }
  inputSenha.select();
  document.execCommand("copy");
  copy.style.backgroundColor = "rgba(87, 255, 87, 0.295)"
  setTimeout(function () {
    copy.style.backgroundColor = "white";
  }, 300);
});

document.addEventListener("click", function (event) {
  if (!mais.contains(event.target) && informaçoes.style.display === "block") {
    informaçoes.style.display = "none";
  }
});

function verificar() {
  let contador = 0;
  for (let i = 0; i < arrChecked.length; i++) {
    if (arrChecked[i].checked === true) {
      contador++;
    }
  }
  if (contador === 1) {
    for (let i = 0; i < arrChecked.length; i++) {
      if (arrChecked[i].checked === true) {
        arrChecked[i].disabled = true;
      }
    }
  } else if (contador > 1) {
    for (let i = 0; i < arrChecked.length; i++) {
      if (arrChecked[i].checked === true) {
        arrChecked[i].disabled = false;
      }
    }
  }
}

for (let elemento of arrChecked) {
  elemento.addEventListener("click", function () {
    verificar();
  });
}

for (let elemento of arrRadios) {
  elemento.addEventListener("click", function () {
    if (facilDePronunciar.checked === true) {
      if (simbolos.checked || numeros.checked) {
        simbolos.checked = false;
        numeros.checked = false;
      }
      letrasMaiusculas.checked = true;
      simbolos.disabled = true;
      numeros.disabled = true;
    } else {
      simbolos.disabled = false;
      numeros.disabled = false;
    }
    if (facilDeLer.checked === true) {
      if (simbolos.checked || numeros.checked) {
        simbolos.checked = false;
        numeros.checked = false;
      }
      letrasMaiusculas.checked = true;
    }
    if (todosOsCaracteres.checked === true) {
      simbolos.checked = true;
      numeros.checked = true;
      letrasMinusculas.checked = true;
      letrasMaiusculas.checked = true;
    }
    verificar();
  });
}

// abcdefghijklmnopqrstuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// #%$!^*&@
// 1234567890
// abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789

gerar.addEventListener("click", function () {
  function gerarSenha(size) {
    let caracteres = "";
    if (letrasMaiusculas.checked) {
      if (facilDeLer.checked) {
        caracteres += "ABCDEFGHJKMNPQRSTUVWXYZ";
      } else {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
    }
    if (letrasMinusculas.checked) {
      if (facilDeLer.checked) {
        caracteres += "abcdefghjkmnpqrstuvwxyz";
      } else {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
      }
    }
    if (simbolos.checked) {
      if (facilDeLer.checked) {
        caracteres += "#%$^*&@";
      } else {
        caracteres += "#%$!^*&@";
      }
    }
    if (numeros.checked) {
      if (facilDeLer.checked) {
        caracteres += "23456789";
      } else {
        caracteres += "1234567890";
      }
    }
    let senha = "";
    for (let i = 0; i < size; i++) {
      let pos = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(pos);
    }
    return senha;
  }
  let sizePassword = range.value;
  let randowPass = gerarSenha(sizePassword);
  inputSenha.value = randowPass;
});
