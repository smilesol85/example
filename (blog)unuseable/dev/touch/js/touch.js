var touchScreen = touchScreen || {};

touchScreen.dontTouchMe = function(){
    this.init();
};

touchScreen.dontTouchMe.prototype = {
    init : function(){
        this.getWel();
        this._setEvent();
    },
    
    getWel : function(){
        this.welWindow = $(window);
        this.welContent = $('#content');
    },
    
    touchStart : function(){
        this.welContent.append('touch!!<br>');
    },
    touchIng : function(){
        this.welContent.append('ing!!<br>');
    },
    touchEnd : function(){
        this.welContent.append('end!!<br>');
    },
    
    _setEvent : function(){
        this.welWindow.on('touchstart', $.proxy(this.touchStart, this));
        this.welWindow.on('touchmove', $.proxy(this.touchIng, this));
        this.welWindow.on('touchend', $.proxy(this.touchEnd, this));
    }
};

var oTouchScreen = new touchScreen.dontTouchMe();

// DOM
//var welContent = document.getElementById('content');
//welContent.addEventListener('touchstart', function(){
//    welContent.innerHTML += 'touch start!';
//});
//welContent.addEventListener('touchmove', function(){
//   welContent.innerHTML += '~ing!';
//});
//welContent.addEventListener('touchend', function(){
//    welContent.innerHTML += 'touch end';
//});