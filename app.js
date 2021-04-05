let signInBtn = document.getElementById('sign-in');
let signUpBtn = document.getElementById('sign-up');
let signIn = document.getElementById('sign-in-form');
let signUp = document.getElementById('sign-up-form');
let closeBtn1 = document.getElementById('close1');
let closeBtn2 = document.getElementById('close2');


let imgBtn = document.getElementsByTagName('img');
let fullImages = document.getElementById('full-images');
let fullImg = document.getElementById('image');
let closeBtn3 = document.getElementById('close3');

signInBtn.addEventListener('click', function () {
    signIn.style.display = 'block';
});
closeBtn1.addEventListener('click', function () {
    signIn.style.display = 'none';
});
signUpBtn.addEventListener('click', function () {
    signUp.style.display = 'block';
});
closeBtn2.addEventListener('click', function () {
    signUp.style.display = 'none';
});



for ( let i = 0; i < imgBtn.length; i++){
    imgBtn[i].addEventListener('click', function() {
        fullImages.style.display = 'block';
        fullImg.src = this.src;
    });
};
closeBtn3.addEventListener('click', function () {
    fullImages.style.display = 'none';
});
