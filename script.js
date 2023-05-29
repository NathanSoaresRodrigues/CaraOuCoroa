let moeda = document.getElementById('moeda');
let botao = document.getElementById('lancarMoeda');
let escrito = document.getElementById('resultadoEscrito');

botao.addEventListener('click', () => {
    botao.disabled = true;

    let random = Math.floor(Math.random() * 2);

    if (random == 0) {
        moeda.style.transform = 'rotateY(720deg)';
        setTimeout(() => {
            escrito.innerHTML = 'Coroa';
        }, 1000);
    } else if (random == 1) {
        moeda.style.transform = 'rotateY(900deg)';
        setTimeout(() => {
            escrito.innerHTML = 'Cara';
        }, 1000);
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
})