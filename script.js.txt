document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const respostas = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked'),
  ];

  if (respostas.includes(null)) {
    document.getElementById("resultado").textContent = "Por favor, responda todas as perguntas.";
    return;
  }

  const riscos = respostas.filter(r => r.value === "sim").length;

  let mensagem = "";
  if (riscos === 0) {
    mensagem = "Risco baixo. Continue se cuidando!";
  } else if (riscos === 1) {
    mensagem = "Risco moderado. Fique atento e use protetor solar!";
  } else {
    mensagem = "Risco alto! Procure um dermatologista.";
  }

  document.getElementById("resultado").textContent = mensagem;
});
