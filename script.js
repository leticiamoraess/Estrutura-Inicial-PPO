function atualizarHora() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = (horas < 10 ? "0" : "") + horas;
    minutos = (minutos < 10 ? "0" : "") + minutos;
    segundos = (segundos < 10 ? "0" : "") + segundos;

    var horario = horas + ":" + minutos + ":" + segundos;

    document.getElementById("hora").innerHTML = horario;
}

setInterval(atualizarHora, 1000);
atualizarHora();

document.getElementById('toggle-theme').onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};
document.getElementById('sound-btn').onclick = function() {
    const img = document.getElementById('sound-img');
    if (img.src.includes('sound.png')) {
        img.src = 'img/sound-off.png';
    } else {
        img.src = 'img/sound.png';
    }
};

document.getElementById('sound-btn').onclick = function() {
    const img = document.getElementById('sound-img');
    const player = document.getElementById('player');
    if (player.muted) {
        player.muted = false;
        img.src = 'img/sound.png';
    } else {
        player.muted = true;
        img.src = 'img/sound-off.png';
    }
};
const player = document.getElementById('player');
player.volume = 0.2;

document.getElementById('radio-img').onclick = function() {
    const player = document.getElementById('player');
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
};