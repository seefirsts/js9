function showRandom(){
    document.getElementById("output").innerText=Math.random();
}
function showFloor(){
    document.getElementById("output").innerText=Math.floor();  
}
function showCeil(){
    document.getElementById("output").innerText=Math.ceil();
}
function roleDice(){
    let roll=Math.floor(Mathh.random()*6)+1;
    document.getElementById("output").innerText="Dice Roll:"+ roll;
}
function pickRandom(){
    let names =["Ben","Charlie","Tanner","Jakobi"];
    let index =Math.floor(Math.random()* names.length);
    document.getElementById("output").innerText="Chosen:" + names[index];
}