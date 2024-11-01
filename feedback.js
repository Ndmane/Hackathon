function submitFeedback() {
    const feedbackInput = document.getElementById("feedback-input");
    const feedbackList = document.getElementById("feedback-list");

    if (feedbackInput.value) {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "feedback-item";
        feedbackDiv.textContent = feedbackInput.value;
        feedbackList.appendChild(feedbackDiv);
        feedbackInput.value = "";
    } else {
        alert("Введите отзыв.");
    }
}
