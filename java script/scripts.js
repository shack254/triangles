function triangle(){
var ab = parseInt(document.getElementById("sideab"));
var bc = parseInt(document.getElementById("sidebc"));
var ca = parseInt(document.getElementById("sideca"));
if(ab===bc && bc===ca && ab===ca){
    alert("triangle is eqilateral");
}else if( (ab===bc || bc===ca || ab==ca) && (!(ab+bc<=ca || ab+ca<=bc || ca+bc<=ab))){
    alert("triangle is isosceles");
}else if((ab+bc>ca || ab+ca>bc || ca+bc>ab) && (ab!=bc && bc!=ca && ab!=ca) && (!(ab+bc<=ca || ab+ca<=bc || ca+bc<=ab))){
    alert("scalene triangle");
}else{
    alert("a triangle cannot be formed");
}
}

