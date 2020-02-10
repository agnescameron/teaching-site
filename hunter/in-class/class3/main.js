
const url='https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/5708/menu?lang=es&structured=true'


async function getMoreData() {
	var result = fetch(url)
	.then(menu1 => {return menu1.json();})
	.then(result=>{console.log(result)})

	return result;
}

async function getData () {
	var result = await fetch(url);
	var resultJSON = await result.json();
	console.log(resultJSON)
}

getData();