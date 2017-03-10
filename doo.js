var drawCircle = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    
    c.addEventListener("click", clickCircle);

    pic.appendChild(c);
};

var clickCircle = function(e) {
    if (this.getAttribute("fill") == "red") {
	this.setAttribute("fill", "yellow");
    }
    else if (this.getAttribute("fill") == "yellow") {
	this.parentNode.removeChild(this);
    }
    e.stopPropagation();
};

var animate = function() {
    window.cancelAnimationFrame(requestID);

    var requestID;

    var move = function() {
	console.log(requestID);
	foo = document.getElementsByTagName("circle");

	for (var i = 0; i < foo.len; i++) {
	    var c = foo[i];
	    var cx = parseInt(c.getAttribute("cx"));
	    var cy = parseInt(c.getAttribute("cy"));

	    if (cx < 460)
		c.setAttribute("cx", cx + 1);
	    else
		c.setAttribute("cx", cx - 1);

	    if (cy < 460)
		c.setAttribute("cy", cy + 1);
	    else
		c.setAttribute("cy", cy - 1);
	}
	requestID = window.requestAnimationFrame(move);
    }
    move();
};

var clear = function() {
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
};

var pic = document.getElementById("vimage");
var clr = document.getElementById("clr");
var mv = document.getElementById("mv");

pic.addEventListener("click", drawCircle);
clr.addEventListener("click", clear);
mv.addEventListener("click", animate);
