ctrl.startup = function() {
	if (ctrl.detectmob()) 
		ctrl.sel(".footer").addClass('mobile');	
};

ctrl.detectmob = function () {
	var  isMob = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)	|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i);
	
	return isMob;
};