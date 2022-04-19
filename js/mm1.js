function calcular() {
  var miu = parseFloat(document.getElementById("txtTasaServicio").value);
  var lamda = parseFloat(
    document.getElementById("txtTasaLLegadaClientes").value
  );
  var cs = parseFloat(document.getElementById("txtCosteServicio").value);
  var cq = parseFloat(document.getElementById("txtCosteEspera").value);
  var n = parseFloat(document.getElementById("txtN").value);

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

  document.getElementById("lamda").innerHTML = lamda.toFixed(4);
  document.getElementById("miu").innerHTML = miu.toFixed(4);
  document.getElementById("p").innerHTML = p.toFixed(4) + "%";
  document.getElementById("Ls").innerHTML = Ls.toFixed(4);
  document.getElementById("Ws").innerHTML = Ws.toFixed(4);
  document.getElementById("Lq").innerHTML = Lq.toFixed(4);
  document.getElementById("Wq").innerHTML = Wq.toFixed(4);
  document.getElementById("Po").innerHTML = Po.toFixed(4) + "%";
  document.getElementById("n").innerHTML =
    probabilidad.toFixed(4) + " ~ " + (probabilidad * 100).toFixed(2) + "%";
  //document.getElementById("sumatoria").innerHTML = sumatoria;
  document.getElementById("CS").innerHTML = "$" + CS.toFixed(2);
  document.getElementById("CTQ").innerHTML = "$" + CTQ.toFixed(2);
  document.getElementById("CTS").innerHTML = "$" + CTS.toFixed(2);
}
