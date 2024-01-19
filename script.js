var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(point){
    crsr.style.left = point.x + "px"
    crsr.style.top = point.y + "px"
})