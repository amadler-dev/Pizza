/**
 * set and get cookies
 */

// run 
setCookie();

// set cookie
function setCookie() {
	
	let value = readCookie('toppings'); // check if there is already a cookie and if so get the value
    let url = window.location.href; // get user url
	let param; // parameters from url

	// if there is parameter named topping and if so get it's value.
	if(url.includes('toppings=')) {
		param = url.substring(url.indexOf('=')+1);
	} 

	// if parameter is {toppings}
	else if(url.includes('{toppings}')) {
		if(value == null || value == "") {
			history.replaceState(null, null, "?topping=none");
		}
		else {
			history.replaceState(null, null, "?topping="+value);
		}
		return;		
	} 

	// if parameter
	else {
		return
	}

	// create or update cookie
	document.cookie = "toppings="+param+"; path=/";
}


// get cookie
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}

	return null;
}


// read cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}