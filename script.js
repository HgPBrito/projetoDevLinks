function toggleMode() {
    const htlm = document.documentElement;
    htlm.classList.toggle('light');

    const img = document.querySelector('#profile img');
    if (htlm.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto Hugo Brito olhando fixamente para frente, com barba vestindo uma camisa polo azul.');
    } else {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto Hugo Brito olhando fixamente para frente, com barba vestindo uma camisa polo azul.');
    }

}