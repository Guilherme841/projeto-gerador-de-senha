const range = document.querySelector(".tamanhoDaSenha");
const facilDePronunciar = document.getElementsByName("radiosOptions");
const facilDeLer = document.getElementById("facilDeLer");
const todosOsCaracteres = document.getElementById("todosOsCaracteres");
const letrasMaiusculas = document.getElementById("lettersUppercase");
const letrasMinusculas = document.getElementById("lettersLowcase");
const simbolos = document.getElementById("symbols");
const numeros = document.getElementById("numbers");
const gerar = document.getElementById("gerarSenha");
const teste = document.querySelectorAll('input[type="checkbox"]');

let arrTeste = Array.from(teste);
let arrCheck = arrTeste.filter((checkbox) => checkbox.checked === true);

letrasMinusculas.disabled = true;

if (arrCheck.length > 1) {
  letrasMinusculas.disabled = false;
  alert('ok')
}

gerar.addEventListener("click", function () {
  //   let contador = 0;
  //   for (let i = 0; i < teste.length; i++) {
  //     if (teste[i].checked === true) {
  //       contador++;
  //       console.log(contador);
  //     }
  //   }
  //   if (contador > 1) {
  //     letrasMinusculas.disabled = false;
  //   }
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
