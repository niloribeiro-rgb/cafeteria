const estante = document.querySelector('.cardsContainer')

let produtosMelhores = [
  { img: "../img/cofe3coracoes.png", nome: "Café 3 Corações", preco: "34" },
   { img: "../img/bannerCoffee.jpg", nome: "Café confiante", preco: "99" },
]

let produtosOutros = [
  { img: "../img/banner.jpg", nome: "Café Melitta", preco: "12" }
]

function renderizarProdutos(lista) {
  for (let i = 0; i < lista.length; i++) {
    estante.innerHTML += `
      <div class="card">
        <img src="${lista[i].img}" alt="${lista[i].nome}" class="imgProduto">
        <h2 class="nomeProdto">${lista[i].nome}</h2>
        <p class="precoProduto">R$${lista[i].preco}</p>
      </div>
    `
  }
}

function todosProcurar() {
  estante.innerHTML = ""
  renderizarProdutos(produtosMelhores)
  renderizarProdutos(produtosOutros)
}

function melhoresProcurar() {
  estante.innerHTML = ""
  renderizarProdutos(produtosMelhores)
}

function outrosProcurar() {
  estante.innerHTML = ""
  renderizarProdutos(produtosOutros)
}