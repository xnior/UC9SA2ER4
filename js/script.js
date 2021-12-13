$(document).ready(function() {
    $("#barras").click(function() {
        $("#menu").toggle("jquerymenu");
    })

    let slideAtual = 1;

    let listaSides = ["img1", "img2", "img3", "img4", "img5"];
    let tempo = 5000;
    setInterval(slide, tempo);

    function slide() {

        console.log("Slide Atual:", slideAtual);

        $(".progress-bar").animate({
            width: "0%"
        }, 0);

        if (slideAtual > 0) {
            $("#banner").removeClass(listaSides[slideAtual - 1]);
        } else if (slideAtual == 0) {
            $("#banner").removeClass(listaSides[(listaSides.length) - 1]);
        }


        $("#banner").addClass(listaSides[slideAtual]);

        slideAtual++;

        if (slideAtual > (listaSides.length) - 1) {
            slideAtual = 0;
        }
        // $("#largura").css({ "width": "0%" });

        $(".progress-bar").delay(tempo * .8).animate({
            width: "100%"
        }, tempo * .2);

    }




})

// function mostrarMenu() {
//     let menu = document.getElementById("menu");

//     console.log(getComputedStyle(menu).display);

//     if (getComputedStyle(menu).display != "none") {
//         menu.style.display = "none";

//     } else {
//         menu.style.display = "flex";

//     }
// }

function mudartamanhotabelagamer() {
    let tabelagamer = document.getElementById("tabela-gamer");

    tabelagamer.style.fontSize = "8px";
}


function cadastrarNewsletter() {
    let emaildigitado = document.getElementById("newsletter-email").value;
    console.log(emaildigitado);
}



function rendenizarNoticias() {



    var espaco = document.getElementById("espaco-noticias");

    let listaNoticias = [

        {
            imagem: "img/news.jpg",
            titulo: "Noticia 01",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            imagem: "img/news.jpg",
            titulo: "Noticia 02",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 03",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 04",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 05",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 06",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];


        template += `<div class="col-md-3 cardNews">
        <img src="${noticia.imagem}" class="img-thumbnail" alt="Imagem de Notícia">
        <h4>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
        </div>   `
    }


    espaco.innerHTML = template;
}

function rendenizarListaClassificados() {
    let espacoclassificados = document.getElementById("lista-classificados");

    let listaClassificados = [{
        nome: "Jose",
        sobrenome: "Maria",
        handle: "@jmar"
    }, {
        nome: "Maria",
        sobrenome: "Jose",
        handle: "@marj"
    }, {
        nome: "Rick",
        sobrenome: "Martin",
        handle: "@rmart"
    }, {
        nome: "Martin",
        sobrenome: "Rick",
        handle: "@maRick"
    }, {
        nome: "Ninja",
        sobrenome: "Garden",
        handle: "@ningar"
    }, {
        nome: "Rafael",
        sobrenome: "Nogueira",
        handle: "@rafnog"
    }, {
        nome: "Vin",
        sobrenome: "Martin",
        handle: "@vinmart"
    }, {
        nome: "José",
        sobrenome: "Antônio",
        handle: "@josan"
    }]
    console.log(listaClassificados);

    let templateclass = "";
    for (let index = 0; index < listaClassificados.length; index++) {
        const listclass = listaClassificados[index];
        templateclass += `<tr>
                            <th scope="row">${index+1}</th>
                            <td>${listclass.nome}</td>
                            <td>${listclass.sobrenome}</td>
                            <td>${listclass.handle}</td>
                         </tr>`
    }
    espacoclassificados.innerHTML = templateclass;
}

// function menupaginas() {
//     let espaco = document.getElementById("menu-paginas");
//     let template = `<span><a href="index.html"><img src="img/logo.svg" class="logo" alt="Logo de Aplicação do Site"></a></span>

// <nav class="menu" id="menu">

//     <a href="index.html">Principal</a>
//     <a href="lancamentos.html">Lançamentos</a>
//     <a href="destaques.html">Destaques</a>
//     <a href="eletronicos.html">Eletrônicos</a>
//     <a href="seja-membro.html" class="active">Seja Membro</a>

// </nav>
// <input type="checkbox" id="bt_menu">
// <label for="bt_menu" onclick="mostrarMenu()">&#9776;</label>

// <input class="menuBarras" id="procurarSite" type="text" name="procurar" placeholder="Procurar">`;
//     espaco.innerHTML = template;
// }