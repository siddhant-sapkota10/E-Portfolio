"use strict";
const modal = document.querySelector(".modal-abt-us")
const overlay = document.querySelector(".overlay")
const btnOpenModal = document.querySelector(".show-abt-modal")
const btnCloseModal = document.querySelector(".modal-abt-us-close")

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
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}