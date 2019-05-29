function triangle(){
var ab = parseInt(document.getElementById("sideab").value);
var bc = parseInt(document.getElementById("sidebc").value);
var ca = parseInt(document.getElementById("sideca").value);
if(ab===bc && bc===ca && ab===ca){
    alert("triangle is eqilateral");
}else if(ab==bc || bc===ca || ab==ca){
    alert("triangle is isosceles");
}else if((!(ab+bc<=ca || ab+ca<=bc || ca+bc<=ab)) && (!(ab===bc && bc===ca && ab===ca)) ){
    alert("scalene triangle");
}else if  (ab+bc<=ca || ab+ca<=bc || ca+bc<=ab){
    alert("a triangle cannot be formed");
}
}

