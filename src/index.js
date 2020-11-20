import './styles.css'; 
export default class CountdownTimer {
  
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
      

    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
      timerFase: document.querySelector('.timer'),
    };
     this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const deltatime = this.getTimeComponents({time});
      this.updateTimerface(deltatime);
      console.log(deltatime);
    }, 1000);
    
  }

  updateTimerface({ days, hours, mins, secs }) {     
    this.refs.days.innerHTML = days;
    this.refs.hours.innerHTML = hours;
    this.refs.mins.innerHTML = mins;
    this.refs.secs.innerHTML = secs;
  }

  getTimeComponents({time}) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  
  pad(value) {
    return String(value).padStart(2, '0');
  }
  
}



const timer = new CountdownTimer({
  selector: '#timer-1', 
  targetDate: new Date('Dec 31, 2020'),  
});



 const timer_e = new CountdownTimer({
    selector: '#timer-2', 
   targetDate: new Date('Feb 17, 2021'),
 });
 

