const range = document.querySelector(".tamanhoDaSenha");
const facilDePronunciar = document.getElementsByName("radiosOptions");
const facilDeLer = document.getElementById("facilDeLer");
const todosOsCaracteres = document.getElementById("todosOsCaracteres");
const letrasMaiusculas = document.getElementById("lettersUppercase");
const letrasMinusculas = document.getElementById("lettersLowcase");
const simbolos = document.getElementById("symbols");
const numeros = document.getElementById("numbers");
const gerar = document.getElementById("gerarSenha");
const checked = document.querySelectorAll("input[type='checkbox']");
const arrChecked = Array.from(checked);
letrasMinusculas.disabled = true;

function verificar() {
  var contador = 0;
  for (let i = 0; i < arrChecked.length; i++) {
    if (arrChecked[i].checked === true) {
      contador++;
      console.log(contador);
    }
  }
  if (contador < 2) {
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

(function () {})();

gerar.addEventListener("click", function () {
  console.log(range.value);
  if (facilDePronunciar[0].checked) {
    console.log("facilDePronunciar = true");
  } else {
    console.log("facilDePronunciar = false");
  }
  if (letrasMinusculas.checked) {
    console.log("letrasMinusculas = true");
  } else {
    console.log("letrasMinusculas = false");
  }
});
