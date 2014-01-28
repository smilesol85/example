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
        $(window).bind('orientationchange', function(e){
            switch(window.orientation){
                case 0: 
                    // document.getElementById("orient_css").href = "css/iphone_portrait.css";
                    // this.elContent.html += '0 <br>';
                    alert('0');
                    break;
                case -90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    // this.elContent.html += '-90 <br>';
                    alert('-90');
                    break;
                case 90: 
                    // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                    // this.elContent.html += '+90 <br>';
                    alert('+90');
                    break;
            }
        });
    }
};

var oOrient = new orient.check();