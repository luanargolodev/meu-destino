const respostas = [
  "Certeza!",
  "Não tenho tanta certeza",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente.",
  "Minha resposta é não.",
  "Você não pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Perspectiva boa.",
  "As perspectivas não são as melhores.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

const button = document.querySelector('#container button');
button.addEventListener('click', function(e) {
  e.preventDefault();

  const pergunta = document.querySelector('#container input').value;
  if(pergunta === '')
    return;

  const resposta = document.querySelector('#resposta');
  resposta.innerText = respostas[Math.floor(Math.random() * respostas.length)];
})