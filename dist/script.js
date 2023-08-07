// Get the modal and the button that opens it
const modal = document.getElementById("myModal");
const SignUpBtn = document.getElementById("SignUpBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const SignUpDoneBtn = document.getElementById("SignUpDoneBtn");
/* const SignUpMsgBtn = document.getElementById("SignUpMsgBtn"); */
const SignUpMsg = document.getElementById("SignUpMsg");
const signUpForm = document.getElementById("SignUpForm");


// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    SignUpMsg.style.display = "none";
    signUpForm.style.display = "block";
}

function SignUpMessage(e){
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    username.value = "";
    password.value = "";

    signUpForm.style.display = "none";
    SignUpMsg.style.display = "block";

    setTimeout(() => {
        SignUpMsg.style.display = "none";
        // Reset the form and show it again after the message disappears
        signUpForm.style.display = "block";
        modal.style.display = "none";
    }, 1000); // 2 seconds delay

}


// Event listeners for opening and closing the modal
SignUpBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
SignUpDoneBtn.addEventListener("click",e => SignUpMessage(e));
/* SignUpMsgBtn.addEventListener("click",closeModal()); */

// Close the modal if the user clicks outside the modal content
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
