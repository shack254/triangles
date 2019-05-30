function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
var IMG = document.createElement("IMG");
if(ab===bc && bc===ca && ab===ca){
    IMG.setAttribute("src", "images/equilateral.png");
    IMG.setAttribute("width", "304");
    IMG.setAttribute("height", "228");
    IMG.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(IMG);
    Text= "triangle is equilateral";
}else if  (ab+bc<=ca || ab+ca<=bc || ca+bc<=ab){
    IMG.setAttribute("src", "images/no.jpeg");
    IMG.setAttribute("width", "304");
    IMG.setAttribute("height", "228");
    IMG.setAttribute("alt", "no traingle");
    document.body.appendChild(IMG);
    Text="a triangle cannot be formed";
}else if(ab===bc || bc===ca || ab===ca){
    IMG.setAttribute("src", "images/images.png");
    IMG.setAttribute("width", "304");
    IMG.setAttribute("height", "228");
    IMG.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(IMG);
    Text= "triangle is isosceles";
}else if((!(ab+bc>ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    IMG.setAttribute("src", "images/scalen.png");
    IMG.setAttribute("width", "304");
    IMG.setAttribute("height", "228");
    IMG.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(IMG);
    Text="scalene triangle";
}
document.getElementById("demo").innerHTML = Text;
}