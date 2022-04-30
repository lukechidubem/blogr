const menuRemove = document.querySelector('.glyphicon');
const menuAdd = document.querySelector('.material-icons');
const menu = document.querySelector('.nav-container');

menuAdd.addEventListener('click', function () {
    menu.style.display = "flex";
    menuRemove.style.display = "block";
    menuAdd.style.display = "none";

})

menuRemove.addEventListener('click', function () {
    menu.style.display = "none";
    menuRemove.style.display = "none";
    menuAdd.style.display = "block";
    
    // if ((window).width() < 900 ) {
    //     menu.style.display = "none";
        
    // }
    // menu.style.display = "none";
    // menuRemove.style.display = "none";
    // menuAdd.style.display = "block";

})