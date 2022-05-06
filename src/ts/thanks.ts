import '../scss/thanks.scss';
import './modals';

const userName = localStorage.getItem('userName');
const userCity = localStorage.getItem('userCity');

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
const cityLabelEl = document.querySelector('.js-city') as HTMLSpanElement;
nameLabelEl.textContent = userName
  ? `${localStorage.getItem('userName')},`
  : 'Гость,';
cityLabelEl.textContent = userCity
  ? `за заявку на город ${userCity} на франшизу «Память потомков»©`
  : 'за обращение в компанию «Память потомков»©';

document.title = userName
  ? `${userName}, спасибо, Ваша заявка принята`
  : 'Cпасибо, Ваша заявка принята';
