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
        switch(window.orientation){
            case 0: 
                // document.getElementById("orient_css").href = "css/iphone_portrait.css";
                this.elContent.html += '0 <br>';
                break;
            case -90: 
                // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                this.elContent.html += '-90 <br>';
                break;
            case 90: 
                // document.getElementById("orient_css").href = "css/iphone_landscape.css";
                this.elContent.html += '+90 <br>';
                break;
        }
    }
};

var oOrient = new orient.check();