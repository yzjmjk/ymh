var bro1 = document.getElementById('proimg1');
var bro2 = document.getElementById('proimg2');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');



document.getElementById("btn1").onclick=function(){
bro2.style.display="none";
bro1.style.display="block";
}

document.getElementById("btn2").onclick=function(){
bro1.style.display="none";
bro2.style.display="block";
}



