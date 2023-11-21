let box = document.getElementById("box");

/* Funzione lambda */
function changeColor(color) {
    box.classList.forEach(data => {
        if (data.startsWith("bg")) {
            box.classList.remove(data);
        }
    });
    box.classList.add("bg-" + color + "-500");
}

/* Ciclo for */
function changeColor2(color) {
    for (let i = 0; i < box.classList.length; i++) {
        if (box.classList[i].startsWith("bg")) {
            box.classList.remove(box.classList[i]);
        }
    }
    box.classList.add("bg-" + color + "-500");
}

/* RegEx */
function changeColor3(color) {
    let regex = new RegExp("bg-+[a-z]+-500");

    for (let i = 0; i < box.classList.length; i++) {
        if (regex.test(box.classList[i])) {
            box.classList.remove(box.classList[i]);
        }
    }
    box.classList.add("bg-" + color + "-500");
}
