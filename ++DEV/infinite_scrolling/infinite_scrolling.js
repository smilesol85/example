// TYPE A
var scrollTest = {};

scrollTest.unlimitScroll = function(){
    this.init();
};

scrollTest.unlimitScroll.prototype = {
    nHeight : $(window).height(),
    init : function(){
        this._setElements();
        this._setEvents();
    },
    _setElements : function(nVal){
        if(nVal){
            nSelfHeight = nVal;
        }else{
            nSelfHeight = this.nHeight;
        }
        $('section').height(nSelfHeight);
    },
    _setEvents : function(){
        // scrolling
        $(window).scroll(function(){
            if($(window).scrollTop() == $(document).height() - $(window).height()){
                var nHeightSection = $('section').height() + 40;
                $('section').height(nHeightSection);
            }
        });
    },
};

var oUnlimitScroll = new scrollTest.unlimitScroll();

// When resizing the browser scroll initialization
$(window).resize(function(){
    nHeight = $(window).height();
    scrollTest.unlimitScroll.prototype._setElements(nHeight);
});

// TYPE B
/*
function getDocHeight() {
    var doc = document;
    return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    );
}

jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        if(jQuery(window).scrollTop() == getDocHeight() - jQuery(window).height()) {
    }
    });
});
*/