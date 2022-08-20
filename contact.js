"use strict";

const modal = document.querySelector(".modal");
const btnOpenModal = document.getElementById("contact-btn")
const btnCloseModal = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")

btnOpenModal.addEventListener("click", function(){
    openModal()
})

btnCloseModal.addEventListener("click", function(){
    closeModal()
})

const openModal = function(){
modal.classList.remove("hidden")
overlay.classList.remove("hidden")
}

const closeModal = function(){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");  
}

document.addEventListener("keydown", function (e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal()
    }
})
