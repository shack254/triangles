function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
var x = document.createElement("IMG");
if(ab===bc && bc===ca && ab===ca){
    x.setAttribute("src", "images/equilateral.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    Text= "triangle is equilateral";
}else if(ab===bc || bc===ca || ab===ca){
    x.setAttribute("src", "images/images.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    Text= "triangle is isosceles";
}else if((!(ab+bc>ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    x.setAttribute("src", "images/scalen.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    Text="scalene triangle";
}else if  (ab+bc<=ca || ab+ca<=bc || ca+bc<=ab){
    x.setAttribute("src", "images/no.jpeg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "no traingle");
    document.body.appendChild(x);
    Text="a triangle cannot be formed";
}
document.getElementById("demo").innerHTML = Text;
}