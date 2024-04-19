var butt=document.getElementById("but")
var bac=document.getElementById("back")
function change(){
let clr=["pink","blue","yellow","red","orange","black"];
let rand=Math.floor(Math.random()*clr.length);
console.log(rand);
console.log(clr[rand]);
bac.style.backgroundColor=clr[rand]
}