function updateTime() {
  let locationElement = document.querySelector("#overall");
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

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector("#overall");
  citiesElement.innerHTML = `
     <h2>${cityName}</h2>

      <h3>${cityTime.format("MMMM Do YYYY")}</h3>
      <div class="container" style="text-align: center"></div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
