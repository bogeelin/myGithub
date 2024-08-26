const barData = [
    { image: "url('./img/index-3-1.jpg')", barLeft: 'Bar A', barRight: 'Bar B' },
    { image: "url('./img/index-3-2.jpg')", barLeft: 'Bar C', barRight: 'Bar D' },
    { image: "url('./img/index-3-3.jpg')", barLeft: 'Bar E', barRight: 'Bar F' },
    { image: "url('./img/index-3-4.jpg')", barLeft: 'Bar G', barRight: 'Bar H' }
];

let currentIndex = 0;

function updateSlideshow() {
    const slideshowImage = document.querySelector('.slideshow-image');
    const barNameLeft = document.querySelector('.bar-name-left');
    const barNameRight = document.querySelector('.bar-name-right');

    slideshowImage.style.backgroundImage = barData[currentIndex].image;
    barNameLeft.textContent = barData[currentIndex].barLeft;
    barNameRight.textContent = barData[currentIndex].barRight;

    currentIndex = (currentIndex + 1) % barData.length;
}

setInterval(updateSlideshow, 2000);

