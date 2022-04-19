function calcular() {
  var miu = parseFloat(document.getElementById("txtTasaServicio").value);
  var lamda = parseFloat(document.getElementById("txtTasaLLegadaClientes").value);
  var servidores = parseFloat(document.getElementById("txtServidores").value);
  var n = parseFloat(document.getElementById("txtN").value);
  var cq = parseFloat(document.getElementById("txtCosteEspera").value);
  var cs = parseFloat(document.getElementById("txtCosteServicio").value);

  document.getElementById("lamda").innerHTML = lamda;
  document.getElementById("miu").innerHTML = miu;
  document.getElementById("servidores").innerHTML = servidores;

  var p,
    CS,
    CTQ,
    CTS,
    vWq,
    vWs,
    vLq,
    vLs,
    vp = 0,
    vp_0 = 0,
    vtser,
    vutipros,
    vsuma = 0,
    vfactorial = 1;

  vtser = 1 / miu;
  vutipros = lamda / miu;
  p = lamda / (servidores * miu);

  //ciclo para calcular la sumatoria de p_0
  for (var i = 0; i <= servidores - 1; i++) {
    if (i == 0) {
      vsuma += 1 / vfactorial;
    } else {
      vfactorial = vfactorial * i;
      vsuma += Math.pow(vutipros, i) / vfactorial;
    }
  }

  vp_0 =
    1 /
    (vsuma +
      (Math.pow(vutipros, servidores) / (vfactorial * servidores)) *
        (1 / (1 - p)));
  var vp_01 = vp_0 * 100;

  var fact = 1;

  if (n <= servidores) {
    if (n > 0) {
      for (var i = 1; i <= n; i++) {
        fact = fact * i;
      }
    }
    vp = (Math.pow(vutipros, n) / fact) * vp_0;
  }  if (n > servidores) {
    vp =
      (Math.pow(vutipros, n) / (vfactorial * servidores * Math.pow(servidores, n - servidores))) * vp_0;
  } vLq = ((Math.pow(vutipros, servidores) * lamda * miu) / (vfactorial * Math.pow(servidores * miu - lamda, 2))) * vp_0;

  vLs = vLq + vutipros;
  vWq = vLq / lamda;
  vWs = vLs / lamda;
  CS = cs * servidores;
  CTQ = cq * vLq;
  CTS = cq * vLs + cs * servidores;

  document.getElementById("Lq").innerHTML = vLq.toFixed(4);
  document.getElementById("Ls").innerHTML = vLs.toFixed(4);
  document.getElementById("Wq").innerHTML = vWq.toFixed(4);
  document.getElementById("Ws").innerHTML = vWs.toFixed(4);
  document.getElementById("Us").innerHTML = vutipros.toFixed(4);
  document.getElementById("vtser").innerHTML = vtser.toFixed(4);
  document.getElementById("Po").innerHTML = vp_01.toFixed(4) + "%";
  document.getElementById("p").innerHTML = p.toFixed(4) * 100 + "%";
  document.getElementById("CS").innerHTML = "$" + CS.toFixed(4);
  document.getElementById("CTQ").innerHTML = "$" + CTQ.toFixed(4);
  document.getElementById("CTS").innerHTML = "$" + CTS.toFixed(4);
  document.getElementById("n").innerHTML = vp.toFixed(4);
}
