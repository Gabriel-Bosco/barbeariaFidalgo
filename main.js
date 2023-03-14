/* MAQUINA DE ESCREVER */

const inserir = document.querySelector("#nome")
const insercao = document.querySelector("#antenome")
const nome = "Fidalgo"
const antenome = "Barbearia"
const intervalo = 200;

function mostranome(inserir, insercao, antenome, nome, intervalo){

    const letras = antenome.split("").reverse();
    const letra = nome.split("").reverse();

    const typer = setInterval(() => {

        if(!letras.length){
            return clearInterval(typer);
        }
        
        if (!letra.length) {
            return clearInterval(typer);
        }

        const proxm = letras.pop();
        const prox = letra.pop();

        insercao.innerHTML += proxm;
        inserir.innerHTML += prox;

    }, intervalo);
}

mostranome(inserir, insercao, antenome, nome, intervalo);



/* CRIA IMAGENS NA GALERIA */
const frame = []; //array da moldura
const foto = []; //array das fotos
let local = document.getElementById("local"); //local da inserção das fotos
let x = 456; //valor do x da linha inferior
let x2 = 590; //valor do x da linha superior

window.onload= () => { //funciona simultaneo ao carregamento da pgn
    for (let c = 1; c <= 5; c++) {

        frame[c] = document.createElement("img");
        frame[c].src = ("Imagens/frame.png");
        local.appendChild(frame[c])
        frame[c].classList.add("moldura")

        foto[c] = document.createElement("img"); //cria um elemento imagem em cada posicao da array
        foto[c].src = (`Imagens/foto${c}.png`); //define o link da foto a ser adicionada
        local.appendChild(foto[c]) //adiciona a imagem ao local
        foto[c].classList.add("foto"); //adiciona o atributo class as imagens

        if (c <= 3) {
            frame[c].style.top = "1690px"; //define o y da imagem
            frame[c].style.left = `${x - 17}px`; //define o x da imagem

            foto[c].style.top = "1707px";
            foto[c].style.left = `${x}px`;
            x = x + 230; //distancia entre as imagens

        }
        else {
            frame[c].style.top = "1395px";
            frame[c].style.left = `${x2 - 17}px`;

            foto[c].style.top = "1412px";
            foto[c].style.left = `${x2}px`;
            x2 = x2 + 230;
        }
    }
}
