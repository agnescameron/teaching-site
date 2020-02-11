
const url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c0d72b078c4f27a37169a2a3638dad3e/50,-30'

async function getData () {
	var result = await fetch(url);
	var resultJSON = await result.json();
	console.log(resultJSON)
	document.getElementById("weather").innerHTML = resultJSON.currently.summary;
}

getData();