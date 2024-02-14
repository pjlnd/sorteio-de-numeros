const button = document.getElementById("sortear");

button.addEventListener("click", function () {
  const prim = parseInt(document.getElementById("prim-nume").value);
  const segu = parseInt(document.getElementById("segu-nume").value);

  let result = Math.floor(Math.random() * (segu - prim + 1)) + prim;

  if (isNaN(result)) {
    result = 'Valor inválido';
  }
    document.querySelector("#resultado > span").textContent = result;
});
