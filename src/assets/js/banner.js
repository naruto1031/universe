const header = $('.banner');
const headerHeight = header.outerHeight();
var ele = document.getElementById('banner');
var y = ele.scrollTop;
var y = header.scrollTop();

console.log(y);

let beforeScrollTop = 0;
$(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    if((scrollTop > beforeScrollTop) && (scrollTop > headerHeight)) {
        header.addClass('hide');
    }
    else {
        header.removeClass('hide');
    }
    beforeScrollTop = scrollTop;
});