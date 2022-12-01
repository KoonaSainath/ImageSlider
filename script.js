const imgAvengers = document.querySelector('#img-avengers');
const imgLeft = document.querySelector('#img-avengers-left');
const imgRight = document.querySelector('#img-avengers-right');
const divSliderDots = document.querySelector('.slider-dots-container');
const imageCount = 9;
const numberRegex = /[0-9]+/;
const counter = {count: 1};

let imageUrls = [];
let sliderInnerHtml = ``;
for(let i = 0; i < imageCount; i++){
    imageUrls.push(`images/image${i}.jpg`);
    sliderInnerHtml += `
        <button id='${i}' class='btn-slider'></button>
    `;      
}
divSliderDots.innerHTML = sliderInnerHtml;
document.getElementById('0').classList.add('btn-slider-white');
Array.from(document.getElementsByClassName('btn-slider')).forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        markAllSliderButtonsGrey();
        e.target.classList.add('btn-slider-white');
        counter.count = Number(e.target.id);
        slideImage();
    });
});
slideImage();

setInterval(slideImage, 2000);

function slideImage() {
    let imageNumber = getNextImageNumber();
    let leftImageNumber = ((imageNumber - 1) < 0) ? imageCount-1 : imageNumber - 1;
    let rightImageNumber = ((imageNumber + 1) >= imageCount ? 0 : imageNumber + 1);
    imgAvengers.setAttribute('src', imageUrls[imageNumber]);
    imgLeft.setAttribute('src', imageUrls[leftImageNumber]);
    imgRight.setAttribute('src', imageUrls[rightImageNumber]);
    markAllSliderButtonsGrey();
    document.getElementById(`${leftImageNumber}`).classList.add('btn-slider-white');
}

function markAllSliderButtonsGrey(){
    Array.from(document.getElementsByClassName('btn-slider')).forEach(btn => {
        if(btn.classList.contains('btn-slider-white')){
            btn.classList.remove('btn-slider-white');
        }
    });
}

function getNextImageNumber(){
    counter.count = counter.count + 1;
    return counter.count % imageCount;
}
