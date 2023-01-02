// var colors = document.getElementsByClassName("color")

// for(var i = 0; i < colors.length; i++) {
//   console.log("This color is " + colors[i].innerHTML)
// }

var ol = document.querySelector("#color-list")
var li = document.querySelectorAll(".color")

for(var i = 0; i < li.length; i++) {
  console.log(li[i].textContent)
}

console.log(ol.textContent)