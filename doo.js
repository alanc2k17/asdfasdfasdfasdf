var drawCircle = function(e, x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    x = e.offsetX;
    y = e.offsetY;
    
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
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

    var move = function(e) {
	console.log(requestID);
	foo = document.getElementsByTagName("circle");

	for (var i = 0; i < foo.len; i++) {
	    var c = foo[i];
	    var cx = parseInt(c.getAttribute("cx"));
	    var cy = parseInt(c.getAttribute("cy"));
	    var r = parseInt(c.getAttribute("r"));

	    if (r < 2)
		pic.removeChild(c);

	    if (x < 10 || x > 490)
		c.xv = parseInt(-c.xv);

	    if (y < 10 || y > 490)
		c.yv = parseInt(-c.yv);	    

	    if (cy == 250) {
		c.setAttribute("r", r / 2);
		var child = drawCircle(e.offsetX, e.offsetY);
		child.setAttribute("r", r / 2);
		child.xv = parseInt(-c.xv);
		child.yv = parseInt(-c.yv);
		pic.appendChild(child);
	    }
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
