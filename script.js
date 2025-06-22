const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

// input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const charCount = document.getElementById("charCount");
const successMsg = document.getElementById("successMsg");

// Error fields
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Live character count
messageInput.addEventListener("input", () => {
    charCount.textContent = messageInput.value.length;
});

// Real-time validation
nameInput.addEventListener("input", () => {
    // ternary operator (kind of a if else)
    // condition ? expressionIfTrue : expressionIfFalse;
    nameError.textContent = nameInput.value.trim() === "" ? "Name is required" : "";
});

// if (x>10) {
//     y = "Greater";                   
// } else {
//     y = "Lesser";
// }

// in ternary operator
// y = (x>10) ? "Greater" : "Lesser"

emailInput.addEventListener("input", () => {           // when input field changes,
    const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
    emailError.textContent = emailValid ? "" : "Enter a valid email";
});

messageInput.addEventListener("input", () => {
    messageError.textContent = messageInput.value.trim() === "" ? "Feedback is required" : "";
});

form.addEventListener("submit", function (e) {
    e.preventDefault();    // preventing refresh

    // Basic validation
    let isValid = true;

    // trim() - trimming white spaces 
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // regex pattern: for email validation
    const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
    if (!emailValid) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        messageError.textContent = "Feedback is required";
        isValid = false;
    }

    if (!isValid) return;

    // Append feedback as <li> elements
    const li = document.createElement("li");
    li.textContent = `${nameInput.value} (${emailInput.value}): ${messageInput.value}`;
    feedbackList.appendChild(li);
    li.scrollIntoView({ behavior: "smooth" });

    // Clear form
    form.reset();
    charCount.textContent = "0";

    // Show success message
    successMsg.textContent = "✅ Feedback submitted successfully!";
    setTimeout(() => (successMsg.textContent = ""), 3000);
});
