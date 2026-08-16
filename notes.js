document.addEventListener("DOMContentLoaded", function () {

    const classSelect = document.getElementById("class-select");
    const subjectSelect = document.getElementById("subjectselect");
    const notesResult = document.getElementById("notes-result");


    subjectSelect.addEventListener("change", function () {

        const selectedClass = classSelect.value;
        const selectedSubject = subjectSelect.value;

        notesResult.innerHTML = "";


        let classNotes = null;

        if (selectedClass === "10") {
            classNotes = notes10;
        }

        if (selectedClass === "12") {
            classNotes = notes12;
        }


        if (!classNotes) {
            notesResult.innerHTML =
                "<p>No notes available.</p>";
            return;
        }


        const chapters = classNotes[selectedSubject];


        if (!chapters || chapters.length === 0) {
            notesResult.innerHTML =
                "<p>No notes available for this subject.</p>";
            return;
        }


        chapters.forEach(function (chapter) {

            const card = document.createElement("div");

            card.className = "pdf-card";


            card.innerHTML = `
                <div class="pdf-icon">
                    📄
                </div>

                <div class="pdf-info">
                    <h3>${chapter.title}</h3>
                    <p>Complete Chapter Notes</p>
                </div>

                <a 
                    href="${chapter.pdf}" 
                    class="pdf-btn"
                    target="_blank"
                >
                    View PDF →
                </a>
            `;


            notesResult.appendChild(card);

        });

    });

});