/**
 * Validação de Comentário
 */
 
 function validar(){
	let nome = frmContato.nome.value;
	let fone = frmContato.fone.value;
	let email = frmContato.email.value;
	
	if(nome === ""){
		alert("Preencha o campo nome.");
		frm.Contato.nome.focus();
		return false;
	} else if(fone === ""){
		alert("Preencha o campo telefone");
		frm.Contato.fone.focus();
		return false;
	} else {
		document.forms["frmContato"].submit();
	}
	alert("Cadastro feito com sucesso!");
}