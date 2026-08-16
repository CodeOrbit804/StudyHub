document.addEventListener("DOMContentLoaded", function () {

    const classSelect = document.getElementById("class-select");
    const subjectSelect = document.getElementById("subjectselect");
    const spResult = document.getElementById("sp-result");


    subjectSelect.addEventListener("change", function () {

        const selectedClass = classSelect.value;
        const selectedSubject = subjectSelect.value;

        spResult.innerHTML = "";


        let classsp = null;

        if (selectedClass === "10") {
            classsp = sp10;
        }

        if (selectedClass === "12") {
            classsp = sp12;
        }


        if (!classsp) {
            spResult.innerHTML =
                "<p>No Sample Paper available.</p>";
            return;
        }


        const papers = classsp[selectedSubject];


        if (!papers || papers.length === 0) {
            spResult.innerHTML =
                "<p>No Sample Paper available for this subject.</p>";
            return;
        }


        papers.forEach(function (paper) {

            const card = document.createElement("div");

            card.className = "pdf-card";


            card.innerHTML = `
                <div class="pdf-icon">
                    📄
                </div>

                <div class="pdf-info">
                    <h3>${paper.set} Paper</h3>
                    <p>Previous Sample Question Paper</p>
                </div>

                <a 
                    href="${paper.pdf}" 
                    class="pdf-btn"
                    target="_blank"
                >
                    View PDF →
                </a>
            `;


            spResult.appendChild(card);

        });

    });

});