const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index = 0
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
// slider----
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imageactive = document.querySelector('.active')
    imageactive.classList.remove("active")
}
function imgAuto () {
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto, 5000)