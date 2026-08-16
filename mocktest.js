document.addEventListener("DOMContentLoaded", function () {

    const classSelect = document.getElementById("class-select");
    const subjectSelect = document.getElementById("subjectselect");
    const mcqResult = document.getElementById("mcq-result");


    // Class ke according MCQ data lena
    function getMcqData(selectedClass) {

        if (selectedClass === "10") {
            return mcq10;
        }

        if (selectedClass === "12") {
            return mcq12;
        }

        return null;
    }


    // Subject select hone par Mock Tests dikhana
    subjectSelect.addEventListener("change", function () {

        const selectedClass = classSelect.value;
        const selectedSubject = subjectSelect.value;

        mcqResult.innerHTML = "";

        const classMcq = getMcqData(selectedClass);


        if (!classMcq) {

            mcqResult.innerHTML =
                "<p>No MCQ available.</p>";

            return;
        }


        const tests = classMcq[selectedSubject];


        if (!tests) {

            mcqResult.innerHTML =
                "<p>No Mock Tests available for this subject.</p>";

            return;
        }


        // Test cards dikhana
        Object.keys(tests).forEach(function (testName) {

            const card = document.createElement("div");

            card.className = "mcq-card";


            card.innerHTML = `

                <div class="pdf-icon">
                    📝
                </div>

                <div class="pdf-info">

                    <h3>
                        ${testName.replace("test", "Mock Test ")}
                    </h3>

                    <p>
                        Practice Mock Test
                    </p>

                </div>

                <button
                    class="pdf-btn"
                    data-test="${testName}"
                >
                    Start Test →
                </button>

            `;


            mcqResult.appendChild(card);


            // Test start karna
            const startButton =
                card.querySelector(".pdf-btn");


            startButton.addEventListener("click", function () {

                startTest(
                    tests[testName],
                    selectedSubject
                );

            });

        });

    });


    // Selected test start karna
    function startTest(questions, subject) {

        let currentQuestion = 0;
        let score = 0;


        function showQuestion() {

            mcqResult.innerHTML = "";


            const question = questions[currentQuestion];


            const card = document.createElement("div");

            card.className = "mcq-question";


            card.innerHTML = `

                <h3>
                    ${subject} Mock Test
                </h3>

                <p>
                    Question ${currentQuestion + 1}
                    / ${questions.length}
                </p>

                <h2>
                    ${question.question}
                </h2>

                <div class="mcq-options">

                    ${question.options.map(function (option) {

                        return `
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value="${option}"
                                >
                                ${option}
                            </label>
                        `;

                    }).join("")}

                </div>

                <button id="next-btn">
                    ${
                        currentQuestion === questions.length - 1
                        ? "Submit"
                        : "Next →"
                    }
                </button>

            `;


            mcqResult.appendChild(card);


            document
                .getElementById("next-btn")
                .addEventListener("click", function () {

                    const selected =
                        document.querySelector(
                            'input[name="answer"]:checked'
                        );


                    if (!selected) {

                        alert("Please select an answer.");

                        return;
                    }


                    if (selected.value === question.answer) {

                        score++;

                    }


                    currentQuestion++;


                    if (currentQuestion < questions.length) {

                        showQuestion();

                    } else {

                        showResult();

                    }

                });

        }


        // Result dikhana
        function showResult() {

            mcqResult.innerHTML = `

                <div class="mcq-result">

                    <h2>🎉 Test Completed</h2>

                    <h3>
                        ${subject} Mock Test
                    </h3>

                    <p>
                        Your Score
                    </p>

                    <strong>
                        ${score} / ${questions.length}
                    </strong>
<button id="try-again-btn">Try Again</button>
                </div>
                

            `;
document
        .getElementById("try-again-btn")
        .addEventListener("click", function () {

            currentQuestion = 0;
            score = 0;

            showQuestion();

        });
        }


        showQuestion();

    }
  

});