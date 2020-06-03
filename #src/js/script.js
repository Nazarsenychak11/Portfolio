// @@include('supportWebp.js')
// @@include('test.js')

$(document).ready(function () {
    $(window).scroll(function (event) {
        let s = $(this).scrollTop()
        let w = $(this).outerWidth()
        let h = $('.content').outerHeight()
        let h_b = $('.parallax').outerHeight()
        let p = s / h * 100
        let p_b = s / h_b * 100
        let opacity = 1 - 1 / 100 * p_b

        let zoom_1 = 1 + (w / 10000 * p_b)
        let zoom_2 = 1 + (w/5000000*p)
        let zoom_3 = 1+ (w*0.000005*p_b)
        let zoom_4 = 1+ (w*0.00001*p_b)
        let hr = w/1500*p_b
        let hr_2 = w/2000*p_b

        $('.parallax__fog').css('transform', `scale(${zoom_1})`)

        $('.parallax__fog').css('opacity', opacity)

        $('.parallax_mountain_1').css('transform', `scale(${zoom_2})`)



        $('.parallax_mountain_2').css('transform', `translate3d(${hr}px,0,0) scale(${zoom_3})`)
        $('.parallax_mountain_3').css('transform', `translate3d(${hr_2}px,0,0) scale(${zoom_4})`)
   
    })
})