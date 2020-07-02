
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


var header = 1;

function header_change_max() {
    $('.header').css('background','url(../images/header2.png)');
    $('.header').css('background-size','cover');
    $('.header').css('background-position','center');
    $('.bottom_navigation__point-colorless').css('background-color','#757575');
    $('.bottom_navigation__point-active-colorless').css('background-color','rgba(221, 221, 221, 0.2)');
    $(".nav-left__number-1").html("02")
    $(".nav-left__number-2").html("01")
    $(".header__name_building").html("Жилой комплекс КЛУБНЫЙ ДОМ")
    $(".header__main_text").html("Это две строчки<br>текста на семь слов")
    $(".location__text").html("Киев, переулок Радистов, 40")
    

}

function header_change_min() {
    $('.header').css('background','url(../images/rezidens.png)');
    $('.header').css('background-size','cover');
    $('.header').css('background-position','center');
    $('.bottom_navigation__point-colorless').css('background-color','rgba(221, 221, 221, 0.2)');
    $('.bottom_navigation__point-active-colorless').css('background-color','#757575');
    $(".nav-left__number-1").html("01")
    $(".nav-left__number-2").html("02")
    $(".header__name_building").html("Жилой комплекс КЛАБ РЕЗИДЕНС")
    $(".header__main_text").html("Квартиры уже<br>в продаже!")
    $(".location__text").html("Киев, переулок Радистов, 14а")
}

gt=1;

function gallery_change_pre() {
    if(gt % 2 !== 0){
        gt++
        gallery_change_min()
    }
    else {
        gt++
        gallery_change_max()
    }

    gd=1;

    if(gd==1) {
        gallery_nav_change_1()
    }
    
    else if(gd==2){
        gallery_nav_change_2()
    }
    
    else if(gd==3){
        gallery_nav_change_3()
    }
    
    else if(gd==4){
        gallery_nav_change_4()
    }
    
    else if(gd==5){
        gallery_nav_change_5()
    }
}

function gallery_change_max() {
    $('.gallery-bottom__name_building').html('КЛАБ РЕЗИДЕНС');
    $('.gallery-bottom__name_building').css('color','#212224');
    $('.gallery-bottom__name_building-active').html('КЛУБНЫЙ ДОМ');
    $('.gallery-bottom__name_building-active').css('color','#A68E52');
    
}

function gallery_change_min() {
    $('.gallery-bottom__name_building').html('КЛУБНЫЙ ДОМ');
    $('.gallery-bottom__name_building').css('color','#A68E52');
    $('.gallery-bottom__name_building-active').html('КЛАБ РЕЗИДЕНС');
    $('.gallery-bottom__name_building-active').css('color','#212224');
}

gd=1;

if(gd==1) {
    gallery_nav_change_1()
}

else if(gd==2){
    gallery_nav_change_2()
}

else if(gd==3){
    gallery_nav_change_3()
}

else if(gd==4){
    gallery_nav_change_4()
}

else if(gd==5){
    gallery_nav_change_5()
}

function gallery_nav_change_max() {
    if(gd<5) {
        gd++
    }
   
    if(gd==1) {
        gallery_nav_change_1()
    }

    else if(gd==2){
        gallery_nav_change_2()
    }

    else if(gd==3){
        gallery_nav_change_3()
    }

    else if(gd==4){
        gallery_nav_change_4()
    }

    else if(gd==5){
        gallery_nav_change_5()
    }
    
}

function gallery_nav_change_min() {
    if(gd>1) {
        gd--
    }
    

    if(gd==1) {
        gallery_nav_change_1()
    }

    else if(gd==2){
        gallery_nav_change_2()
    }

    else if(gd==3){
        gallery_nav_change_3()
    }

    else if(gd==4){
        gallery_nav_change_4()
    }

    else if(gd==5){
        gallery_nav_change_5()
    }
}

