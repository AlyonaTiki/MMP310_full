const submitBut = document.getElementById("submit");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const boroughSelect = document.getElementById("borough");
//console.log(submitBut);

submitBut.onclick = function(event) {
//    console.log(nameInput.value);
//    console.log(bioInput.value);
//    console.log(boroughSelect.value);
//    console.log(this);
//    console.log("clicked");
    const message = document.createElement("p");event
    message.textContent = "Hello, " 
        + nameInput.value 
        + " from "
        + boroughSelect.value 
        + " welcome to my Website";
    document.body.appendChild(message);
}
