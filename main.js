/* FIXA MENU */
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo')

window.addEventListener('scroll', function() {
  // obtém a posição da janela em relação ao topo da página
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 100) {
    nav.classList.add('fixo', 'mostrar');
    logo.classList.add('reduz');

    if (scrollTop >= 660 && scrollTop < 1320) {
      nav.classList.remove('menu-fixo2', 'menu-fixo3');
      nav.classList.add('menu-fixo1');
    } else if (scrollTop >= 1320 && scrollTop < 1980) {
      nav.classList.remove('menu-fixo1', 'menu-fixo3');
      nav.classList.add('menu-fixo2');
    } else if (scrollTop >= 1980) {
      nav.classList.remove('menu-fixo1', 'menu-fixo2');
      nav.classList.add('menu-fixo3');
    } else {
      nav.classList.remove('menu-fixo1', 'menu-fixo2', 'menu-fixo3');
    }
  } else {
    nav.classList.remove('fixo', 'mostrar');
    logo.classList.remove('reduz');
  }
});


/* ROLAGEM SUAVE */
var menuLinks = document.querySelectorAll('.menu-item');

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', function(event) {
    event.preventDefault();
    var target = document.querySelector(menuLink.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* MAQUINA DE ESCREVER */

const inserir = document.querySelector("#nome")
const insercao = document.querySelector("#antenome")
const nome = "Fidalgo"
const antenome = "Barbearia"
const intervalo = 200;

function mostranome(inserir, insercao, antenome, nome, intervalo){

    const letras = antenome.split("").reverse();
    const letra = nome.split("").reverse();

    setTimeout(() => {

        const typer = setInterval(() => {
            
            if (!letra.length) {
                return clearInterval(typer);
            }

            const prox = letra.pop();

            inserir.innerHTML += prox;

        }, intervalo);

    }, 1800);


        const typers = setInterval(() => {

            if(!letras.length){
                return clearInterval(typers);
            }

            const proxm = letras.pop();

            insercao.innerHTML += proxm;

        }, intervalo);
}

mostranome(inserir, insercao, antenome, nome, intervalo);


/* CRIAR GALERIA */
function criarGaleria() {
    const frame = []; //array da moldura
    const foto = []; //array das fotos
    let local = document.getElementById("local"); //local da inserção das fotos
    let x = 456; //valor do x da linha inferior
    let x2 = 590; //valor do x da linha superior
  
    window.onload = () => {
      //funciona simultaneo ao carregamento da pgn
      for (let c = 1; c <= 5; c++) {
        frame[c] = document.createElement("img");
        frame[c].src = "Imagens/frame.png";
        local.appendChild(frame[c]);
        frame[c].classList.add("moldura");
  
        foto[c] = document.createElement("img"); //cria um elemento imagem em cada posicao da array
        foto[c].src = `Imagens/foto${c}.png`; //define o link da foto a ser adicionada
        local.appendChild(foto[c]); //adiciona a imagem ao local
        foto[c].classList.add("foto"); //adiciona o atributo class as imagens
        foto[c].id = `foto${c}`;
  
        if (c <= 3) {
          frame[c].style.top = "1690px"; //define o y da imagem
          frame[c].style.left = `${x - 17}px`; //define o x da imagem
  
          foto[c].style.top = "1707px";
          foto[c].style.left = `${x}px`;
          x = x + 230; //distancia entre as imagens
        } else {
          frame[c].style.top = "1395px";
          frame[c].style.left = `${x2 - 17}px`;
  
          foto[c].style.top = "1412px";
          foto[c].style.left = `${x2}px`;
          x2 = x2 + 230;
        }
        
        // Adiciona o event listener de clique para cada imagem
        foto[c].addEventListener("click", function() {
          console.log(`Você clicou na foto ${c}`);
          /* criar janela sobre serviços*/
        });
      }
    };
  }
  
  if (window.matchMedia("(min-width: 1128px)").matches) {
    criarGaleria();
  }


