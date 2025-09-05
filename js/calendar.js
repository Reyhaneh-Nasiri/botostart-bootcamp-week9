// calender
const dayCalendar = document.querySelector(".calendar .day");
const weekDayCalendar = document.querySelector(".calendar .weekDay");
const monthCalendar = document.querySelector(".calendar .month");

const getDate = () => {
  const nowDate = new Date().toDateString();
  const [weekDay, month, day] = nowDate.split(" ");
  dayCalendar.innerText = day;
  weekDayCalendar.innerText = weekDay.toUpperCase();
  monthCalendar.innerText = month.toUpperCase();
};
setInterval(getDate, 1000);