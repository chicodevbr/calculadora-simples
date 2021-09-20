const input = document.querySelector('.display');

const keyboardInputs = document.querySelector('#keyboardInputs');

let operator;
let num1;
let num2;

const keyboardButtons = [
  7,
  8,
  9,
  '/',
  'AC',
  4,
  5,
  6,
  '*',
  'ADV',
  1,
  2,
  3,
  '+',
  'DEL',
  0,
  '.',
  '-',
  '=',
  'Back',
];

const renderKeyborad = (arr, element) => {
  arr.map((number) => {
    element.innerHTML += `<button class="btn-numbers" id="${number}" value="${number}" onclick="btnClick(event)" >${number}</button>`;
  });
};

const btnClick = (event) => {
  const target = targetEvent(event);

  if (target.value >= 0) {
    input.innerHTML += '';
    input.innerHTML += target.value;
  }
  switch (target.value) {
    case '/':
      input.innerHTML += target.value;
      operator = target.value;

      break;
    case '*':
      input.innerHTML += target.value;
      operator = target.value;

      break;
    case '-':
      input.innerHTML += target.value;
      operator = target.value;

      break;
    case '+':
      input.innerHTML += target.value;
      operator = target.value;

      break;
    case '.':
      input.innerHTML += target.value;
      operator = target.value;

      break;
    case 'AC':
      input.innerHTML = '';
      break;
    case '=':
      let equacao = input.innerHTML;

      input.innerHTML = calcula(equacao, operator);

    default:
      break;
  }
};

const targetEvent = (event) => {
  const target = event.target;
  return target;
};

const calcula = (equacao, operator) => {
  let num = equacao.split(operator);
  num1 = num[0];
  num2 = num[1];
  if (operator === '/') {
    return Number.parseFloat(num1) / Number.parseFloat(num2);
  } else if (operator === '*') {
    return Number.parseFloat(num1) * Number.parseFloat(num2);
  } else if (operator === '-') {
    return Number.parseFloat(num1) - Number.parseFloat(num2);
  } else {
    return Number.parseFloat(num1) - Number.parseFloat(num2);
  }
};

const sumFunction = (num1, num2) => {
  return Number.parseFloat(num1) + Number.parseFloat(num2);
};

window.onload = () => {
  renderKeyborad(keyboardButtons, keyboardInputs);
};
