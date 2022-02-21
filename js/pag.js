var conteudo = document.getElementById('conteudo')
var botao = document.getElementById('mostre_mais')

//criar o evento do click do botao utilizando uma função anonima 
botao.onclick = function(){
    if(conteudo.className == "open"){
        //encurtar caixa
        conteudo.className = ""; //muda classe da dive conteudo para  ""
        botao.innerHTML =   "Mostrar Mais"; //muda o texto do botao para mostrar mais 
    }
    else{
        //expandir caixa
        conteudo.className = "open" //muda a classe da div conteudo para open 
        botao.innerHTML = "Mostrar Menos"; //muda o texto do botão para mostrar menos
    }
};