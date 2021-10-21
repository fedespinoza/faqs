const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const textUno = document.querySelector('.text-uno');
const textDos = document.querySelector('.text-dos');
const textTres = document.querySelector('.text-tres');
const textCuatro = document.querySelector('.text-cuatro');
const textCinco = document.querySelector('.text-cinco');
const textIconUno = document.querySelector('.text-and-icon1');
const textIconDos = document.querySelector('.text-and-icon2');
const textIconTres = document.querySelector('.text-and-icon3');
const textIconCuatro = document.querySelector('.text-and-icon4');
const textIconCinco = document.querySelector('.text-and-icon5');
const iconUp1 = document.querySelector('.up1');
const iconDown1 = document.querySelector('.down1');
const iconUp2 = document.querySelector('.up2');
const iconDown2 = document.querySelector('.down2');
const iconUp3 = document.querySelector('.up3');
const iconDown3 = document.querySelector('.down3');
const iconUp4 = document.querySelector('.up4');
const iconDown4 = document.querySelector('.down4');
const iconUp5 = document.querySelector('.up5');
const iconDown5 = document.querySelector('.down5');


first.addEventListener('click', () =>{
    textUno.classList.toggle('oculto');
    textIconUno.classList.toggle('bold')
    iconUp1.classList.toggle('active')
    iconDown1.classList.toggle('active')
})

second.addEventListener('click', () =>{
    textDos.classList.toggle('oculto');
    textIconDos.classList.toggle('bold')
    iconUp2.classList.toggle('active')
    iconDown2.classList.toggle('active')
})

third.addEventListener('click', () =>{
    textTres.classList.toggle('oculto');
    textIconTres.classList.toggle('bold')
    iconUp3.classList.toggle('active')
    iconDown3.classList.toggle('active')
})

fourth.addEventListener('click', () =>{
    textCuatro.classList.toggle('oculto');
    textIconCuatro.classList.toggle('bold')
    iconUp4.classList.toggle('active')
    iconDown4.classList.toggle('active')
})

fifth.addEventListener('click', () =>{
    textCinco.classList.toggle('oculto');
    textIconCinco.classList.toggle('bold')
    iconUp5.classList.toggle('active')
    iconDown5.classList.toggle('active')
})

function close(e){
    e.style.display = 'none';
}