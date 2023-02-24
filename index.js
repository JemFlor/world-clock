function updateTime() {
  let locationElement = document.querySelector("#location");
  if (locationElement) {
    let locationDateElement = locationElement.querySelector("#date");
    let locationTimeElement = locationElement.querySelector("#time");
    let locationTime = moment().tz("Europe/London");

    locationDateElement.innerHTML = locationTime.format("MMMM	Do YYYY");
    locationTimeElement.innerHTML = locationTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
