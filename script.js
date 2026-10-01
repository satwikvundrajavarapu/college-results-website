function checkResult() {

    let hallTicket =
        document.getElementById("hallTicket").value.trim();

    let result =
        document.getElementById("result");

    if (hallTicket === "23CSE001") {

        result.innerHTML =
            "<h3>Result Found</h3>" +
            "<p><b>Student Name:</b> Satwik</p>" +
            "<p><b>Course:</b> Computer Engineering</p>" +
            "<p><b>Semester:</b> 2nd Semester</p>" +
            "<p><b>Result:</b> PASS</p>";

    } else {

        result.innerHTML =
            "<p>❌ Hall Ticket Number not found.</p>";
    }
}