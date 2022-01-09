// меню бургер
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//анимация мальчика
    let pos1 = document.querySelector('.boyflex__b1');
    let pos2 = document.querySelector('.boyflex__b2');
    let pos3 = document.querySelector('.boyflex__b3');
    let kirp = document.querySelector('.boyflex__kirp');
    pos1.addEventListener('mouseover', function () { 
        pos1.classList.add('d-none');
        pos2.classList.remove('d-none');
        kirp.classList.add('kirp-anim');
    })
    pos2.addEventListener('click', function () {
        pos2.classList.add('d-none'); 
        pos3.classList.remove('d-none');
        kirp.classList.add('kirp-anim2');
        let boy = document.querySelector('.boy-tr');
        boy.classList.add('boy-animate');
        kirp.classList.add('kirp-anim2');
    });
