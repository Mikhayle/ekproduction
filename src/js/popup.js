$(document).ready(function () {

	function disableScroll()
	{
		$('html, body').on('mousewheel', function(){
			return false;
		});
	};

	function enableScroll() {
		$('html, body').off('mousewheel');
	};

	$('.close-form, .btn_after').on('click', function(){
		$('.popup-container_call-back, .popup-container_feedback').fadeOut(400, enableScroll);
		$('.popup_call-back, .popup_feedback').removeClass('popup-active');
	});

	$('.btn-submit').on('click', function(){
		$('.modal-header, .modal-body, .modal-footer').hide();
		$('.modal-after').fadeIn();
	});

	$('.btn_after').on('click', function(){
		$('.modal-header, .modal-body, .modal-footer').show(900);
		$('.modal-after').hide(1000);
	});

	$('.btn-service-js').on('click', function(){
		$('.popup-container_feedback').fadeIn(400, disableScroll);
		$('.popup_feedback').addClass('popup-active');
		$('.modal-header > .modal-title').html(`Заказать услугу`);
		$('label[for="comment"]').html(`Комментарий`);
		$('.form-check, label[for="type-of-connect"]').show();
		$('.download-foto').hide();
	});

	$('.popup-container_feedback').on('click', function(event){
		if (event.target === this) {
			$(this).fadeOut(400, enableScroll);
			$('.popup_feedback').removeClass('popup-active');
		}
	});

	$('.btn-feedback').on('click', function () {
		$('.popup-container_feedback').fadeIn(400, disableScroll);
		$('.popup_feedback').addClass('popup-active');
		$('.modal-header > .modal-title').html(`Оставить отзыв`);
		$('label[for="comment"]').html(`Текст отзыва`);
		$('.form-check, label[for="type-of-connect"]').hide();
		$('.download-foto').show();

	})
})


$(document).ready(function () {
	$('.phone').usPhoneFormat({
		format: '(xxx) xxx-xxxx',
	});
});