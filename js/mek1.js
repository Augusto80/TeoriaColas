function calcular() {
    var miu = parseFloat(document.getElementById("txtTasaServicio").value);
    var lamda = parseFloat(document.getElementById("txtTasaLLegadaClientes").value);
    var k = parseFloat(document.getElementById("txtK").value);

    var ps = (lamda/miu);
    var p = (lamda / miu) * 100;
    var Poo = 1 - lamda / miu;
    var Po = Poo * 100;    

    var Lq = ((Math.pow(ps, 2)*(1+k)))/(2*k*(1-ps));
    var Ls = Lq + ps;
    var Wq = Lq / lamda;
    var Ws = Ls / lamda;

    document.getElementById("lamda").innerHTML = lamda;
    document.getElementById("miu").innerHTML = miu;
    document.getElementById("k").innerHTML = k;
    document.getElementById("p").innerHTML = p.toFixed(4) + "%";
    document.getElementById("Lq").innerHTML = Lq.toFixed(4);
    document.getElementById("Po").innerHTML = Po.toFixed(4) + "%";
    document.getElementById("Ls").innerHTML = Ls.toFixed(4);
    document.getElementById("Wq").innerHTML = Wq.toFixed(4);
   document.getElementById("Ws").innerHTML = Ws.toFixed(4);
    //document.getElementById("n").innerHTML = probabilidad.toFixed(4) + " ~ "  + (probabilidad*100).toFixed(2) + "%";
    //document.getElementById("sumatoria").innerHTML = sumatoria;

  }
  