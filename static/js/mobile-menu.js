jQuery(document).ready(function(e){jQuery(".menu>ul").addClass("main-list"),jQuery("body").addClass("menu-canvas-off"),jQuery("body").prepend('<div class="mobile-menu"></div>'),jQuery(".main-list").clone().appendTo(".mobile-menu"),jQuery(".header .header-social").clone().appendTo(".mobile-menu"),jQuery(".menu")
,jQuery(".header .site-logo").clone().appendTo(".mobile-menu"),jQuery(".mobile-menu .site-logo").insertBefore(".mobile-menu .main-list"),jQuery(".mobile-menu ul.main-list > li").find("ul").before('<span class="dropdown"><i class="lni-chevron-down"></i><i class="lni-chevron-right"></i></div>'),jQuery(".mobile-menu").prepend('<div class="cross"><span class="layer one">&nbsp;</span><span class="layer two">&nbsp;</span></div>'),jQuery(".header .site-logo").find("ul").before('<span class="dropdown"><i class="fa fa-angle-down"></i><i class="fa fa-angle-right"></i></div>'),jQuery(".header .menu>ul").after('<div class="toggle-mobile"><span class="layer one">&nbsp;</span><span class="layer two">&nbsp;</span><span class="layer three">&nbsp;</span></div>'),jQuery(".dropdown").click(function(e){jQuery(this).toggleClass("open"),jQuery(this).next("ul").slideToggle()}),jQuery(document).ready(function(e){var n=!0;jQuery(".toggle-mobile").click(function(){jQuery(".mobile-menu").toggleClass("show-menu"),jQuery(".wrapper").addClass("move-to-right"),jQuery("body").addClass("menu-canvas"),n=!1}),jQuery(".mobile-menu").click(function(){n=!1})
,jQuery("html,.mobile-menu>ul li a,.cross,.site-logo a").click(function(){n&&(jQuery(".mobile-menu").removeClass("show-menu"),jQuery(".wrapper").removeClass("move-to-right"),jQuery("body").removeClass("menu-canvas")),n=!0})})})
.ready(function(e) {
         var n = !0;
         jQuery(".toggle-mobile").click(function() {
             jQuery(".mobile-menu").toggleClass("show"), jQuery(".site-overlay").toggleClass("overlay-show"),jQuery(".toggle-mobile").toggleClass("open"), n = !1
         }), jQuery(".mobile-menu").click(function() {
             n = !1
         }), jQuery("html,.site-overlay,.mobile-menu li a").click(function() {
             n && (jQuery(".mobile-menu").removeClass("show"),jQuery(".toggle-mobile").removeClass("open"),jQuery(".site-overlay").removeClass("overlay-show")), n = !0
         })
 jQuery(".cross").click(function(){
    jQuery(".toggle-mobile").removeClass("open");
});
})