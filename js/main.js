$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar-inverse');
    if ($(window).scrollTop() >= navbar.height()){
      navbar.addClass('scrolled');
    }else {
      navbar.removeClass('scrolled');
    }
  });
// deal with tabs
$('.tab-switch li').click(function (){
  // add selected class to active link
  $(this).addClass('selected').siblings().removeClass('selected');
  // hide all divs
 $('.tabs-section .tabs-content > div').hide();
  // show div connected with this link
  $($(this).data('class')).show();
  window.console.log($(this).data('class'));
});
});
