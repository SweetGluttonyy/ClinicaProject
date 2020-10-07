$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});



function redireccionar(){
    var namelogin = document.getElementById('nombre');

    var passlogin= document.getElementById('password');
    var mensajeError = [];

    if(namelogin.value === 'admin' && passlogin.value === '123')
    {    
        alert("Validacion correcta.");
        //window.location.pathname = "/index.html/"
        window.location.href = "/index.html";
    }
    else{
        alert("Validacion incorrecta.");
        return false;
        
    }
}