const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
    mySpan.innerText = '🥰'
});
let n = 0

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
n++
console.log(n)
if(n==5){
    console.log('haidar')
    mySpan.innerText = '😠'
    question.innerHTML = 'DO YOU LOVE ME ????!!!'
}
if(n==10){
    console.log('haidar')
    mySpan.innerText = '😡'
    question.innerHTML = "I'LL KILL YOU!!!"
}
});
var mySpan = document.querySelector('.smile')
