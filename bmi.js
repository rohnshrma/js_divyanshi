function bmicalculator() {
  var weight = Number(prompt("enter your weight in kg", "weight"));
  var height = Number(prompt("enter your height in m", "height"));
  var bmi = weight / (height * height);
  console.log(`your bmi is ${bmi}`);

  if (bmi < 18.5) {
    alert(`underweight as your Bmi is ${bmi} `);
  } else if (bmi > 18.5 && bmi < 24.9) {
    alert(`normal weight as your Bmi is ${bmi}`);
  } else if (bmi > 25 && bmi < 29.9) {
    alert(`Overweight as your Bmi is ${bmi}`);
  } else if (bmi >= 30) {
    alert(`Obesse as your Bmi is ${bmi}`);
  }
}
bmicalculator();

export default bmicalculator;
