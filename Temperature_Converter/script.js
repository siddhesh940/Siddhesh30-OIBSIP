const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convertToCelsiusButton = document.querySelector(".convertToCelsiusButton");
const convertToFahrenheitButton = document.querySelector(".convertToFahrenheitButton");
const convertToKelvinButton = document.querySelector(".convertToKelvinButton");
const resetButton = document.querySelector(".resetButton");

// Function to reset input and result
const reset = () => {
  converter.value = "";
  result.innerHTML = "";
};

// Convert to Celsius
const convertToCelsius = () => {
  const input = parseFloat(converter.value);
  if (isNaN(input)) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  const fromFahrenheit = (input - 32) / 1.8;
  const fromKelvin = input - 273.15;
  result.textContent = `From Fahrenheit: ${fromFahrenheit.toFixed(2)}°C, From Kelvin: ${fromKelvin.toFixed(2)}°C`;
};

// Convert to Fahrenheit
const convertToFahrenheit = () => {
  const input = parseFloat(converter.value);
  if (isNaN(input)) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  const fromCelsius = input * 1.8 + 32;
  const fromKelvin = (input - 273.15) * 1.8 + 32;
  result.textContent = `From Celsius: ${fromCelsius.toFixed(2)}°F, From Kelvin: ${fromKelvin.toFixed(2)}°F`;
};

// Convert to Kelvin
const convertToKelvin = () => {
  const input = parseFloat(converter.value);
  if (isNaN(input)) {
    result.textContent = "Please enter a valid number.";
    return;
  }
  const fromCelsius = input + 273.15;
  const fromFahrenheit = (input - 32) / 1.8 + 273.15;
  result.textContent = `From Celsius: ${fromCelsius.toFixed(2)}K, From Fahrenheit: ${fromFahrenheit.toFixed(2)}K`;
};

// Event Listeners
resetButton.addEventListener("click", reset);
convertToCelsiusButton.addEventListener("click", convertToCelsius);
convertToFahrenheitButton.addEventListener("click", convertToFahrenheit);
convertToKelvinButton.addEventListener("click", convertToKelvin);
