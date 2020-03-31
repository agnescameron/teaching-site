var toppings = ["spaghetti", "cornflakes", "cheese", "melon", "Abba", "chicken", "spaghetti", "cornflakes", "cheese", "melon", "Abba", "chicken", "spaghetti", "cornflakes", "cheese", "parsons school of design", "Abba", "chicken"]

for(var i=0; i<toppings.length; i++){
	$('#ingredients').append("<div class='box'>" + toppings[i] + "</div>")
}