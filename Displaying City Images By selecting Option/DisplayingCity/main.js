let result = new Map();
result.
set("Ahmedabad" , "Ahemdabad.jpg").
set("Delhi" , "Delhi.jpg").
set("Mumbai" , "Mumbai.webp").
set("Kerela" , "kerela.jpeg");
let opening_tag = '<img src="';
let ending_tag = '">' 
// First Created a Map stored images src as a value 

function getCity(){
    let out = opening_tag; // I will store like this <img src="Ahmedabad.jpg"> inside out 
    let cityname = new String();
// Following 2 lines will help me to know the "value" of option I have selected
    let ele = document.querySelector("#select");
    cityname = ele.value;

    out += result.get(cityname) + ending_tag;
    document.getElementById('output').innerHTML = out;
}