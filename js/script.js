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

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    // Get form data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;
    // Process the form data (example: display it in the "info" div)
    const infoDiv = document.querySelector(".info");
    infoDiv.innerHTML = `
        <p><b>Nama:</b> ${name}</p>
        <p><b>Tanggal Lahir:</b> ${dob}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Pesan:</b> ${message}</p>
    `;
    return false; // Prevent traditional form submission
  }
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Check if all required fields are filled
    if (document.getElementById("name").value === "" ||
        document.getElementById("dob").value === "" ||
        !document.querySelector('input[name="gender"]:checked') ||
        document.getElementById("message").value === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }
    // If all fields are filled, you can proceed with form processing here
    // ... (Your existing code to handle form data)
    return false; // Prevent traditional form submission
  }
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    // Get form data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message-box").value;
    
    // Get current time
    const currentTime = new Date().toLocaleString(); // Formats time based on user's locale
    
    // Update the .info div with the submitted data
    const infoDiv = document.querySelector(".info");
    infoDiv.innerHTML = `
        <p><b>Current Time:</b> ${currentTime}</p><br>
        <p><b>Nama:</b> ${name}</p>
        <p><b>Tanggal Lahir:</b> ${dob}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Pesan:</b> ${message}</p>
    `;
    return false; // Prevent traditional form submission
  }