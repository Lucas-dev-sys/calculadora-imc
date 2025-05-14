document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validação de entrada
    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').textContent = 
            'Por favor, insira valores numéricos válidos.';
        return;
    }

    if (peso < 10 || peso > 300) {
        document.getElementById('resultado').textContent = 
            'Peso inválido. Digite um valor entre 10 kg e 300 kg.';
        return;
    }

    if (altura < 0.5 || altura > 2.5) {
        document.getElementById('resultado').textContent = 
            'Altura inválida. Digite um valor entre 0,5 m e 2,5 m.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade';
    } else {
        classificacao = 'Obesidade grave';
    }

    document.getElementById('resultado').textContent = 
        `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
});

