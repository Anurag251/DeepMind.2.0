$(document).ready(function () {
  $('.itemBox').not('.ML').hide('1000');
});

$(document).ready(function () {
  $('.what-we-do ul li').hover(function () {
    const value = $(this).attr('data-filters');
    if (value == 'all') {
      $('.itemBox').show('1000');
    } else {
      $('.itemBox')
        .not('.' + value)
        .css('display', 'none');

      $('.itemBox')
        .filter('.' + value)
        .css('display', 'block');
    }
  });

  $('.what-we-do ul li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
