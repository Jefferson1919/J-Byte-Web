var seletor = 1; //variável que indica a imagem atual
function trocaFoto() {
    if (seletor == 1) { //se seletor == 1, mostra imagem 1
        $("#imgGaleria").attr("src", "images/img1.png");
        seletor = 2;
    } else if (seletor == 2) { //se seletor == 2, mostra imagem 2
        $("#imgGaleria").attr("src", "images/img2.png");
        seletor = 3;
    } else if (seletor == 3) { //se seletor == 3, mostra imagem 3
        $("#imgGaleria").attr("src", "images/img3.png");
        seletor = 4;
    } else if (seletor == 4) {
        $("#imgGaleria").attr("src", "images/img4.png");
        seletor = 1;
    }
}

$(document).ready(function () { //método que aguarda a página carregar
    setInterval(trocaFoto, 3000); //chamada da função troca foto a cada 2000ms
});