document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let pontuacao = 0;
  const respostas = document.querySelectorAll("input[type='radio']:checked");

  respostas.forEach((resposta) => {
    // "sim" conta ponto; "clara" conta ponto; "nao" conta ponto nas específicas
    if (
      resposta.value === "sim" ||
      resposta.value === "nao" && (resposta.name === "q6" || resposta.name === "q9") ||
      resposta.value === "clara"
    ) {
      pontuacao += 1;
    }
  });

  const resultado = document.getElementById("resultado");

  if (pontuacao >= 6) {
    resultado.innerHTML = "🔴 <strong>Risco alto:</strong> Você precisa procurar um dermatologista o quanto antes.";
    resultado.style.color = "red";
  } else if (pontuacao >= 3) {
    resultado.innerHTML = "🟠 <strong>Risco médio:</strong> É importante consultar um dermatologista para avaliação.";
    resultado.style.color = "orange";
  } else {
    resultado.innerHTML = "🟢 <strong>Risco baixo:</strong> Continue se cuidando e faça check-ups regulares.";
    resultado.style.color = "green";
  }
});

