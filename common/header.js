var isie=(/msie/i).test(navigator.userAgent); //ie 
var isie6=(/msie 6/i).test(navigator.userAgent); //ie 6 
var isie7=(/msie 7/i).test(navigator.userAgent); //ie 7 
var isie8=(/msie 8/i).test(navigator.userAgent); //ie 8 
var isie9=(/msie 9/i).test(navigator.userAgent); //ie 9 
var isfirefox=(/firefox/i).test(navigator.userAgent); //firefox 
var isapple=(/applewebkit/i).test(navigator.userAgent); //safari,chrome 
var isopera=(/opera/i).test(navigator.userAgent); //opera 
var isios=(/(ipod|iphone|ipad)/i).test(navigator.userAgent);//ios 
var isipad=(/(ipad)/i).test(navigator.userAgent);//ipad 
var isandroid=(/android/i).test(navigator.userAgent);//android 

if(isie8 || isie7 || isie6){
	alert('Your browser is not supprted.');
	var lnkIE = '<a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Get Internet Explorer of new version</a>';
	var lnkCHROME = '<a href="https://www.google.com/intl/ko/chrome/browser/">Get Chrome of new version</a>';
	var lnkFIREFOX = '<a href="http://www.mozilla.or.kr/ko/firefox/new/">Get Firefox of new version</a>'
	document.body.innerHTML = 'Download borwser<br>' + lnkIE + '<br>' + lnkCHROME + '<br>' + lnkFIREFOX;
}

var sHeader = '';
sHeader += '<div class="navbar navbar-inverse">';
sHeader += '<div class="navbar-inner">';
sHeader += '<div class="container">';
sHeader += '<h1 class="brand">'+sTitle+'</h1>';
sHeader += '</div>';
sHeader += '</div>';
sHeader += '</div>';
$('#wrap').prepend(sHeader);