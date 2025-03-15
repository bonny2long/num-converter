//convert a number to Roman numerals
function convertToRoman(num) {
  if (isNaN(num)) {
    return 'Please enter a valid number.';
  }

  if (num <= 0) {
    return 'Please enter a number greater than or equal to 1.';
  }

  if (num >= 4000) {
    return 'Please enter a number less than or equal to 3999.';
  }

  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';
  let currentNumber = num;

  for (const [roman, value] of romanNumerals) {
    while (currentNumber >= value) {
      result += roman;
      currentNumber -= value;
    }
  }

  return result;
}

// handle conversion and display result
function handleConversion() {
  const num = parseInt(document.getElementById('number').value);
  const outputElement = document.getElementById('output');
  outputElement.innerText = convertToRoman(num);
}

// event listener for the button click
document
  .getElementById('convert-btn')
  .addEventListener('click', handleConversion);

//event listener for the "Enter" key press
document.getElementById('number').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleConversion();
  }
});
