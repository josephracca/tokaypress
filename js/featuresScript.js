
// alert('Hi!');
let exampleModal = document.getElementById('inject');
let modalTrigger1 = document.getElementById('modalTrigger1');
let modalTrigger2 = document.getElementById('modalTrigger2');
let modalTrigger3 = document.getElementById('modalTrigger3');
let modalTrigger4 = document.getElementById('modalTrigger4');
let modalTrigger5 = document.getElementById('modalTrigger5');
let modalTrigger6 = document.getElementById('modalTrigger6');




modalTrigger1.addEventListener('click', function () {
  loadModal('../pages/modal1.html');
});

modalTrigger2.addEventListener('click', function () {
  loadModal('../pages/modal2.html');
});

modalTrigger3.addEventListener('click', function () {
  loadModal('../pages/modal3.html');
});

modalTrigger4.addEventListener('click', function () {
  loadModal('../pages/modal4.html');
});

modalTrigger5.addEventListener('click', function () {
  loadModal('../pages/modal5.html');
});

modalTrigger6.addEventListener('click', function () {
  loadModal('../pages/modal6.html');
});






// MODAL XMLHTTPREQUEST
function loadModal(url) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      exampleModal.innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  //imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

// MESSAGE BUTTON
let messageBtn = document.getElementById("messageBtn");
let inputName = document.getElementById('userFullName');
let inputEmail = document.getElementById('userEmail');
let inputMessage = document.getElementById('exampleFormControlTextarea1');


console.log(inputName.value);
messageBtn.addEventListener("click", function () {
 if (inputName.value != "" && inputEmail.value !="" && inputEmail.value!= ""){
    messageBtn.classList.add('messageSent');
    messageBtn.innerText = "MESSAGE SENT";
    alert("Thank you, "+ inputName.value+"! We will contact you soon at the email you provided: ("+inputEmail.value+").");
  
    messageBtn.innerHTML = '<b>MESSAGE SENT! </b><i class="far fa-paper-plane pl-1"></i>';
 } else{
    alert("Uh oh! Please fill out all fields before sending.");
 }
});

