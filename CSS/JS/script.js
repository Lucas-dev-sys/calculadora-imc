document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        document.getElementById('resultado').textContent = 
            `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
    } else {
        document.getElementById('resultado').textContent = 
            'Digite valores válidos!';
    }
});
