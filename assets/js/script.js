/* Selecionando Elementos do Index */
let menu = document.querySelector(".menu-burguer");
let body = document.querySelector("body");
let container = document.querySelector(".container-body");



/* Criando Lista */
let lista = document.createElement("ul");
lista.classList.add("lista-menu");
let item1 = document.createElement("a");
item1.setAttribute("href", "../../index.html");
let item2 = document.createElement("a");
item2.setAttribute("href", "./assets/pages/quemSomos.html");
let item3 = document.createElement("a");
item3.setAttribute("href", "./assets/pages/cursos.html");
let item4 = document.createElement("a");
item4.setAttribute("href", "./assets/pages/unidades.html");
let item5 = document.createElement("a");
item5.setAttribute("href", "./assets/pages/contatos.html");
let item6 = document.createElement("a");
item6.setAttribute("href", "https://api.whatsapp.com/send/?phone=5581996276609&text=Ol%C3%A1%2C+Desejo+me+Matricular%21&type=phone_number&app_absent=0");

/* Selecionando Imagem do X */
let containerLogo = document.createElement("figure");
let imgLogo = document.createElement("img");
imgLogo.classList.add("logo-neo");
imgLogo.setAttribute("src", "./assets/img/LOGO-NEOTECH-PNG.webp");
containerLogo.appendChild(imgLogo);

/* Selecionando Botão de Fechar Menu */4
let buttonClose = document.createElement("div");
buttonClose.classList.add("buttonClose");
let imgClose = document.createElement("img");
imgClose.setAttribute("src", "./assets/img/close_menu.svg");
imgClose.classList.add("imgClose");
buttonClose.appendChild(imgClose);

/* Adicionando Nome aos Itens da Lista */
item1.innerHTML = "INÍCIO";
item2.innerHTML = "QUEM SOMOS";
item3.innerHTML = "CURSOS";
item4.innerHTML = "UNIDADES";
item5.innerHTML = "CONTATOS";
item6.innerHTML = "MATRICULE-SE";

/* Itens Sendo Adicionado a Lista */
lista.appendChild(buttonClose);
lista.appendChild(containerLogo);
lista.appendChild(item1);
lista.appendChild(item2);
lista.appendChild(item3);
lista.appendChild(item4);
lista.appendChild(item5);
lista.appendChild(item6);

/* Criando Função Adicionar Menu */
menu.addEventListener('click', adicionarMenu);

/* Função Sendo Utilizada */
function adicionarMenu() {
    container.classList.add("blur");
    body.appendChild(lista);
}

/* Criando Função Remover Menu */
imgClose.addEventListener('click', removerMenu);

function removerMenu() {
    container.classList.remove("blur");
    lista.remove();
}