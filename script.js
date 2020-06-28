
document.addEventListener('scroll', ()=>{
    let navbar =document.querySelector('#navbar')

    if(window.scrollY>120){
        navbar.classList.add('bg-navbarDesktop')
    }else{
        navbar.classList.remove('bg-navbarDesktop')
    }
})

let menuToggler = document.querySelector("#menuToggler") 
let menu = document.querySelector("#menu")

menuToggler.addEventListener('click' ,()=>{
    menu.classList.toggle('open')
})

/* SCRIPT PAGINA PRODOTTI */


let btnAdd = document.querySelectorAll('.btnAdd')
let cart = document.querySelector('#cart')
let favAdd = document.querySelectorAll('.favAdd')
let heart = document.querySelector('#heart')
let favs = document.querySelectorAll('.favorite')
cart.innerText = 0
heart.innerText = 0


btnAdd.forEach( e=> {
    e.addEventListener('click', ()=>{
        cart.innerText++
    })
})

favAdd.forEach( e=> {
    e.addEventListener('click', ()=>{
        heart.innerText++
    })
})

favs.forEach(e => e.addEventListener('click', ()=>{
       e.classList.toggle('text-custom')
})
)


let rangePrice = document.querySelector('#rangePrice')
let rangeShow = document.querySelector('#rangeShow')

rangePrice.addEventListener('input', ()=>{
    rangeShow.innerText = rangePrice.value + "€"
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function isValid(stringa){
    return stringa.split("").length>=5 && stringa.split("").some(e=>Number(e))
}

let pwd = document.querySelector("#inputPassword")
let pwdCheck =document.querySelector("#checkPass") 

pwdCheck.addEventListener('click',()=>{
    console.log(pwd.value)
    isValid(pwd.value)
})

pwdCheck.addEventListener('click',()=>{
    event.preventDefault()
})

let pwdStatus = document.querySelector("#pwdStatus")

pwd.addEventListener('keyup',()=>{
    console.log(pwd.value)
    if(isValid(pwd.value)) {
        pwdStatus.classList.remove("text-danger")
        pwdStatus.classList.add("text-success")
        pwdStatus.innerText="OK"
    }else{
        pwdStatus.classList.add("text-danger")
        pwdStatus.innerText="Password non valida"
    }
})