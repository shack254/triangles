function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
if(ab===bc && bc===ca && ab===ca){
    Text= "this is a equlateral triangle";
}else if(ab===bc || bc===ca || ab===ca){
    Text= "triangle is isosceles";
}else if((!(ab+bc>ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    Text="scalene triangle";
}else if  (ab+bc<=ca || ab+ca<=bc || ca+bc<=ab){
    Text="a triangle cannot be formed";
}
document.getElementById("demo").innerHTML = Text;
}