$(function(){var t=$("#topSpark"),a=$("#botSpark"),e;e=function(){t.fadeIn(80).delay(30).fadeOut(80,function(){a.fadeIn(80).delay(30).fadeOut(300)})},setInterval(e,5e3),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top-80},1e3),!1}})});