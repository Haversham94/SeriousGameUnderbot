/**
 * Navigation Ajax - http://www.webinventif.fr/navigation-sans-rechargement-de-page-via-javascript-jquery/
 * 
 * Copyright (c) 2008 Julien Chauvin (webinventif.fr)
 * Licensed under the Creative Commons License:
 * http://creativecommons.org/licenses/by/3.0/
 *
 * Date: 2008-03-13
 */

/* Fonction chargement ajax avec animation, 
 * vous pouvez modifier la vitesse (slow, fast, 1500, ...) 
 * et l'effet (slideUp, fadeOut, ...) */
function ajax_page_advanced(ele,msg,url){
	$(ele).slideUp("fast", function(){
		$(ele).html(msg).show("fast", function(){
			$(ele).load(url+" "+ele, null, function(){
				var tampon = $(ele).html();
				$(ele).html(msg).hide("fast",function(){
					$(ele).html(tampon);
					$(ele).slideDown("fast");
				});
			});
		});
	});
}
/* Fonction de chargement ajax simple */
function ajax_page(ele,msg,url){
	$(ele).html(msg).load(url+" "+ele);
}
/* Fonction de chargement ajax simple, mais avec un delai pour la demo */
function ajax_page_delayed(ele,msg,url){
	$(ele).html(msg);
	setTimeout(function(){
		$(ele).load(url+" "+ele);
	}, 0)
}

/* Une fois la page chargée */
$(document).ready(function(){
	//Application du chargement ajax avec animation sur les liens ayant une classe "wajax"
	$("a.wajax").click(function(){
		ajax_page_advanced('#swithcontenu','<p style="text-align: center"></p>',this.href);
		return false;
	});
	//Application du chargemetn ajax simple sur tous les liens se trouvant dans le conteneur "menu1"
	$("#menu1 a").click(function(){
		ajax_page_delayed('#swithcontenu','<p style="text-align: center">Chargement ...</p>',this.href);
		return false;
	});
});