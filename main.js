function mostrarDesconto(){

    var descontos = [5,10, 15];//array desconto = variavel com varios valores 

    // selecionar de forma aleatoria um desconto do array

    var descontoAleatorio = descontos[Math.floor(Math.random ()* descontos.length)];

    var textoDesconto = document.getElementById("desconto"); //elemento do desconto

    textoDesconto.innerText = "seu desconto e de " + descontoAleatorio + "%!";

    // escode o texto "clique e descubra seu desconto"

    var textoHover = document.querySelector(".texto-hover");

    textoHover.style.display = "none";

    textoDesconto.style.display = "block";




}