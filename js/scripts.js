//função de validação de login :)
function valida(){

//minhas variáveis, que eu pego o value dos inputs
var login = document.getElementById('txtlogin').value;
var pass = document.getElementById('txtsenha').value;

	/*fiz de forma simples, se o login for diferente do que
	coloquei aqui, ele dá um alert*/
	if(login === "user@name" && pass ==="1234"){

	alert("Seja bem vindo(a) " +login+" !");

	}else {
		alert("Usuário ou senha incorretos. Cadastre-se!");
	}

}


/*usando jquery para o menu responsivo,
já havia utilizado o mesmo código em outro projeto*/
$(".hamburguer").click(function(){
	$(".menu-top").show(200);
});
$(".btnClose").click(function(){
	$(".menu-top").hide(200);
});

function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}