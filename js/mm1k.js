function calcular() {
  var miu = parseFloat(document.getElementById("txtTasaServicio").value);
  var lamda = parseFloat(
    document.getElementById("txtTasaLLegadaClientes").value
  );
  var k = parseFloat(document.getElementById("txtCapacidadCola").value);
  var n = parseFloat(document.getElementById("txtN").value);

  var p = lamda / miu;
  var Ls =
    p / (1 - p) - ((k + 1) * Math.pow(p, k + 1)) / (1 - Math.pow(p, k + 1));
  var ef = lamda * (1 - ((1 - p) * Math.pow(p, k)) / (1 - Math.pow(p, k + 1)));
  var Ws = Ls / ef;
  var Wq = Ws - 1 / miu;
  var Lq = ef * Wq;
  var Poo = (1 - p) / (1 - Math.pow(p, k + 1));
  var Po = Poo * 100;
  var probabilidad = ((1 - p) * Math.pow(p, n)) / (1 - Math.pow(p, k + 1));

  document.getElementById("lamda").innerHTML = lamda;
  document.getElementById("miu").innerHTML = miu;
  document.getElementById("p").innerHTML = p.toFixed(4);
  document.getElementById("Ls").innerHTML = Ls.toFixed(4);
  document.getElementById("Ws").innerHTML = Ws.toFixed(4);
  document.getElementById("Lq").innerHTML = Lq.toFixed(4);
  document.getElementById("Wq").innerHTML = Wq.toFixed(4);
  document.getElementById("Po").innerHTML = Po.toFixed(4)+"%";
  document.getElementById("ef").innerHTML = ef.toFixed(4);
  document.getElementById("n").innerHTML =
    probabilidad.toFixed(4) + " ~ " + (probabilidad * 100).toFixed(2) + "%";
}
