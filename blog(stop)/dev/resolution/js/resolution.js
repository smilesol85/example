var checkResolution = checkResolution || {};

checkResolution = function(){
    this.init();
};

checkResolution.prototype = {
    init : function(){
        this.getResolution();
        this.resize();
    },
    
    getResolution : function(){
        this.screenWidth = screen.width;
        this.screenHeight = screen.height;
        
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        
        this.outerWidth = window.outerWidth;
        this.outerHeight = window.outerHeight;
        
        this.setResolution();
    },
    
    setResolution : function(){
        $('.lead').html('');
        $('.lead').append('monitor : '+this.screenWidth+'x'+this.screenHeight+'<br>');
        $('.lead').append('inner browser : '+this.innerWidth+'x'+this.innerHeight+'<br>');
        $('.lead').append('outer browser : '+this.outerWidth+'x'+this.outerHeight+'<br>');
    },
    
    resize : function(){
        var oThis= this;
        window.addEventListener('resize', function(event){
            oThis.getResolution();
        });
    }
};

var oCheckResolution = new checkResolution();