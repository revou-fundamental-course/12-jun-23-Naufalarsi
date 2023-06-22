// Konversi button
function konversi(event) {
    event.preventDefault();

    var inputCelcius = document.getElementById("cel-equal").value;

    if (!inputCelcius || inputCelcius === "0"){
        document.getElementById("fahren-equal").value = "0";
        document.getElementById("cel-equal").value = "0";
        document.getElementById("res-equal").value = "";

        document.getElementById("res-equal").innerHTML = "<h4>Cara Konversi dari Celsius (°C) ke Fahrenheit (°F)</h4>";

        alert("Masukkan satuan temperatur!");
        return
    }

    var fahrenheit = inputCelcius * (9 / 5) + 32;

    document.getElementById("fahren-equal").value = `${fahrenheit}`;
    document.getElementById("res-equal").value = `${inputCelcius}°C * ( 9 / 5 ) + 32 = ${fahrenheit}°F`;

    document.getElementById("res-equal").innerHTML = "<h4>Cara Konversi dari Celsius (°C) ke Fahrenheit (°F)</h4>";
}

// Reset button
function reset(event) {
    event.preventDefault();

    document.getElementById("cel-equal").value = "0";
    document.getElementById("fahren-equal").value = "0";
    document.getElementById("res-equal").value = "";
}

// Reverse button
function reverse(event) {
    event.preventDefault();

    var inputFahrenheit = document.getElementById("fahren-equal").value;

    if (!inputFahrenheit || inputFahrenheit === "0"){
        document.getElementById("fahren-equal").value = "0";
        document.getElementById("res-equal").value = "";
        document.getElementById("cel-equal").value = "0";

        document.getElementById("res-equal").innerHTML = "<h4>Cara Konversi dari Fahrenheit (°F) ke Celsius (°C)</h4>";

        alert("Masukkan satuan temperatur!");
        return
    }

    var celsius = (inputFahrenheit - 32) * 5 / 9;

    document.getElementById("cel-equal").value = `${celsius}`;
    document.getElementById("res-equal").value = `( ${inputFahrenheit}°F - 32 ) * 5 / 9 = ${celsius}°C`;

    document.getElementById("res-equal").innerHTML = "<h4>Cara Konversi dari Fahrenheit (°F) ke Celsius (°C)</h4>";
}