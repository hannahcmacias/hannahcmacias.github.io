
var facts = [ 
"I am a big fan of coffee.", 
"I can speak 3 languages- English, Spanish, and (some) Italian.", 
"I started coding in 2020.", 
"I enjoy learning and helping others learn.",
"I have experience using 5 programming languages- Java, JavaScript, HTML, Switch, and CSS.", 
"I am from New Mexico but I live in NYC now.",
"I love skiing and figure skating.",
"Autumn is my favorite season.",
"I love the mountains." 
];

var btn = document.getElementById("myBtn");
btn.addEventListener("click", switchFact);

document.getElementById("hiddenFacts").innerHTML = facts[0];

function switchFact(){
    var cur = document.getElementById("hiddenFacts").innerHTML;

    var i = facts.indexOf(cur)+1;
    if(i == facts.length){
        i = 0;
    }
    var displayedFact = facts[i];
    document.getElementById("hiddenFacts").innerHTML = displayedFact;
}




