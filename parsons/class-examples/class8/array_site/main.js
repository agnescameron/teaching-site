var toppings = ["spaghetti", "cornflakes", "cheese", "melon", "Abba", "chicken"]

for(var i=0; i<toppings.length; i++){
	$('#ingredients').append("<div>" + toppings[i] + "</div>")
}