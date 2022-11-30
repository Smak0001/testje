// Prove that JavaScript is working in your browser. You may delete this.
console.log('JavaScript is working!');

const userName = window.prompt('What is your name?', 'Xander');
const age = window.prompt('What is your age ' + userName + '?', 20);

if (age <= 17) {
  document.getElementById('advice-text').innerHTML = 'Sorry ' + userName + ', you are not old enough to get a proper advice from us';
  document.getElementById('advice-card').className = 'box has-background-grey-light';
  document.getElementById('username').innerHTML = userName;
  document.getElementById('age').innerHTML = age;
} else {
  const height = window.prompt('What is your height in meters ' + userName + '?', 1.78);
  const weight = window.prompt('What is your weight in kilogram ' + userName + '?', 90);
  const bmi = weight / Math.pow(height, 2);
  document.getElementById('username').innerHTML = userName;
  document.getElementById('age').innerHTML = age;
  document.getElementById('height').innerHTML = height;
  document.getElementById('weight').innerHTML = weight;
  console.log(userName, age, height, weight, bmi);

  if (bmi < 18.5) {
    document.getElementById('advice-text').innerHTML = 'Your BMI is: ' + bmi + '<br> You are under weight <br> Start with a personal trainer';
    document.getElementById('advice-card').className = 'box has-background-warning';
  } else if (bmi >= 18.5 && bmi < 25) {
    document.getElementById('advice-text').innerHTML = 'Your BMI is: ' + bmi + '<br> You have a normal weight <br> Start with any programme';
    document.getElementById('advice-card').className = 'box has-background-success';
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById('advice-text').innerHTML = 'Your BMI is: ' + bmi + '<br> You are slightly over weight <br> Start with cardio training';
    document.getElementById('advice-card').className = 'box has-background-warning';
  } else {
    document.getElementById('advice-text').innerHTML = 'Your BMI is: ' + bmi + '<br> You are obese <br> Start with a personal trainer';
    document.getElementById('advice-card').className = 'box has-background-danger';
  }
};