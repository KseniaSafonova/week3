
let select = document.getElementById('select');
// let dark = document.getElementById('darkTheme');
// let light = document.getElementById('lightTheme');



select.addEventListener('change', function () {

    value = this.value

    if (value == 'light') {
        console.log('light');
    }

    else {
        console.log('dark')
    }
    // let block = document.getElementById('block');
    // block.style.backgroundColor = prompt('background color?', 'green');

})




