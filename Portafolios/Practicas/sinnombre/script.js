function calcular() {
  const input = document.getElementById("numberInput").value;

  let numeros = input.split(",").map(n => parseFloat(n.trim()));

  numeros = numeros.filter(n => !isNaN(n));

  if (numeros.length === 0) {
    alert("Por favor, ingresa al menos un número válido.");
    return;
  }

  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);

  document.getElementById("minimo").textContent = minimo;
  document.getElementById("maximo").textContent = maximo;
}
