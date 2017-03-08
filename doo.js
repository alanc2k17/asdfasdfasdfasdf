var pic = document.getElementById("vimage");

var drawCircle = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);
}

var animate = function() {
    window.cancelAnimationFrame(requestID);

    var requestID;

    var move = function() {
	console.log(requestID);
	foo = document.getElementsByTagName("circle");
}
 
pic.addEventListener("click", drawCircle);
