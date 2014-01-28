var orient = orient || {};

orient.check = function(){
    this.init();
};

orient.check.prototype = {
    elContent : $('#content'),
    
    init : function(){
        this.checkOrient();
    },
    
    checkOrient : function(){
        var sWrite = '';
        $(window).bind('orientationchange', function(e){
            switch(window.orientation){
                case 0: 
                    // document.getElementById("orient_css").href = "css/iphone_portrait.css";
                    sWrite = '0';
                    break;
                case -90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    sWrite = '-90';
                    break;
                case 90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    sWrite = '+90';
                    break;
            }
            this.elContent.html(sWrite);
        });
    }
};

var oOrient = new orient.check();