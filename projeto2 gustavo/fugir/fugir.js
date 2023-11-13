const botao = document.querySelector('.meu-botao');

botao.addEventListener('click', () => {
    const larguraTela = window.innerWidth - botao.clientWidth;
    const alturaTela = window.innerHeight - botao.clientHeight;
    
    const novaPosX = Math.floor(Math.random() * larguraTela);
    const novaPosY = Math.floor(Math.random() * alturaTela);
    
    botao.style.left = `${novaPosX}px`;
    botao.style.top = `${novaPosY}px`;
});