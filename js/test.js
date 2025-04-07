let countPc = 0;
let countUser = 0;

function jokenpo(value) {
    const min = 1;
    const max = 4;
    let ptPc = Math.floor(Math.random() * (max - min)) + min;

    const jogadorEscolha = atribuindo_valor(value);
    const pcEscolha = atribuindo_valor(ptPc);

    const resultado = pontuacao(value, ptPc);

    countPc += resultado.pc;
    countUser += resultado.user;

    const rt = "Você escolheu " + jogadorEscolha + ", e o computador escolheu " + pcEscolha + "\n" + resultado.msg;
    document.getElementById("rt").textContent = rt;
    document.getElementById("contPC").textContent = countPc;
    document.getElementById("contHm").textContent = countUser;
}

function atribuindo_valor(valor) {
    if (valor === 1) return "Pedra";
    if (valor === 2) return "Papel";
    return "Tesoura";
}

function pontuacao(jogador, pc) {
    let resultado = { pc: 0, user: 0, msg: "" };

    if (jogador === pc) {
        resultado.msg = "Empate";
    } else if (
        (jogador === 1 && pc === 3) ||
        (jogador === 2 && pc === 1) ||
        (jogador === 3 && pc === 2)
    ) {
        resultado.user++;
        resultado.msg = "Você venceu!";
    } else {
        resultado.pc++;
        resultado.msg = "O computador venceu!";
    }

    return resultado;
}