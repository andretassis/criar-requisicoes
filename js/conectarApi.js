// conexao para listar os videos dinamicamente
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson = await conexao.json();

    return conexaoJson
}

// conexao para adicionar um novo video
async function criarVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        })
    });

    const conexaoJson = await conexao.json();
    return conexaoJson
}

export const conexaoApi = {
    listaVideos,
    criarVideos
}
