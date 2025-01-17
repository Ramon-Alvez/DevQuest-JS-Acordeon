// 1- Armazenar o click da seta
// 2- Reconhecer qual seta foi clicada e abrir ela
// 3- Se houver alguma seta aberta, fechar ela antes de abrir a atual

let setas = document.querySelectorAll("img[alt = 'seta']");
let buscarInfo = document.querySelectorAll('article')

function desativarTodasSetas() {
    setas.forEach((item, indice) => {
        item.classList.replace('ativo', 'inativo');
        item.src = "src/images/seta.png";
        buscarInfo[indice].classList.add('esconder');
    });
}

setas.forEach((item, indice) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('inativo')) {
            desativarTodasSetas();
            item.classList.replace('inativo', 'ativo')
            item.src = "src/images/seta-aberta.png"
            buscarInfo[indice].classList.remove('esconder')

        } else if (item.classList.contains('ativo'))  {
            item.classList.replace('ativo', 'inativo')
            item.src = "src/images/seta.png"

            buscarInfo[indice].classList.add('esconder')
        }
    })
    
});