$(function(){var t=new Snap("#leftCable"),e=new Snap("#rightCable"),n,a,i,l,f=t.circle(260,234,8),c=e.circle(260,234,8),o=$("#topSpark"),r=$("#botSpark");i=function(){n(t.select("#leftCablePath"),f,0,5e3,a,0)},a=function(){n(e.select("#rightCablePath"),c,1200,9500,i,1)},n=function(t,e,n,a,i,l){if(1===l)var f=0;else var f=Snap.path.getTotalLength(t);Snap.animate(n,f,function(n){var a=Snap.path.getPointAtLength(t,n);e.attr({cx:a.x,cy:a.y,fill:"#3498db"})},a,mina.easein,function(){e.attr({fill:"none"}),o.fadeIn(80).delay(30).fadeOut(80,function(){r.fadeIn(80).delay(30).fadeOut(300,function(){i()})})})},setTimeout(i,100)});