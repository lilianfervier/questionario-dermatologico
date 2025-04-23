document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let respostas = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
    q5: document.querySelector('input[name="q5"]:checked').value,
    q6: document.querySelector('input[name="q6"]:checked').value,
    q7: document.querySelector('select[name="q7"]').value,
    q8: document.querySelector('input[name="q8"]:checked').value,
    q9: document.querySelector('input[name="q9"]:checked').value,
    q10: document.querySelector('input[name="q10"]:checked').value,
  };

  let risco = "Baixo";
  
  // Exemplo de avaliação de risco (simples)
  if (respostas.q1 === "sim" || respostas.q5 === "sim" || respostas.q6 === "nao" || respostas.q9 === "sim" || respostas.q10 === "sim") {
    risco = "Médio";
  }
  if (respostas.q1 === "sim" && respostas.q4 === "sim" && respostas.q5 === "sim" && respostas.q6 === "nao" || respostas.q10 === "sim") {
    risco = "Alto";
  }
  
  document.getElementById('resultado').innerHTML = `
    <h2>Resultados:</h2>
    <p>Risco: ${risco}</p>
    <p>1. Sua pele costuma ficar vermelha ao se expor ao sol? ${respostas.q1}</p>
    <p>2. Você tem muitas pintas ou manchas na pele? ${respostas.q2}</p>
    <p>3. Já teve casos de câncer de pele na sua família? ${respostas.q3}</p>
    <p>4. Você já teve queimaduras solares frequentes na infância ou adolescência? ${respostas.q4}</p>
    <p>5. Você se expõe ao sol por longos períodos sem proteção? ${respostas.q5}</p>
    <p>6. Você usa protetor solar com frequência? ${respostas.q6}</p>
    <p>7. Qual é o seu tipo de pele? ${respostas.q7}</p>
    <p>8. Com que frequência você vai ao dermatologista para check-ups? ${respostas.q8}</p>
    <p>9. Você já foi diagnosticado com câncer de pele anteriormente? ${respostas.q9}</p>
    <p>10. Você faz bronzeamento artificial (bronzeamento de cabine)? ${respostas.q10}</p>
  `;
});
