$(document).ready( function() {


// ----------------------
// .append()
// ----------------------

$('.mw-parser-output').append('<p> appending some HTML, now!</p>')


// ----------------------
// .prepend()
// ----------------------

$('.mw-parser-output').prepend('<p> prepending some HTML, now!</p>')


// ----------------------
// .each()
// ----------------------


//  

	// $('p').each(function( index, element ) {
	//   $( element ).prepend(`<p> appending number ${index}</p>`)
	// })



// image search

	// $('img').each(function( index, element ) {
	//   $( element ).attr({"src":  chrome.extension.getURL("img/potato1.jpg"),
	//   "srcset": chrome.extension.getURL("img/potato1.jpg") })
	// })


// text search

 // $("p:contains('frog')").each( function( index, element ) {
 //      var content = $(element).text();
 //      content = content.replace( /frog/g, 'potato' );
 //      $( element ).html( content );
 // });


})


