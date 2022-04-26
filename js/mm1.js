function calcular() {
  var miu = parseFloat(document.getElementById("txtTasaServicio").value);
  var lamda = parseFloat(
    document.getElementById("txtTasaLLegadaClientes").value
  );
  var cs = parseFloat(document.getElementById("txtCosteServicio").value);
  var cq = parseFloat(document.getElementById("txtCosteEspera").value);
  var n = parseFloat(document.getElementById("txtN").value);
  var t = parseFloat(document.getElementById("txtT").value);

  var p = (lamda / miu) * 100;
  var Ls = lamda / (miu - lamda);
  var Ws = 1 / (miu - lamda);
  var Lq = (lamda * lamda) / (miu * (miu - lamda));
  var Wq = Lq / lamda;
  var Poo = 1 - lamda / miu;
  var Po = Poo * 100;
  var probabilidad0 = lamda / miu;
  var probabilidad = Poo * Math.pow(probabilidad0, n);
  var CS = cs * 1;
  var CTQ = cq * Lq;
  var CTS = cq * Ls + cs * 1;

  var i, sum;
  sum = 0;
  for (i = 0; i <= n; i++) {
    var probabilidad = Poo * Math.pow(probabilidad0, i);
    sum = sum + probabilidad;
  }

  var Ts = Math.pow(2.7171828, -1 * (miu * Poo * t));
  var Tq = Ts * probabilidad0;

  document.getElementById("lamda").innerHTML = lamda.toFixed(4);
  document.getElementById("miu").innerHTML = miu.toFixed(4);
  document.getElementById("p").innerHTML = p.toFixed(4) + "%";
  document.getElementById("Ls").innerHTML = Ls.toFixed(4);
  document.getElementById("Ws").innerHTML = Ws.toFixed(4);
  document.getElementById("Lq").innerHTML = Lq.toFixed(4);
  document.getElementById("Wq").innerHTML = Wq.toFixed(4);
  document.getElementById("Po").innerHTML = Po.toFixed(4) + "%";
  document.getElementById("n").innerHTML =
    probabilidad.toFixed(4) + " ~ " + (probabilidad * 100).toFixed(4) + "%";
  document.getElementById("sumatoria").innerHTML =
    (1 - sum).toFixed(4) + " ~ " + ((1 - sum) * 100).toFixed(4) + "%";
  document.getElementById("CS").innerHTML = "$" + CS.toFixed(4);
  document.getElementById("CTQ").innerHTML = "$" + CTQ.toFixed(4);
  document.getElementById("CTS").innerHTML = "$" + CTS.toFixed(4);
  document.getElementById("Ts").innerHTML = Ts.toFixed(4);
  document.getElementById("Tq").innerHTML = Tq.toFixed(4);
}
