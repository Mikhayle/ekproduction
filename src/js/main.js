$(document).ready(function () {

	$(window).on('load', function () {
		$(`.wrap-loader`).fadeOut();
	})

//Плавный скролл
	$(function(){
		$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
			return false;
		});
	});

	//фиксация header

$(window).bind(`scroll`, function () {
	if ($(window).scrollTop() > 0) {
		$(`.header`).addClass(`scrolled`);
	} else if ($(window).scrollTop() > 0 && $(`.header__burger`).hasClass(`active`)){
				$(`.active`).removeClass(`dark`);
	}	else {
		$(`.header`).removeClass(`scrolled`);
		$(`.active`).addClass(`dark`);
	}
});

	if ($(`.header-burger`).hasClass(`.active`)) {
		$(this).addClass(`dark`);
	};


//Поворот карточки Свадьба

	//Клик по кнопке подробнее
	$(`.btn-wedding-js`).on('click', function() {
		$(`.front-wedding-js`).toggleClass('front-card_rotate-js');
		$(`.back-wedding-js`).toggleClass('back-card_rotate-js');
		$(`.wedding-card-js`).addClass(`price__item_scale`);
	});
// Клик по обратной стороне карточки
	$(`.back-wedding-js`).on(`click`, function () {
		$(`.front-wedding-js`).toggleClass('front-card_rotate-js');
		$(this).toggleClass('back-card_rotate-js');
		$(`.wedding-card-js`).removeClass(`price__item_scale`);
	})

	//Поворот карточки День рождения
	//Клик по кнопке подробнее
	$(`.btn-hb-js`).on('click', function() {
		$(`.front-hb-js`).toggleClass('front-card_rotate-js');
		$(`.back-hb-js`).toggleClass('back-card_rotate-js');
		$(`.hb-card-js`).addClass(`price__item_scale`);
	});
// Клик по обратной стороне карточки
	$(`.back-hb-js`).on(`click`, function () {
		$(`.front-hb-js`).toggleClass('front-card_rotate-js');
		$(`.back-hb-js`).toggleClass('back-card_rotate-js');
		$(`.hb-card-js`).removeClass(`price__item_scale`);
	})

	//Поворот карточки Реклама
	//Клик по кнопке подробнее
	$(`.btn-event-js`).on('click', function() {
		$(`.front-event-js`).toggleClass('front-card_rotate-js');
		$(`.back-event-js`).toggleClass('back-card_rotate-js');
		$(`.event-card-js`).addClass(`price__item_scale`);
	});
// Клик по обратной стороне карточки
	$(`.back-event-js`).on(`click`, function () {
		$(`.front-event-js`).toggleClass('front-card_rotate-js');
		$(`.back-event-js`).toggleClass('back-card_rotate-js');
		$(`.event-card-js`).removeClass(`price__item_scale`);
	});

//Поворот карточки Love Story
	//Клик по кнопке подробнее
	$(`.btn-insta-js`).on('click', function() {
		$(`.front-insta-js`).toggleClass('front-card_rotate-js');
		$(`.back-insta-js`).toggleClass('back-card_rotate-js');
		$(`.insta-card-js`).addClass(`price__item_scale`);
	});
// Клик по обратной стороне карточки
	$(`.back-insta-js`).on(`click`, function () {
		$(`.front-insta-js`).toggleClass('front-card_rotate-js');
		$(`.back-insta-js`).toggleClass('back-card_rotate-js');
		$(`.insta-card-js`).removeClass(`price__item_scale`);
	});

	$(`.header__burger`).click(function (event) {
		$(`.header__burger, .header__menu`).toggleClass(`active`)
		$(this).toggleClass(`dark`);
	})

	if ($(window).width() < 767) {
		$(`.nav__link-js`).click(function (event) {
			$(`.header__burger, .header__menu`).toggleClass(`active`);
		})
	}

});