function gallery_nav_change_1() {
    gd=1;
    $('.gallery-bottom__photo-1').css('height','103px');
    $('.gallery-bottom__photo-1').css('width','166px');
    $('.gallery-bottom__photo-1').css('bottom','47px');
    $('.gallery-bottom__photo-1').css('top','0');
    $('.gallery-bottom__photo-2').css('height','74px');
    $('.gallery-bottom__photo-2').css('width','119px');
    $('.gallery-bottom__photo-2').css('bottom','0');
    $('.gallery-bottom__photo-2').css('top','29px');
    $('.gallery-bottom__photo-3').css('height','74px');
    $('.gallery-bottom__photo-3').css('width','119px');
    $('.gallery-bottom__photo-3').css('bottom','0');
    $('.gallery-bottom__photo-3').css('top','29px');
    $('.gallery-bottom__photo-4').css('height','74px');
    $('.gallery-bottom__photo-4').css('width','119px');
    $('.gallery-bottom__photo-4').css('bottom','0');
    $('.gallery-bottom__photo-4').css('top','29px');
    $('.gallery-bottom__photo-5').css('height','74px');
    $('.gallery-bottom__photo-5').css('width','119px');
    $('.gallery-bottom__photo-5').css('bottom','0');
    $('.gallery-bottom__photo-5').css('top','29px');

    $('.gallery-main_photo').css('background','url(../images/gallery1.svg)');
    $('.gallery-main_photo').css('background-size','cover');
    $('.gallery-main_photo').css('background-position','center');

    $('.bottom_navigation__point-1').css('background-color','#A68E52');
    $('.bottom_navigation__point-2').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-3').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-4').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-5').css('background-color','#DDDDDD');
}

function gallery_nav_change_2() {
    $('.gallery-bottom__photo-1').css('height','74px');
    $('.gallery-bottom__photo-1').css('width','119px');
    $('.gallery-bottom__photo-1').css('bottom','0');
    $('.gallery-bottom__photo-1').css('top','29px');
    $('.gallery-bottom__photo-2').css('height','103px');
    $('.gallery-bottom__photo-2').css('width','166px');
    $('.gallery-bottom__photo-2').css('bottom','47px');
    $('.gallery-bottom__photo-2').css('top','0');
    $('.gallery-bottom__photo-3').css('height','74px');
    $('.gallery-bottom__photo-3').css('width','119px');
    $('.gallery-bottom__photo-3').css('bottom','0');
    $('.gallery-bottom__photo-3').css('top','29px');
    $('.gallery-bottom__photo-4').css('height','74px');
    $('.gallery-bottom__photo-4').css('width','119px');
    $('.gallery-bottom__photo-4').css('bottom','0');
    $('.gallery-bottom__photo-4').css('top','29px');
    $('.gallery-bottom__photo-5').css('height','74px');
    $('.gallery-bottom__photo-5').css('width','119px');
    $('.gallery-bottom__photo-5').css('bottom','0');
    $('.gallery-bottom__photo-5').css('top','29px');

    $('.gallery-main_photo').css('background','url(../images/gallery2.svg)');
    $('.gallery-main_photo').css('background-size','cover');
    $('.gallery-main_photo').css('background-position','center');

    $('.bottom_navigation__point-1').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-2').css('background-color','#A68E52');
    $('.bottom_navigation__point-3').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-4').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-5').css('background-color','#DDDDDD');
}

function gallery_nav_change_3() {
    $('.gallery-bottom__photo-1').css('height','74px');
    $('.gallery-bottom__photo-1').css('width','119px');
    $('.gallery-bottom__photo-1').css('bottom','0');
    $('.gallery-bottom__photo-1').css('top','29px');
    $('.gallery-bottom__photo-2').css('height','74px');
    $('.gallery-bottom__photo-2').css('width','119px');
    $('.gallery-bottom__photo-2').css('bottom','0');
    $('.gallery-bottom__photo-2').css('top','29px');
    $('.gallery-bottom__photo-3').css('height','103px');
    $('.gallery-bottom__photo-3').css('width','166px');
    $('.gallery-bottom__photo-3').css('bottom','47px');
    $('.gallery-bottom__photo-3').css('top','0');
    $('.gallery-bottom__photo-4').css('height','74px');
    $('.gallery-bottom__photo-4').css('width','119px');
    $('.gallery-bottom__photo-4').css('bottom','0');
    $('.gallery-bottom__photo-4').css('top','29px');
    $('.gallery-bottom__photo-5').css('height','74px');
    $('.gallery-bottom__photo-5').css('width','119px');
    $('.gallery-bottom__photo-5').css('bottom','0');
    $('.gallery-bottom__photo-5').css('top','29px');

    $('.gallery-main_photo').css('background','url(../images/gallery2.svg)');
    $('.gallery-main_photo').css('background-size','cover');
    $('.gallery-main_photo').css('background-position','center');

    $('.bottom_navigation__point-1').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-2').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-3').css('background-color','#A68E52');
    $('.bottom_navigation__point-4').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-5').css('background-color','#DDDDDD');
}

