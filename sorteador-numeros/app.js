function selectRandom() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let draw = [];
    let number;

    for (let i = 0; i < quantity; i++) {
        number = randomNumber(from, to);

        while (draw.includes(number)) {
            number = randomNumber(from, to);
        }

        draw.push(number);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${draw}</label>`;
    buttonStatus();

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function buttonStatus() {
    let button = document.getElementById('btn-reiniciar');
    if (button.classList.contains('container__botao-desabilitado')) {
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado');
    }
}


function restart() {
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('result').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    buttonStatus();
}