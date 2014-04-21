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
    
    checkSize : function(){
        $('.listPhoto img').each(function(){
            this.widthImage = $(this).width();
            this.heightImage = $(this).height();
            $(this).parent().append(this.widthImage+'x');
            $(this).parent().append(this.heightImage);
        });
    },
    
    _setEvents : function(){
        $('.addImage').on('click', $.proxy(this.addImage, this));
        $('.checkSize').on('click', $.proxy(this.checkSize, this));
    }
};

var oImageLoad = new imageLoad();