"use strict";function initCounter(){$(".container-rating div span").each(function(){var t=this,e=+$(this).text(),i=($(this).text(0),Math.floor(e/30)),a=0,n=setInterval(function(){a+=i,$(t).text(a),e<a&&($(t).text(e),clearInterval(n))},40)})}$(window).resize(function(){$(window).width()<=906?($(".nav-header").hide(),$(".btn-mobile").show()):($(".nav-header").show(),$(".btn-mobile").hide(),$(".container-mobile").hide(),$(".btn-mobile").removeClass("active"))}),$(".btn-mobile").on("click",function(t){$(".btn-mobile").toggleClass("active"),$(".container-mobile").slideToggle(300)});var $target=$(".scrollTop"),offset=.75*$(window).height();function animeScroll(){var t=$(document).scrollTop();$target.each(function(){$(this).offset().top-offset<t?$(this).addClass("animate"):$(this).removeClass("animate")})}function rotateSlide(){var t=$(".section-main > .active"),e=t.next();0==e.length&&(e=$(".section-main > :first")),t.removeClass("active"),e.addClass("active")}rotateSlide(),animeScroll(),$(document).on("scroll",function(){animeScroll()}),$(".section-main > :first").addClass("active"),setInterval(rotateSlide,1e4),$(".active-buttons li button").each(function(){$(this).on("click",function(){$(".active-buttons li button").removeClass("active-btn"),$(this).addClass("active-btn");var t="."+$(this).attr("data-tab");$(".tabmenu-item").addClass("disabled"),$(t).removeClass("disabled")})});