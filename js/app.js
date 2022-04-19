function calcular () {

    try {
    


        if(lamda!=null && miu!=null && servidores!=null && n!=null){

            var miu = parseFloat(document.getElementById('txtTasaServicio').value);
            var lamda = parseFloat(document.getElementById('txtTasaLLegadaClientes').value);
            var servidores = parseFloat(document.getElementById('txtServidores').value);
            var n = parseFloat(document.getElementById('txtN').value);
           
            var vWq, vWs, vLq, vLs, vp=0, vp_0=0, vro, vtser, vutipros, vsuma=0, vfactorial=1;

            vtser = 1 / miu;
            vutipros = lamda / miu;
            vro = lamda / (servidores * miu);

            //ciclo para calcular la sumatoria de p_0
            for(var i=0; i <= (servidores-1); i++){
                if (i == 0){
                    vsuma+= (1 / (vfactorial));
                }else{
                    vfactorial = vfactorial * i;
                    vsuma+= (Math.pow(vutipros,i) / (vfactorial));
                }
            }

            vp_0= (1/(vsuma+( ( Math.pow(vutipros,servidores) / (vfactorial*servidores) ) * ( 1/(1-vro) ) )));

            var fact=1;

            if(vn<=servidores){
                if(vn>0){
                    for (var i=1; i<=vn; i++){
                        fact=fact*i;
                    }
                }
                vp= (Math.pow(vutipros,vn) / fact) * vp_0;
            }
            if(vn>servidores){
                vp= (Math.pow(vutipros,vn) / ( (vfactorial*servidores) * Math.pow(servidores,vn-servidores) )) * vp_0;
            }

            vLq = (( Math.pow(vutipros,servidores)*lamda*miu )/( vfactorial * (Math.pow( (servidores*miu)-lamda , 2)) )) * vp_0;
            vLs = vLq+vutipros;
            vWq = vLq/lamda;
            vWs = vLs/lamda;

            
        document.getElementById('lamda').innerHTML = lamda;
        document.getElementById('miu').innerHTML = miu;
        document.getElementById('servidores').innerHTML = servidores;
        document.getElementById('Wq').innerHTML = vWq;
        document.getElementById('Ws').innerHTML = vWs;
        document.getElementById('Lq').innerHTML = vWs;
        document.getElementById('Ls').innerHTML = vWs;


        }


    } catch (error) {
        
    }
 
}

        
