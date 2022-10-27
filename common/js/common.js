// FadeIn Animation
jQuery(function () {
	const fadeIn = jQuery('.js-fade-in');
	jQuery(window).on('scroll', function () {
		jQuery(fadeIn).each(function () {
			var offset = jQuery(this).offset().top;
			var scroll = jQuery(window).scrollTop();
			var windowHeight = jQuery(window).height();
			if (scroll > offset - windowHeight + 150) {
				jQuery(this).addClass("js-scroll-in");
			}
		});
	});
});


// Header -------------------------
// Fixed Header スクロールしたら表示
const nav = jQuery('.header');
const offset = nav.offset().top;
const height = nav.innerHeight(); //ヘッダー高さ

jQuery(function(){
	jQuery(window).scroll(function(){
		const scroll = jQuery(this).scrollTop();
		//ヘッダーの高さを超えたらfixedクラスをつける
		if(scroll >= height){
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	})
});


//pageTop
$(function(){
	var topBtn = $('#pTop');
	topBtn.hide();
	var hHeight = $('.header').innerHeight();

	$(window).scroll(function(){
		if ($(this).scrollTop() > hHeight) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
});

// For smartphone------------------
// Humberger Menu
jQuery(function () {
	jQuery('.navToggle').click(function () {
		jQuery(this).toggleClass('active');
		if (jQuery(this).hasClass('active')) {
			jQuery('#js-nav').addClass('active');
		} else {
			jQuery('#js-nav').removeClass('active');
		}
	});
});
