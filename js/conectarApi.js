async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson = await conexao.json();

    return conexaoJson
}

listaVideos()

export const conexaoApi = {
    listaVideos
}
