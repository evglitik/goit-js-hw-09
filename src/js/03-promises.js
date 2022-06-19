import '../css/common.css';
import Notiflix from 'notiflix';

console.log('pidary')
const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;
  let deleyStep = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, deleyStep)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            fontSize: '16px',
            useIcon: false
          }
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,
        {
            fontSize: '16px',
            useIcon: false
        })
      );
    deleyStep += Number(step.value);
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}