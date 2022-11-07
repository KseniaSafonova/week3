
let text = document.getElementById('text');
let darkThemeButton = document.getElementById('darkThemeButton');
let lightThemeButton = document.getElementById('lightThemeButton');
let block = document.getElementById('block');

let backgroundLight = '#F5F5F5';
let textColorLight = '#191970';

let backgroundDark = '#2F4F4F';
let textColorDark = '#DCDCDC';

document.addEventListener("DOMContentLoaded", function (event) {

    let restoredBackgroundColor = localStorage.getItem('backgroundColor');
    let restoredTextColor = localStorage.getItem('textColor');
    let restoredLightButtonVisibility = localStorage.getItem('lightButtonVisibility');
    let restoredDarkButtonVisibility = localStorage.getItem('darkButtonVisibility');

    if (restoredBackgroundColor != null && restoredTextColor != null && restoredLightButtonVisibility != null && restoredDarkButtonVisibility != null) {
        block.style.backgroundColor = restoredBackgroundColor;
        block.style.color = restoredTextColor;
        lightThemeButton.style.display = restoredLightButtonVisibility;
        darkThemeButton.style.display = restoredDarkButtonVisibility;
    }

    else { //светлая тема по умолчанию
        block.style.backgroundColor = backgroundLight;
        block.style.color = textColorLight;
        lightThemeButton.style.display = 'none';
        darkThemeButton.style.display = 'block';
    }
})

darkThemeButton.addEventListener('click', function () {
    block.style.backgroundColor = backgroundDark;
    block.style.color = textColorDark;
    lightThemeButton.style.display = 'block';
    darkThemeButton.style.display = 'none';

    localStorage.setItem('backgroundColor', backgroundDark);
    localStorage.setItem('textColor', textColorDark);
    localStorage.setItem('lightButtonVisibility', 'block');
    localStorage.setItem('darkButtonVisibility', 'none');
})

lightThemeButton.addEventListener('click', function () {
    block.style.backgroundColor = backgroundLight;
    block.style.color = textColorLight;
    lightThemeButton.style.display = 'none';
    darkThemeButton.style.display = 'block';

    localStorage.setItem('backgroundColor', backgroundLight);
    localStorage.setItem('textColor', textColorLight);
    localStorage.setItem('lightButtonVisibility', 'none');
    localStorage.setItem('darkButtonVisibility', 'block');
})






