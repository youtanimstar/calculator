let input = document.querySelector("#input-text");
let output = document.querySelector("#output-text");
// ------------------------screen-area----------------------------

let del = document.querySelector("#delete");
let ans = document.querySelector("#answer");
let ac = document.querySelector("#allClear");

// ------------------------controllers----------------------------


let numOne = document.querySelector("#num-1");
let numTwo = document.querySelector("#num-2");
let numThree = document.querySelector("#num-3");
let numFour = document.querySelector("#num-4");
let numFive = document.querySelector("#num-5");
let numSix = document.querySelector("#num-6");
let numSeven = document.querySelector("#num-7");
let numEight = document.querySelector("#num-8");
let numNine = document.querySelector("#num-9");
let numZero = document.querySelector("#num-0");


// ------------------------numpad----------------------------


let plus = document.querySelector("#addition");
let minus = document.querySelector("#substraction");
let div = document.querySelector("#division");
let mul = document.querySelector("#multiplication");
let pow = document.querySelector("#power");
let bracketStart = document.querySelector('#Bracket-S');
let bracketEnd = document.querySelector("#Bracket-E");
let decimalPoint = document.querySelector("#decimal");
let mySound = new Audio('./sounds/click-47609.mp3')
let mySoundPing = new Audio("./sounds/ping-82822.mp3");
let mySoundWrong = new Audio("./sounds/wronganswer-37702.mp3");

// ------------------------operators----------------------------
// ------------------------logic----------------------------


// // ------------------------numpad-logic----------------------------

numOne.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "1";
    mySound.play()
});
numTwo.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "2";
    mySound.play()
});
numThree.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "3";
    mySound.play()
});
numFour.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "4";
    mySound.play()
});
numFive.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "5";
    mySound.play()
});
numSix.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "6";
    mySound.play()
});
numSeven.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "7";
    mySound.play()
});
numEight.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "8";
    mySound.play()
});
numNine.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "9";
    mySound.play()
});
numZero.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "0";
    mySound.play()
});

// ------------------------operators-logic----------------------------
plus.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "+";
    mySound.play()
});
minus.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "-";
    mySound.play()
});
mul.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "*";
    mySound.play()
});
div.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "/";
    mySound.play()
});
bracketStart.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "(";
    mySound.play()
});
bracketEnd.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + ")";
    mySound.play()
});
pow.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + "**";
    mySound.play()
});
decimalPoint.addEventListener('click', ()=>{
    input.innerHTML = input.innerHTML + ".";
    mySound.play()
});


// ------------------------logic----------------------------
ans.addEventListener('click', ()=>{
    
    try{
        mySoundPing.play();
        if(eval(input.innerHTML) == Infinity)
        {
            output.innerHTML = "Aukat mai raha kar...."  
        }
    else
    output.innerHTML = "faltu calculator";}
    catch(err)
    {
        output.innerHTML = "Error";
        mySoundWrong.play();
    }
});

del.addEventListener('click', ()=>{
    mySound.play();
    input.innerHTML = input.innerHTML.substring(0,input.innerHTML.length-1);

})
ac.addEventListener('click', ()=>{
    mySound.play();
    input.innerHTML = "";
    output.innerHTML = "0";
})

