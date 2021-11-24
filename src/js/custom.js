$('.js-search-icon-main').click(()=>{
  $('.js-search').addClass('search--active');
});

$('.js-search-icon-close').click(()=>{
  $('.js-search').removeClass('search--active');
});

$('.js-toggle').click(() => {
  $('.menu').toggleClass('menu--active');
});

$('.js-menu-close').click(() => {
  $('.menu').toggleClass('menu--active');
});

$('.js-login-button').click(() => {
  $('.modal').toggleClass('modal--active');
});

$('.js-modal-icon').click(() => {
  $('.modal').toggleClass('modal--active');
});

$('.js-ipn-classification-wrapper-header').click(function(){
  $(this).parent().toggleClass('ipn-classification__wrapper--open')
});

$('.js-bet-nav-link').click(function () {
  $(this).toggleClass('bet-nav__link--active')
  $('.js-bet-menu').toggleClass('bet-menu--active')
})

$('.js-bet-menu-icon').click(function () {
  $('.js-bet-menu').removeClass('bet-menu--active')
})

$('.js-bet-sport-category').click(function () {
  $(this).parent().toggleClass('bet-sport--active')
  $('.js-ipn-classification').toggleClass(`ipn-classification--${$(this).parent()[0].classList[2].split('--')[1]}`)
})

$('.js-bet-sport-favourite').click(function () {
  $(this).toggleClass('bet-sport__favourite--active')
})
