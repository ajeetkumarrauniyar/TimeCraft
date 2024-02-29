const secondsHand = document.getElementById("sec");
const minutesHand = document.getElementById("min");
const hoursHand = document.getElementById("hr");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360);
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log("Sec:", seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360);
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  console.log("Minutes:", minutes);

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360);
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log("Hours:", hours);
}

setInterval(setDate, 1000);
