window.addEventListener("load", function(){
  let json = [];
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
     response.json().then(function(json) {
        let missionTarget = document.getElementById("missionTarget");
        let index = Math.floor(Math.random()*json.length);
           missionTarget.innerHTML = `
           <h2>Mission Destination</h2>
           <ol>
              <li>Name: ${json[index].name}</li>
              <li>Diameter: ${json[index].diameter}</li>
              <li>Star: ${json[index].star}</li>
              <li>Distance from Earth: ${json[index].distance}</li>
              <li>Number of Moons: ${json[index].moons}</li>
           </ol>
           <img src="${json[index].image}">
           `;
     });
            });
  let form = document.querySelector("form");
form.addEventListener("submit", function(event){

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");
  let pilotName = document.getElementById("pilotName");
  let copilotName = document.querySelector("input[name='copilotName']");
  let fuelLevel = document.querySelector("input[name='fuelLevel']");
  let cargoMass = document.querySelector("input[name='cargoMass']");

  // check all fields were submitted
    if (pilotName.value =="" || copilotName.value=="" || fuelLevel.value=="" || cargoMass.value==""){
      alert("All fields are required!");
      event.preventDefault();
    } else {

  // check the submitted information is of a correct data type
    if ((!isNaN(pilotName.value)) || (!isNaN(copilotName.value)) || (isNaN(fuelLevel.value))|| (isNaN(cargoMass.value))){
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
    } else {

              pilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`;
              copilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`;

              if ((Number(fuelLevel.value)<10000)||(Number(cargoMass.value)>10000)){
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color="red";

                if ((Number(fuelLevel.value)<10000)&&(Number(cargoMass.value)>10000)){
                  fuelStatus.innerHTML = "Not enough fuel for the journey";
                  cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
                }

                if (Number(fuelLevel.value)<10000){
                  fuelStatus.innerHTML = "Not enough fuel for the journey";
                  cargoStatus.innerHTML = "Cargo mass low enough for launch";
                }

                if (Number(cargoMass.value)>10000){
                  cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
                  fuelStatus.innerHTML = "Fuel level high enough for launch";
                }
                document.getElementById("faultyItems").style.visibility="visible";
              } else {
                launchStatus.innerHTML = "Shuttle is ready for launch";
                launchStatus.style.color="green";
                document.getElementById("faultyItems").style.visibility="hidden";
              }
                event.preventDefault();
            }
}

});

});
