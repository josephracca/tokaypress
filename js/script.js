// alert('Hi!');

let exampleModal = document.getElementById("exampleModal");
let modalTrigger = document.getElementById("modalTrigger");

//clears innerHTML
// let closeModalTop

modalTrigger.addEventListener("click", function () {
  //this needs to open the model with the correct content
  console.log("text");

  loadModal("../pages/modal1.html");
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
  xhttp.open("GET", url, true);
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

messageBtn.addEventListener("click", function () {
  alert("Message Sent!");
  messageBtn.classList.add('messageSent');
  messageBtn.innerText="MESSAGE SENT";
  // messageBtn.innerHTML = "<i class="far fa-paper-plane"></i> SEND MESSAGE";"
});
