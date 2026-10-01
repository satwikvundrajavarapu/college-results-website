function checkResult() {
    const hallTicket = document.getElementById("hallTicket").value.trim();
    const result = document.getElementById("result");

    if (hallTicket === "") {
        result.innerHTML = "<p class='error'>Please enter your Hall Ticket Number.</p>";
        return;
    }

    if (hallTicket === "23CSE001") {
        result.innerHTML = `
            <h3>Result Found!</h3>
            <img src="meme.jpg" class="meme">
        `;
    } else {
        result.innerHTML = "<p class='error'>Hall Ticket Number not found.</p>";
    }
}