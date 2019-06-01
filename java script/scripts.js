function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
if  ((ab+bc<=ca || ab+ca<=bc || ca+bc<=ab) || (ab<=0 || bc<=0 || ca<=0)){
    Text="a triangle cannot be formed <br> <img src = images/no.jpeg>";
}else if(ab===bc && bc===ca && ab===ca){
    Text= "triangle is equilateral  <br> <img src = images/equilateral.png > ";
}else if(ab===bc || bc===ca || ab===ca){
    Text= "triangle is isosceles<br> <img src = images/images.png>";
}else if((!(ab+bc<=ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    Text="scalene triangle <br> <img src = images/scalen.png>";
}else{
    Text ="enter text "
}
document.getElementById("demo").innerHTML = Text;
}   