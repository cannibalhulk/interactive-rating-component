const rateBox = document.querySelector(".rate-box");

const thankBox = document.querySelector(".thank-box");

const rating = document.getElementById('rating');

const btn = document.querySelectorAll('.btn');

const btnSubmit= document.getElementById('btn-submit');

btnSubmit.addEventListener('click',()=>{
    thankBox.classList.remove('hidden');
    rateBox.style.display='none';
})

btn.forEach(elem=>{
    elem.addEventListener('click',()=>{
        rating.innerHTML=elem.innerHTML;
    })
})