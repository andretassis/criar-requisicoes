import { conexaoApi } from "./conectarApi.js "
import criarCard from "./exibirVideos.js"

async function buscarVideos(evento) {
    evento.preventDefault();
    const pesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conexaoApi.buscaVideo(pesquisa)

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        criarCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ))
}

const btnPesquisa = document.querySelector("[data-pesquisa-btn]");
btnPesquisa.addEventListener("click", evento => buscarVideos(evento))
