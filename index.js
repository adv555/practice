const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

// ======================== вариант 2 ======================== //

const switchColors = {
  // isActive: false,
  timerId: null,
  start() {
    // if (this.isActive) {
    //   // console.log(this.isActive);
    //   return;
    // }
    // this.isActive = true;
    refs.btnStart.disabled = true;
    this.timerId = setInterval(() => {
      let i = randomIntegerFromInterval(0, colors.length);
      refs.body.style.backgroundColor = colors[i];
      // console.log(refs.body.style.backgroundColor);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    // this.isActive = false;
    refs.btnStart.disabled = false;
    // console.log(this.isActive);
  },
};

refs.btnStart.addEventListener('click', switchColors.start.bind(switchColors));
refs.btnStop.addEventListener('click', switchColors.stop.bind(switchColors));

// ======================== вариант 1 ======================== //
// let timerId = null;
// let isActive = false;

// refs.btnStart.addEventListener("click", start);
// refs.btnStop.addEventListener("click", stop);

// function start() {
//   //   stop();
//   //   refs.btnStart.removeEventListener("click", start);
//   if (isActive) {
//     return;
//   }
//   isActive = true;
//   timerId = setInterval(() => {
//     let i = randomIntegerFromInterval(0, colors.length - 1);
//     refs.body.style.backgroundColor = colors[i];
//   }, 1000);
// }

// function stop() {
//   //   refs.btnStart.addEventListener("click", start);
//   clearInterval(timerId);
//   isActive = false;
// }
