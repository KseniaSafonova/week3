
let textarea = document.getElementById('textarea');

document.addEventListener("DOMContentLoaded", function (event) {
    let restoredTextarea = localStorage.getItem('textarea');

    if (restoredTextarea != null) {
        textarea.innerHTML = restoredTextarea;
    }

    else {
        textarea.innerHTML = '';
    }
})

textarea.oninput = function () {
    localStorage.setItem('textarea', textarea.value);
}





