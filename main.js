const btnLuck = document.querySelector("#btnLuck");
const btnReset = document.querySelector("#btnReset"); 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function printChineseLuck() {
  // Lista de sorte chinesa
  const chineseLuck = [
    "A sorte favorece os audazes.",
    "A persistência é o caminho do êxito.",
    "Uma jornada de mil milhas começa com um único passo.",
    "A sorte é o que acontece quando a preparação encontra a oportunidade.",
    "A paciência é uma árvore de raiz amarga, mas de frutos muito doces.",
    "Aquele que pergunta é bobo por cinco minutos, mas aquele que não pergunta permanece bobo para sempre.",
    "A verdadeira força não vem de uma grande capacidade física, e sim de uma vontade indomável"
  ];

  // Gera um índice aleatório
  const luckIndex = Math.floor(Math.random() * chineseLuck.length);

  const chineseLuckElement = document.getElementById("chinese-luck");

  // Define o conteúdo da sorte chinesa no elemento <p>
  chineseLuckElement.textContent = chineseLuck[luckIndex];
}


function handleLuckButton(event) {
  event.preventDefault()

  printChineseLuck()

  toggleScreen()
}

function handleResetClick() {
  toggleScreen();
}

btnLuck.addEventListener("click", handleLuckButton)
btnReset.addEventListener("click", handleResetClick)
