// const fetch = require("node-fetch");
const url='https://order.dominos.com/power/store/5708/menu?lang=en&structured=true'

fetch(url)
.then(data => {return data.json()})
.then(res=>{console.log(res)})


// const Http = new XMLHttpRequest();
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }