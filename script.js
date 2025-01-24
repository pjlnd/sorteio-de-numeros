const button = document.getElementById("sortear");
const historicoList = document.querySelector("#historic ul"); // Seleciona a lista de histórico
const numerosSorteados = new Set(); // Usamos um Set para evitar duplicatas automaticamente

button.addEventListener("click", function () {
  const prim = parseInt(document.getElementById("prim-nume").value);
  const segu = parseInt(document.getElementById("segu-nume").value);

  if (isNaN(prim) || isNaN(segu) || prim > segu) {
    document.querySelector("#resultado > span").textContent = "Intervalo inválido";
    return;
  }

  if (numerosSorteados.size >= segu - prim + 1) {
    // Todos os números possíveis já foram sorteados
    document.querySelector("#resultado > span").textContent = "Todos os números foram sorteados!";
    return;
  }

  let result;
  do {
    result = Math.floor(Math.random() * (segu - prim + 1)) + prim; // Gera um número aleatório
  } while (numerosSorteados.has(result)); // Repete enquanto o número já estiver no histórico

  numerosSorteados.add(result); // Adiciona o número ao histórico

  // Adiciona o número ao histórico visual
  const listItem = document.createElement("li");
  listItem.textContent = result;
  historicoList.appendChild(listItem);

  // Exibe o número sorteado
  document.querySelector("#resultado > span").textContent = result;
});
