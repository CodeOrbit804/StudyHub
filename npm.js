const subjects = {
  10: ["Hindi", "English", "Maths", "Science", "Social Science", "Sanskrit"],
  12: ["Hindi", "English", "Physics", "Chemistry", "Maths", "Biology", "Accountancy", "Business Studies", "Economics", "History", "Political Science", "Geography"]
};

const classSelect = document.getElementById("class-select");
const subjectSelect = document.getElementById("subjectselect");

classSelect.addEventListener("change", function () {

  const selectedClass = classSelect.value;

  subjectSelect.innerHTML =
    '<option value="" selected disabled>Select Subject</option>';

  subjects[selectedClass].forEach(function(subject) {

    const option = document.createElement("option");

    option.value = subject;
    option.textContent = subject;

    subjectSelect.appendChild(option);

  });

});

