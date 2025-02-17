const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy, your chomu is the lucking guy in the world :)";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9zaHVmczJrdngxd3F2eGJscWhqdDhhd29vbmo1OGNka3d3djFzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5OqXb948EBkyUcnwHt/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    const currentWidth = yesBtn.offsetWidth;
    const currentHeight = yesBtn.offsetHeight;
    yesBtn.style.width = `${currentWidth * 2.0}px`;
    yesBtn.style.height = `${currentHeight * 2.0}px`;
});