navigator.console = console;
var is = getPlatformDetect(), 
	ready = false, 
	loading = false;

document.addEventListener((is.has('mobile') ? 'deviceready' : 'DOMContentLoaded'), ONREADY, false);
window.addEventListener('resize', heightFix, false);

function ONLOAD_WEBVIEW() {}

function ONREADY(event) {
	if(!is.has('android')) console = navigator.console;
	heightFix();
	new FastClick(document.body);
	angular.bootstrap(document.body, ['app']);
}

function getPlatformDetect(callback) {
	var ua = navigator.userAgent;
	var thisis = { types: [] };

	/Mobile\/?/i.test(ua) && thisis.types.push("mobile"),
	/Windows NT/.test(ua) && thisis.types.push("windows"),
	/Macintosh/.test(ua) && thisis.types.push("mac"),
	/WebKit/.test(ua) && thisis.types.push("webkit"),
	/Android/.test(ua) && thisis.types.push("android"),
	(/Chrome/.test(ua) ? thisis.types.push("chrome") : /Safari/.test(ua) && thisis.types.push("safari")),
	/Firefox/.test(ua) && thisis.types.push("firefox"),
	/MSIE/.test(ua) && thisis.types.push("ie ie"+ua.match(/MSIE ([0-9]+)/)[1]),
	/iPhone/.test(ua) && thisis.types.push("iphone ios"+ua.match(/iPhone OS ([0-9_]+)/)[1]),
	/iPad/.test(ua) && thisis.types.push("ipad ios"+ua.match(/iPad OS ([0-9_]+)/)[1]);

	if(/Android/.test(ua)) {
		var verk = ua.match(/Android ((\d+\.)+\d)/)[1].replace(/^(\d)\./, '$1,').replace(/\./, '').replace(/,/,'.')*1000;
		if(verk < 4000) { thisis.types.push('legacy'); }
		if(verk < 3000) { thisis.types.push('andregi'); }
		$('html').addClass('android');
	} else if(/iPhone OS/.test(ua)) {
		var verk = ua.match(/iPhone OS ((\d+_)+\d)/)[1].replace(/^(\d)_/, '$1.').replace(/_/, '')*1000;
		if(verk < 6000) { thisis.types.push('legacy'); thisis.types.push('andregi'); alert('andregi'); }
		$('html').addClass('ios');
	}

	var str = [];
	for(var idx in thisis.types) str.push('ua-' + thisis.types[idx]);
	document.querySelector('html').setAttribute('class', thisis.types.join(' '));

	thisis.has = function(str) {
		for(var idx in this.types) {
			if(this.types[idx] == str) return true;
		}
		return false;
	}
	thisis.search = function(str) {
		for(var idx in this.types) {
			if(new RegExp(str,'i').test(this.types[idx])) return true;
		}
		return false;
	}

	if(callback) callback(thisis);
	return thisis;
}

function heightFix() {
	setTimeout(function() {
		document.body.style.height = '100%';
		var width = document.body.offsetWidth;
		var height = document.body.offsetHeight;
		var el = $('<style type="text/css" id="heightfix-style">');
		var value = '.full-width { max-width: '+width+'px; } .full-height { min-height: '+height+'px; }';
		document.body.style.height = height + 'px';

		var oel = $('style#heightfix-style');
		if(oel.length) {
			oel.text(value);
		} else {
			$('head').append(el.text(value));
		}

		console.log('height: '+height);
	});
}

function fallbackImage(src) {
	return src.replace(/(iphone|android)\/([^@]*)(\@2x)?\.png$/, 'LINEStorePC/$2.png');
}