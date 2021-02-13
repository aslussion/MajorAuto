document.addEventListener('DOMContentLoaded', function(){
  //burger
	var burger = document.querySelector('.j-burger');
	burger.onclick = function(){
		this.classList.toggle('hamburger_active');
	}

	//slider
	var loopedCnt = 5;
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: loopedCnt,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      touchRatio: 0.2,
      loop: true,
      loopedSlides: loopedCnt, 
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
});