function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(inputValue)) {
        resultElement.innerHTML = 'Please enter a valid number';
        return;
    }

    let liters;

    // Convert input to liters first
    switch (inputUnit) {
        case 'liters':
            liters = inputValue;
            break;
        case 'milliliters':
            liters = inputValue / 1000;
            break;
        case 'cubicMeters':
            liters = inputValue * 1000;
            break;
        case 'cubicFeet':
            liters = inputValue * 28.3168;
            break;
        default:
            resultElement.innerHTML = 'Invalid input unit';
            return;
    }

    let outputValue;

    // Convert liters to the output unit
    switch (outputUnit) {
        case 'liters':
            outputValue = liters;
            break;
        case 'milliliters':
            outputValue = liters * 1000;
            break;
        case 'cubicMeters':
            outputValue = liters / 1000;
            break;
        case 'cubicFeet':
            outputValue = liters / 28.3168;
            break;
        default:
            resultElement.innerHTML = 'Invalid output unit';
            return;
    }

    resultElement.innerHTML = `${inputValue} ${inputUnit} is equal to ${outputValue.toFixed(2)} ${outputUnit}`;
}
