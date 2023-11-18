document.getElementById("submit").addEventListener("click", (event) => generateGradeInputs());
document.getElementById("calculate-grade").addEventListener("click", (event) => calculateGrade());

function generateGradeInputs() {
    document.getElementById("initial-input").style.display = "none";
    let subjectCount = getSubjectCount();
    let container = document.getElementById("container");
    for (let i = 0; i < subjectCount; i++) {
        let label = document.createElement("label");
        label.for = "subject-" + i;
        label.innerHTML = "Subject " + (i + 1) + ": ";
        container.appendChild(label);
        let input = document.createElement("input");
        input.id = "subject-" + i;
        input.type = "number";
        input.name = "Subject " + i;
        container.appendChild(input);
        container.innerHTML += "<br><br>";
    }
    document.getElementById("calculate-grade").style.display = "inline";
}

function calculateGrade() {
    let gradeSum = 0;
    let subjectCount = getSubjectCount();
    for (let i = 0; i < getSubjectCount(); i++) {
        gradeSum += parseInt(document.getElementById("subject-" + i).value);
    }
    let average = gradeSum > 0 ? +((gradeSum / subjectCount).toFixed(2)) : 0;
    let letterGrade = gradeToLetterGrade(average);

    document.getElementById("container").style.display = "none";
    document.getElementById("calculate-grade").style.display = "none";

    document.getElementById("results").innerHTML = "Average Grade: " + average + "<br><br>" + "Letter Grade: " + letterGrade;
}

function getSubjectCount() {
    return document.getElementById("subject-count").value;
}

function gradeToLetterGrade(grade) {
    if (grade >= 70) {
        return "A";
    } else if (grade >= 65) {
        return "A-";
    } else if (grade >= 60) {
        return "B+";
    } else if (grade >= 50) {
        return "B";
    } else if (grade >= 45) {
        return "B-";
    } else if (grade >= 40) {
        return "C";
    } else {
        return "F";
    }
}