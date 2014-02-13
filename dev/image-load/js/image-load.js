var imageLoad = imageLoad || {};

imageLoad = function(){
    this.init();
};

imageLoad.prototype = {
    init : function(){
        this.imageList();
        this._setEvents();
    },
    
    imageList : function(){
        this.arrImages = [];
        this.arrImages.push('images/test1.jpg');
        this.arrImages.push('images/test2.jpg');
        this.arrImages.push('images/test3.jpg');
        this.nImages = this.arrImages.length;
    },
    
    addImage : function(){
        for(var i = 0; i < this.nImages; i++){
            $('.listPhoto').append('<li><img src="'+this.arrImages[i]+'"></li>');
        }        
    },
    
    _setEvents : function(){
        $('.addImage').on('click', $.proxy(this.addImage, this));
    }
};

var oImageLoad = new imageLoad();