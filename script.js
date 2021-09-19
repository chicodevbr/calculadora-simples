const input = document.querySelector('.display');

const keyboardInputs = document.querySelector('#keyboardInputs');

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
    input.innerHTML += target.value;
  }
  switch (target.value) {
    case '/':
      input.innerHTML += target.value;
      break;
    case '*':
      input.innerHTML += target.value;
      break;
    case '-':
      input.innerHTML += target.value;
      break;
    case '+':
      input.innerHTML += target.value;
      break;
    case 'AC':
      input.innerHTML = '';
      break;
    case '=':
      let equacao = input.innerHTML;
      //eval apenas para testar. Falta construir função para calcular os inputs
      input.innerHTML = eval(equacao);
      console.log(eval(equacao));
    default:
      break;
  }
};

const targetEvent = (event) => {
  const target = event.target;
  return target;
};

const calcula = (equacao) => {};

window.onload = () => {
  renderKeyborad(keyboardButtons, keyboardInputs);
};
