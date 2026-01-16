// typing effect with multiple texts
let texts = [
    "I Am Passionate Designer |",
    "Creative Thinker |",
    "UI/UX Enthusiast |"
];

let textIndex = 0;   // which sentence
let charIndex = 0;   // which letter

function typingEffect(){
    let currentText = texts[textIndex];

    document.getElementById("typing").innerText =
        currentText.slice(0, charIndex);

    charIndex++;

    // when full text typed
    if(charIndex > currentText.length){
        charIndex = 0;          // restart letters
        textIndex++;            // next sentence

        // restart list
        if(textIndex >= texts.length){
            textIndex = 0;
        }
    }

    setTimeout(typingEffect, 120);
}

typingEffect();

// menu toggle demo
function toggleMenu(){
    alert("Menu button clicked");
}
