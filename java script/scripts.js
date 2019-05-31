function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
if  ((ab+bc<=ca || ab+ca<=bc || ca+bc<=ab) || (ab<=0 || bc<=0 || ca<=0)){
    Text="a triangle cannot be formed";
}else if(ab===bc && bc===ca && ab===ca){
    Text= "triangle is equilateral";
}else if(ab===bc || bc===ca || ab===ca){
    Text= "triangle is isosceles";
}else if((!(ab+bc>ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    Text="scalene triangle";
}
document.getElementById("demo").innerHTML = Text;
}   