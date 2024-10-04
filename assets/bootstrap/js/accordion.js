

const buttons = document.getElementsByClassName("accordion-button");


for (let i = 0; i < buttons.length; i++) {

    buttons[i].onclick = function () {

        this.classList.toggle("active");


        let content = this.parentElement.nextElementSibling;


        if (content.style.display === "block") {
            // Hide the content
            content.style.display = "none";
        } else {
            // show the content
            content.style.display = "block";
        }
    };
}

