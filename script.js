function getResult() {
    // Get the input values
    var chemistry = parseFloat(document.getElementById("CHEMISTRY").value);
    var physics = parseFloat(document.getElementById("PHYSICS").value);
    var maths = parseFloat(document.getElementById("MATHS").value);
    var english = parseFloat(document.getElementById("ENGLISH").value);
    var hindi = parseFloat(document.getElementById("HINDHI").value);
    
    // Ensure all inputs are numbers and check if any subject is greater than 100
    if (isNaN(chemistry) || isNaN(physics) || isNaN(maths) || isNaN(english) || isNaN(hindi)) {
        alert("Please enter valid numbers for all subjects.");
        return;
    }

    // Check if any subject mark exceeds 100
    if (chemistry > 100 || physics > 100 || maths > 100 || english > 100 || hindi > 100) {
        alert("Marks for each subject must not exceed 100.");
        return;
    }

    // Create an array to track subjects below 35 marks
    var failedSubjects = [];

    if (chemistry < 35) failedSubjects.push("CHEMISTRY");
    if (physics < 35) failedSubjects.push("PHYSICS");
    if (maths < 35) failedSubjects.push("MATHS");
    if (english < 35) failedSubjects.push("ENGLISH");
    if (hindi < 35) failedSubjects.push("HINDHI");

    // If any subject is failed (below 35 marks), show an alert with the failed subjects
    //if (failedSubjects.length > 0) {
       // document.getElementById("Showresult").innerHTML = "Congratulations, you passed! ";
        //("Result Fail: " + failedSubjects.join(", "));
        //document.getElementById("Showresult").innerHTML = "Sorry, you failed.";

       // return;//
    //}

    // Calculate the total
    var total = chemistry + physics + maths + english + hindi;
    var percentage = (total / 500) * 100;

    // Determine the grade based on the percentage
    var grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the results in the HTML
    document.getElementById("total").innerHTML = total;
    document.getElementById("Percentage").innerHTML = percentage.toFixed(2) + '%';
    document.getElementById("Grade").innerHTML = grade;

    // Display pass/fail result
    if (percentage >= 30) {
        document.getElementById("Showresult").innerHTML = "Congratulations, you passed!";
    } else {
        document.getElementById("Showresult").innerHTML = "Sorry, you failed.";
    }
}
