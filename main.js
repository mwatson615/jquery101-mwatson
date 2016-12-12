console.log("HI")

$("h1").html("Hello ")



//append - list of stuff and want to make list on page

var foods = ["apple", "carrot", "banana", "egg", "danish"]

for (i = 0; i < foods.length; i++) {
$("ul").append(`<li>${foods[i]}</li>`);
}
//<div class="foods"><ul>, etc

$("ul").wrap("<div class='foods'></div>")
$('input:first').val('Hello')

$(".btn").click(function() {
	console.log($("input").first().val());
})

$.getJSON("https://randomuser.me/api/?nat=us", function(data) {
	console.log(data)
})


$("h1").html(`Hello
	${firstName[0].toUpperCase()}${firstName.slice(1)}
	${lastName[0].toUpperCase()}${lastName.slice(1)}
	`)
