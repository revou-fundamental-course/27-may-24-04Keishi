// Ini Javascript

function replaceName(){
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("yourname").innerHTML = name;
} 

replaceName();

const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", InitializeSlider);

function InitializeSlider(){
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}
function showSlide(index) {
    if (index >= slides.length ) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
} console.log()

const inputField = document.getElementById("input");
const result_row = document.getElementById("results");

function insert_result() {
  let input = inputField.value;
  let new_row = document.createElement("td");
  new_row.append(input);
  result_row.appendChild(new_row);
}