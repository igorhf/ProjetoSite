function dados(){
	var nome = form.nome.value;
	var senha = form.senha.value;
	var email = form.email.value;

		if(document.form.nome.value==""){
			alert("por favor informe o seu nome");
			document.form.nome.focus();
			return false;
		}
		if(document.form.senha.value.lenght<6){
			alert("Senha deve conte no minimo 6 digito");
			document.form.senha.focus();
			return false;
		}
		if (document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
			alert("informe um email validor");
			document.form.email.focus();
			return false;
		}
		
		}