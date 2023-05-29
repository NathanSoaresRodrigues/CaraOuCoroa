let moeda = document.getElementById('moeda');
let botao = document.getElementById('lancarMoeda');

botao.addEventListener('click', () => {
    botao.disabled = true;

    let random = Math.floor(Math.random() * 2);

    if (random == 0) {
        moeda.style.transform = 'rotateY(720deg)';
    } else if (random == 1) {
        moeda.style.transform = 'rotateY(900deg)';
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
})