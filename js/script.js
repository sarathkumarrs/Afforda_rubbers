function resize(){

}

$(document).ready(function(){
	resize();
});
$(document).ready(function(){
	// googlemap
	function myMap() {
		var mapProp= {
		  center:new google.maps.LatLng(51.508742,-0.120850),
		  zoom:5,
		};
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}


	$('.spot-slick').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: true,
		slidesToShow: 1,
		prevArrow: false,
		nextArrow: false,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.test-content').slick({
		dots: true,
		infinite: false,
		speed: 2000,
		autoplay: true,
		slidesToShow: 1,
		//   slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$(function () {
		$(".hover1").click(function (e) {
			let src = $(this).attr("data-src");
			console.log(src, "src-----");
			var html = `<img src="${src}" alt="Image" />`
			console.log(html, "html-----");
			$('#modal .img-cont').html(html)
			e.preventDefault();
			$('.modal1').fadeIn('slow');
		});
	});
	$(function () {
		$(".closebtn").click(function (e) {
			e.preventDefault();
			$('.gallery-modals').fadeOut('slow');
		});
	});
	
	
});
