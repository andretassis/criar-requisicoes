import { conexaoApi } from "./conectarApi.js";

const formulario = document.querySelector("[data-formulario]");

async function postarVideos(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conexaoApi.criarVideos(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => postarVideos(evento))