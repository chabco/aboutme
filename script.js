let pages = document.querySelector('.pages');
let page = document.querySelectorAll('.page');

page.forEach(function(thePage){
    thePage.addEventListener('mouseenter', function() {
        page[0].classList.remove('hoverin');
        thePage.classList.add('hoverin');
    });
    thePage.addEventListener('mouseleave', function() {
        thePage.classList.remove('hoverin');
        page[0].classList.add('hoverin');
    });
});