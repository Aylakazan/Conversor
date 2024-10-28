function showConverter(converter) {
    document.getElementById('ed-to-kc').style.display = 'none';
    document.getElementById('kc-to-ed').style.display = 'none';
    
    document.getElementById(converter).style.display = 'block';
}

function validateInputs(input) {
    return !isNaN(input) && input >= 0;
}

function convertEDtoKC() {
    const edValue = parseFloat(document.getElementById('ed-value').value);
    const taraValue = parseFloat(document.getElementById('tara-value-ed').value);
    const resultElement = document.getElementById('ed-to-kc-result');
    const button = document.querySelector('.yellow-button');

    if (!validateInputs(edValue) || !validateInputs(taraValue) || taraValue === 0) {
        alert('Por favor, insira valores válidos e maiores que zero.');
        return;
    }

    button.disabled = true;

    const kcValue = (edValue / taraValue) * 100;
    resultElement.innerText = `O valor é equivalente a ${kcValue.toFixed(2)} KC's.`;

    button.disabled = false;
}

function convertKCtoED() {
    const kcValue = parseFloat(document.getElementById('kc-value').value);
    const taraValue = parseFloat(document.getElementById('tara-value-kc').value);
    const resultElement = document.getElementById('kc-to-ed-result');
    const button = document.querySelector('.blue-button');

    if (!validateInputs(kcValue) || !validateInputs(taraValue) || taraValue === 0) {
        alert('Por favor, insira valores válidos e maiores que zero.');
        return;
    }

    button.disabled = true;

    const edValue = (kcValue / 100) * taraValue;
    resultElement.innerText = `O valor é equivalente a ${edValue.toFixed(2)} ED's.`;

    button.disabled = false;
}
