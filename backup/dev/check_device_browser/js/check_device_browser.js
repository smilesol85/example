var checkUserAgent = checkUserAgent || {};
                
checkUserAgent = function(){
    this.init();
};

checkUserAgent.prototype = {
    sUserAgent : navigator.userAgent.toLowerCase(),
    
    init : function(){
        alert(this.sUserAgent);
        this.addArrDevice();
        this.checkDevice();
    },
    
    addArrDevice : function(){
        this.arrDevice = [];
        
        // window
        this.arrDevice.push('windows');
        
        // apple
        this.arrDevice.push('iphone', 'ipod', 'ipad', 'macintosh');
        
        // android
        this.arrDevice.push('android');
        
        // blackberrt
        this.arrDevice.push('blackberrt');
        
        // nexus
        this.arrDevice.push('nexus');
        
        // kindle
        this.arrDevice.push('kindle');
        
        // browser
        this.arrDevice.push('chrome', 'safari', 'applewebkit', 'firefox', 'msie', 'msie 6', 'msie 7', 'msie 8', 'msie 9', 'msie 10');
    },
    
    checkDevice : function(){
        for(var nDevice in this.arrDevice){
            if(this.sUserAgent.match(this.arrDevice[nDevice])){
                $('body').addClass(this.arrDevice[nDevice]);
                alert($('body').attr('class'));
            }
        }
    }
};

var oCheckUserAgent = new checkUserAgent();


//                var isie=(/msie/i).test(sUserAgent); //ie
//                var isie6=(/msie 6/i).test(sUserAgent); //ie 6
//                var isie7=(/msie 7/i).test(sUserAgent); //ie 7
//                var isie8=(/msie 8/i).test(sUserAgent); //ie 8
//                var isie9=(/msie 9/i).test(sUserAgent); //ie 9
//                var isfirefox=(/firefox/i).test(sUserAgent); //firefox
//                var isapple=(/applewebkit/i).test(sUserAgent); //safari,chrome
//                var isopera=(/opera/i).test(sUserAgent); //opera
//                var isios=(/(ipod|iphone|ipad)/i).test(sUserAgent);//ios
//                var isipad=(/(ipad)/i).test(sUserAgent);//ipad
//                var isandroid=(/android/i).test(sUserAgent);//android
//                if(isios || isipad) enableFlash = false;