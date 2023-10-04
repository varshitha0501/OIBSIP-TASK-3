const calculateTemp = () => {
    const inpTemp = document.getElementById('temp').value;

    const choosen = document.getElementById('temp_diff');
    const result = temp_diff.options[choosen.selectedIndex].value;

    // Celsius to Fahrenheit
    const chanToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const chanToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (result == 'cel') {
        document.getElementById("result").innerHTML = chanToFah(inpTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = chanToCel(inpTemp) + "&#176; Celsius";
    }
}
