// 1- Armazenar o click da seta
// 2- Reconhecer qual seta foi clicada e abrir ela
// 3- Se houver alguma seta aberta, fechar ela antes de abrir a atual

let setas = document.querySelectorAll("input[name='topico']");
const tamanhoSetas = setas.length


let verificarAtivacao = setas.forEach(function(item, indice) {
    item.addEventListener('change', () => {
        console.log(item)
        console.log(indice)
        if (item.checked == true) {
            // Ícone de Seta
            document.getElementsByTagName('i')[indice].classList.remove('inativo');
            document.getElementsByTagName('i')[indice].classList.add('ativo');

            // Info
            document.getElementsByClassName('info')[indice].classList.remove('esconder');
            document.getElementsByClassName('info')[indice].classList.add('mostrar');


            setas.forEach(function(outroItem, outroIndice) {
                if (indice !== outroIndice) {
                    outroItem.checked = false;
                    // Ícone de Seta
                    document.getElementsByTagName('i')[outroIndice].classList.remove('ativo');
                    document.getElementsByTagName('i')[outroIndice].classList.add('inativo');

                    // Info
                    document.getElementsByClassName('info')[outroIndice].classList.add('esconder');
                    document.getElementsByClassName('info')[outroIndice].classList.remove('mostrar');
                }
            })
        }
        else {
            // Ícone de Seta
            document.getElementsByTagName('i')[indice].classList.add('inativo');
            document.getElementsByTagName('i')[indice].classList.remove('ativo');

            // Info
            document.getElementsByClassName('info')[indice].classList.add('esconder');
            document.getElementsByClassName('info')[indice].classList.remove('mostrar');
        }
    })
})
