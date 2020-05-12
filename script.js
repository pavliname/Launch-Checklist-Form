window.addEventListener("load", function(){

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
      alert("Please double check submitted information. Pilot Name and Co-pilot Name need to be strings, Fuel Level and Cargo Mass need to be numbers!");
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

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
