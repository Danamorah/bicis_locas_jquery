function validateForm(){
    var nombre = $("#name").val();
	var apellido = $("#lastname").val();
	var email = $("#input-email").val();
	var pass = $("#input-password").val();
	//debugger;
	var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var texto = /^[a-zA-Z]*$/;
	var nombre1letra = nombre.charAt(0);
	var apellido1letra = apellido.charAt(0);

	function validarCampos(){
		// codigo
		// validar campos vacios
	    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		    alert("complete los campos");
		return false;
	    }
	    else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ){
            alert("complete los campos");
		return false;     
	    }   
	    else if( email == null || email.length == 0 || /^\s+$/.test(email) ){
            alert("complete los campos");
		return false;     
	    }
	    else if( pass == null || pass.length == 0 || /^\s+$/.test(pass) ){
         alert("complete los campos");
		return false;     
	    }
	}
	validarCampos();

	function validarAz(){
		//validar de la a a la z
	    if ( nombre.search(texto) || apellido.search(texto) ){
            alert("deben ser caracteres de la a a la z")
	    }
	}
    validarAz();

    function validarEmail(){
    	// validar email
	    if(email.search(patronEmail) ){
            alert("no es un email valido")
        return false;
	    }
    }
    validarEmail();

    function validarPass(){
         // validar largo de password
        if(pass.length < 6){
            alert("la contraseña debe tener al menos 6 caracteres")
        return false;
        }
        else if(pass == "password" || pass == "123456" || pass == "098754"){
    	alert("la contraseña no puede ser password, 123456 o 098754")
    	return false;
        }
    }
    validarPass();

    function validarMayuscula(){
    // validar mayuscula
        if(nombre.charAt(0) !== nombre1letra.toUpperCase() || apellido.charAt(0) !== apellido1letra.toUpperCase()){
        alert("Para los campos nombre y apellido la primera letra debe ser mayúscula")
        }
    }
    validarMayuscula();

    function validarSelect(){
        // validar select
        //if(document.getElementsByTagName('select')[0].value == "0"){
        if($('select').val() == "0"){	
    	alert("El valor seleccionado de bicis, debe ser una de las opciones presentadas")
        }
    }
    validarSelect();
/*   
	
    /*
    $(document).ready(function(){
   if ($("#name").val()){
   
   } 
   */

} 
//});