function darkMode() {
    const bodyElement = document.body;
    const contentElement = document.getElementsByClassName('content-section');
    const tableElement = document.getElementById('content-table');
    
    

    if (document.getElementById('theme').checked) {
        bodyElement.classList.add('dark-theme');
        for (var i = 0; i < contentElement.length; i++) {
            contentElement[i].classList.add('dark-theme');
        }
        tableElement.classList.add('dark-theme');
    
    }

    else {
        bodyElement.classList.remove('dark-theme');
        for (var i = 0; i < contentElement.length; i++) {
            contentElement[i].classList.remove('dark-theme');
        }
        tableElement.classList.remove('dark-theme');
    }

}

function reset() {
    //reset checkbox due to Firefox not auto resetting checkbox.
    document.getElementById('theme').checked = false;
}


function setLanguage(input) {
    window.location.href = "AQI_" + input + ".html";
    //console.log(input);
}