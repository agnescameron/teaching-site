
//this function will get called once we've got our temperature
//it will then change the background colour of the page
function colorPage(temperature) {
    if (temperature > 60) {
    	document.body.style.backgroundColor='orange';
    }

    else if (temperature > 50){
    	document.body.style.backgroundColor='yellow';
    }

    else if (temperature > 40){
    	document.body.style.backgroundColor='lightyellow';
    }

    else if (temperature > 30){
    	document.body.style.backgroundColor='lightblue';
    }

    else if (temperature > 20){
    	document.body.style.backgroundColor='blue';
    }

    else {
    	document.body.style.backgroundColor='darkblue';
    }
}

//


fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/40.6644304,-73.9799921")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

  	//this prints the data
  	console.log(data);

  	//this gets the temperature value from the json object
    const temperature = data.currently.temperature;

    //this calls the function which we're going to use to color the page
    colorPage(temperature)

    //this part sends the temperature value to the front end
    document.getElementById("temp").innerHTML = temperature;
  });
