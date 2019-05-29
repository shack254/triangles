var ab = parseInt(prompt("enter number"));
var bc = parseInt(prompt("enter number"));
var ca = parseInt(prompt("enter number"));
if(ab===bc && bc===ca && ab===ca){
    alert("triangle is eqilateral");
}else if( ab==bc || bc===ca || ab==ca){
    alert("triangle is isosceles");
}else if((ab+bc>ca || ab + ca > bc || ca + bc >ab) && (ab!=bc && bc!=ca && ab!=ca)){
    alert("scalene triangle")
}else if (ab+bc <= ac || ab+ca <=bc || ac+bc<=ab){
    alert("a triangle cannot be formed");
}
