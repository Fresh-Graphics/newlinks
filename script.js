const message = document.getElementById("message");
const link = document.getElementById("link");
const messages = document.getElementById("messages");
const links = document.getElementById("links");
const name = document.getElementById("name");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener('click', function validateFunction(){
    if (email.value === "", textarea.value === "", name.value === "") {
        alert("Please Input all the fields");
    } else {
        email.value = "";
        textarea.innerText = "";
        name.value = "";
        alert("Message Sent Sucessfully!")
    }
});
textarea.addEventListener('click', () =>{
    textarea.innerText = "";
})

link.classList.toggle("active");
message.classList.toggle('deactive');

message.addEventListener('click', function messageFunction() {
    link.style.backgroundColor = "ghostwhite";
    link.style.color = "black";
    message.style.backgroundColor = "black"
    message.style.color = "white";
    links.style.display = "none";
    messages.style.display = "flex"

});

link.addEventListener('click', function linkFunction() {
   message.style.backgroundColor = "ghostwhite";
    message.style.color = "black";
    link.style.backgroundColor = "black"
    link.style.color = "white";
    links.style.display = "flex";
    messages.style.display = "none"
})