function gallery_nav_change_4() {
    $('.gallery-bottom__photo-1').css('height','74px');
    $('.gallery-bottom__photo-1').css('width','119px');
    $('.gallery-bottom__photo-1').css('bottom','0');
    $('.gallery-bottom__photo-1').css('top','29px');
    $('.gallery-bottom__photo-2').css('height','74px');
    $('.gallery-bottom__photo-2').css('width','119px');
    $('.gallery-bottom__photo-2').css('bottom','0');
    $('.gallery-bottom__photo-2').css('top','29px');
    $('.gallery-bottom__photo-3').css('height','74px');
    $('.gallery-bottom__photo-3').css('width','119px');
    $('.gallery-bottom__photo-3').css('bottom','0');
    $('.gallery-bottom__photo-3').css('top','29px');
    $('.gallery-bottom__photo-4').css('height','103px');
    $('.gallery-bottom__photo-4').css('width','166px');
    $('.gallery-bottom__photo-4').css('bottom','47px');
    $('.gallery-bottom__photo-4').css('top','0');
    $('.gallery-bottom__photo-5').css('height','74px');
    $('.gallery-bottom__photo-5').css('width','119px');
    $('.gallery-bottom__photo-5').css('bottom','0');
    $('.gallery-bottom__photo-5').css('top','29px');

    $('.gallery-main_photo').css('background','url(../images/gallery2.svg)');
    $('.gallery-main_photo').css('background-size','cover');
    $('.gallery-main_photo').css('background-position','center');

    $('.bottom_navigation__point-1').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-2').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-3').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-4').css('background-color','#A68E52');
    $('.bottom_navigation__point-5').css('background-color','#DDDDDD');
}

function gallery_nav_change_5() {
    $('.gallery-bottom__photo-1').css('height','74px');
    $('.gallery-bottom__photo-1').css('width','119px');
    $('.gallery-bottom__photo-1').css('bottom','0');
    $('.gallery-bottom__photo-1').css('top','29px');
    $('.gallery-bottom__photo-2').css('height','74px');
    $('.gallery-bottom__photo-2').css('width','119px');
    $('.gallery-bottom__photo-2').css('bottom','0');
    $('.gallery-bottom__photo-2').css('top','29px');
    $('.gallery-bottom__photo-3').css('height','74px');
    $('.gallery-bottom__photo-3').css('width','119px');
    $('.gallery-bottom__photo-3').css('bottom','0');
    $('.gallery-bottom__photo-3').css('top','29px');
    $('.gallery-bottom__photo-4').css('height','74px');
    $('.gallery-bottom__photo-4').css('width','119px');
    $('.gallery-bottom__photo-4').css('bottom','0');
    $('.gallery-bottom__photo-4').css('top','29px');
    $('.gallery-bottom__photo-5').css('height','103px');
    $('.gallery-bottom__photo-5').css('width','166px');
    $('.gallery-bottom__photo-5').css('bottom','47px');
    $('.gallery-bottom__photo-5').css('top','0');

    $('.gallery-main_photo').css('background','url(../images/gallery2.svg)');
    $('.gallery-main_photo').css('background-size','cover');
    $('.gallery-main_photo').css('background-position','center');

    $('.bottom_navigation__point-1').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-2').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-3').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-4').css('background-color','#DDDDDD');
    $('.bottom_navigation__point-5').css('background-color','#A68E52');
}

function gallery_nav_start() {
    gd=1;

    if(gd==1) {
        gallery_nav_change_1()
    }
    
    else if(gd==2){
        gallery_nav_change_2()
    }
    
    else if(gd==3){
        gallery_nav_change_3()
    }
    
    else if(gd==4){
        gallery_nav_change_4()
    }
    
    else if(gd==5){
        gallery_nav_change_5()
    }
}

function request() {
    $('.request').css('display','block');
}

function request__off() {
    $('.request').css('display','none');
}

/*
position: relative;
			bottom: 47px;
            top: 0;
           */