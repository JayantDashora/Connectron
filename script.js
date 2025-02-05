document.addEventListener("DOMContentLoaded", function () {
    function showPage(page) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(p => p.style.display = "none");
        document.getElementById(page).style.display = "block";
    }

    // Ensure Home is displayed by default
    showPage("home");

    // Add event listener for rating update
    const ratingInput = document.getElementById("rating");
    if (ratingInput) {
        ratingInput.addEventListener("input", function () {
            document.getElementById("rating-value").textContent = this.value;
        });
    }

    // Submit feedback function
    window.submitFeedback = function () {
        const feedback = document.getElementById("student-feedback").value;
        const rating = document.getElementById("rating").value;
        if (feedback) {
            alert(Feedback submitted! Rating: ${rating});
        } else {
            alert("Please provide feedback before submitting.");
        }
    };

    // Make sure all links work
    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showPage(targetPage);
        });
    });
});