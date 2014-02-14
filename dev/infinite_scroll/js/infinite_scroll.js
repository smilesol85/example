// TYPE A
var actionScroll = actionScroll || {};

actionScroll.unlimitScroll = function(){
    this.init();
};

actionScroll.unlimitScroll.prototype = {
    nExpand : 40,
    init : function(){
        this._setHeight();
        this.scroll();
    },
    
    _setHeight : function(nVal){
        $('section').height(nVal);
    },
    
    scroll : function(){
        var oThis = this;
        $(window).scroll(function(){
            if($(window).scrollTop() == $(document).height() - $(window).height()){
                var nHeightSection = $('section').height() + oThis.nExpand;
                oThis._setHeight(nHeightSection);
            }
        });
    }
};

var oUnlimitScroll = new actionScroll.unlimitScroll();

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