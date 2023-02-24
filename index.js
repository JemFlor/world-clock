function updateTime() {
  let selectedElement = document.querySelector("#selected");
  if (selectedElement) {
    let selectedDateElement = selectedElement.querySelector("#date");
    let selectedTimeElement = selectedElement.querySelector("#time");
    let selectedTime = moment().tz("Europe/London");

    selectedDateElement.innerHTML = selectedTime.format("MMMM Do YYYY");
    selectedTimeElement.innerHTML = selectedTime.format(
      "h:mm:ss [<small]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
