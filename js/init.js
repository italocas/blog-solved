window.onload = function () {
    const elIncreaseFont = document.getElementById('elIncreaseFont');
    const elDecreaseFont = document.getElementById('elDecreaseFont');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    let fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    const increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elIncreaseFont.addEventListener('click', function (event) {
        event.preventDefault();
        fontSize = fontSize + increaseDecrease;
        document.body.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elDecreaseFont.addEventListener('click', function (event) {
        event.preventDefault();
        fontSize = fontSize - increaseDecrease;
        document.body.style.fontSize = fontSize + '%';
    });

    elAltoContraste.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.toggle('high-contrast');
    });
}
