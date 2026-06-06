const clock = document.getElementById("clock");

async function time(){
  const res = new Date();
  clock.innerHTML = res.toLocaleTimeString();
}

async function showLocation(position) {
  const ctn = document.createElement("div");
  ctn.innerHTML = `Latitude: ${position.coords.latitude} <br> Longitude: ${position.coords.longitude}`;
  app.appendChild(ctn);

}

navigator.geolocation.getCurrentPosition(showLocation, (err) => {
  console.log(err);
});


const interval = setInterval(time, 1000);

