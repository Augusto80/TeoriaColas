const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

    txtTasaServicio: /^\d{0,5}\.?\d{0,5}$/,
    txtTasaLLegadaClientes: /^\d{0,5}\.?\d{0,5}$/,

}

const campos = {
    txtTasaServicio: false,
    txtTasaLLegadaClientes: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {

        case "txtTasaServicio":
            validarCampo(expresiones.txtTasaServicio, e.target, 'txtTasaServicio');
        break;
        case "txtTasaLLegadaClientes":
            validarCampo(expresiones.txtTasaLLegadaClientes, e.target, 'txtTasaLLegadaClientes');
        break;
 
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.remove('formulario-input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario-input-error`).classList.add('formulario-input-error-activo');
        campos[campo] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    if (campos.txtTasaServicio && campos.txtTasaLLegadaClientes ) {
        
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 7000);
        document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario-grupo-correcto');
        });

        var miu = parseFloat(document.getElementById('txtTasaServicio').value);
    var lamda = parseFloat(document.getElementById('txtTasaLLegadaClientes').value);
    var p = (lamda/miu)*100;
    var Ls = (lamda)/(miu-lamda);
    var Ws = (1)/(miu-lamda);
    var Lq = (lamda * lamda)/(miu*(miu-lamda));
    var Wq = Lq / lamda;
    var Poo = 1 - (lamda/miu);
    var Po = Poo * 100; 

    
    
    document.getElementById('lamda').innerHTML = lamda;
    document.getElementById('miu').innerHTML = miu;
    document.getElementById('p').innerHTML = p;
    document.getElementById('Ls').innerHTML = Ls; 
    document.getElementById('Ws').innerHTML = Ws; 
    document.getElementById('Lq').innerHTML = Lq;
    document.getElementById('Wq').innerHTML = Wq; 
    document.getElementById('Po').innerHTML = Po;

    } else if (txtTasaServicio === "" || txtTasaLLegadaClientes === "" ) { 
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 6000);
    }
});

