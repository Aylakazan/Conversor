function showConverter(converter) {
    document.getElementById('ed-to-kc').style.display = 'none';
    document.getElementById('kc-to-ed').style.display = 'none';
    
    document.getElementById(converter).style.display = 'block';
}

function convertEDtoKC() {
    var edValue = parseFloat(document.getElementById('ed-value').value);
    var taraValue = parseFloat(document.getElementById('tara-value-ed').value);
    
    if (isNaN(edValue) || isNaN(taraValue) || taraValue === 0) {
        alert('Por favor, insira valores válidos e maiores que zero.');
        return;
    }
    
    var kcValue = (edValue / taraValue) * 100;
    document.getElementById('ed-to-kc-result').innerText = "O valor é equivalente a " + kcValue.toFixed(2) + " KC's.";
}

function convertKCtoED() {
    var kcValue = parseFloat(document.getElementById('kc-value').value);
    var taraValue = parseFloat(document.getElementById('tara-value-kc').value);
    
    if (isNaN(kcValue) || isNaN(taraValue) || taraValue === 0) {
        alert('Por favor, insira valores válidos e maiores que zero.');
        return;
    }
    
    var edValue = (kcValue / 100) * taraValue;
    document.getElementById('kc-to-ed-result').innerText = "O valor é equivalente a " + edValue.toFixed(2) + " ED's.";
}
