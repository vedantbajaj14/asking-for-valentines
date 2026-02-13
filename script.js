const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// GIFs to cycle through when No is clicked
const noGifs = [
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aTVsd2Nlc3Nmd3pkZ3cyMGlzMmJwNXZ2eGRvNzdheTYwc2p4emVocCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RsaCJD6DWzyNm1TwYj/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cmI5M2N5YmY3bjJ4cWFncGhpbmVrYzdwbXE1ZjVwYmM0dWdrNnVpeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lR3pWtb80Hz22UjrYj/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHQ0Zms5dzkwcWs3YXpyNTNzdGd3NWViZWNvYWs3dW1jMTN2MGNvZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/P53TSsopKicrm/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHQ0Zms5dzkwcWs3YXpyNTNzdGd3NWViZWNvYWs3dW1jMTN2MGNvZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ORTPDqxMQD4I/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3ZtbjU3eHhhOHg3Y2s5bDk3N2oyaDd3MnZnNDFna3h5eTB5eG1ncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l1AsyjZ8XLd1V7pUk/giphy.gif"
];

// Messages to display when No is clicked
const noMessages = [
    "Why not?",
    "Please give me a chance cutie ;)",
    "Give it another thought pleaseeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "You are making me sad now 😭",
    "I wont take no for an answer!!! MUAHAHAHAHA !!!!!"
];

let noClickCount = 0;

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, thank you for bearing with this idiot for so long! Your chomu is the lucking guy in the world :) Looking forward to our date tomorrow meri jaan 💕";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9zaHVmczJrdngxd3F2eGJscWhqdDhhd29vbmo1OGNka3d3djFzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5OqXb948EBkyUcnwHt/giphy.gif";

    // Hide the No button and main gif
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    gif.style.display = "none";
    
    // Show celebration GIFs
    const celebrationContainer = document.querySelector(".celebration-container");
    celebrationContainer.style.display = "flex";
});

noBtn.addEventListener("click", () => {
    // Update the GIF and message if within range, otherwise keep showing the last one
    if (noClickCount < noGifs.length) {
        gif.src = noGifs[noClickCount];
        question.innerHTML = noMessages[noClickCount];
    }
    
    noClickCount++;
    
    // Make the Yes button larger
    const currentWidth = yesBtn.offsetWidth;
    const currentHeight = yesBtn.offsetHeight;
    yesBtn.style.width = `${currentWidth * 1.5}px`;
    yesBtn.style.height = `${currentHeight * 1.5}px`;
    
    // Hide the No button after 15 clicks
    if (noClickCount >= 15) {
        noBtn.style.display = "none";
    }
});