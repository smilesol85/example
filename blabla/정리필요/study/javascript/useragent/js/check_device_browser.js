// test code
//var isie=(/msie/i).test(sUserAgent); //ie
//var isie6=(/msie 6/i).test(sUserAgent); //ie 6
//var isie7=(/msie 7/i).test(sUserAgent); //ie 7
//var isie8=(/msie 8/i).test(sUserAgent); //ie 8
//var isie9=(/msie 9/i).test(sUserAgent); //ie 9
//var isfirefox=(/firefox/i).test(sUserAgent); //firefox
//var isapple=(/applewebkit/i).test(sUserAgent); //safari,chrome
//var isopera=(/opera/i).test(sUserAgent); //opera
//var isios=(/(ipod|iphone|ipad)/i).test(sUserAgent);//ios
//var isipad=(/(ipad)/i).test(sUserAgent);//ipad
//var isandroid=(/android/i).test(sUserAgent);//android
//if(isios || isipad) enableFlash = false;

var checkUserAgent = checkUserAgent || {};

checkUserAgent = function(){
    this.init();
};

checkUserAgent.prototype = {
    sUserAgent : navigator.userAgent.toLowerCase(),

    init : function(){
        this.addArrUserAgent();
        this.checkUserAgent();
    },

    addArrUserAgent : function(){
        this.arrUserAgent = [];

        // window
        this.arrUserAgent.push('windows');

        // apple
        this.arrUserAgent.push('iphone', 'ipod', 'ipad', 'macintosh');

        // android
        this.arrUserAgent.push('android');

        // blackberrt
        this.arrUserAgent.push('blackberrt');

        // nexus
        this.arrUserAgent.push('nexus');

        // kindle
        this.arrUserAgent.push('kindle');

        // browser
        this.arrUserAgent.push('chrome', 'safari', 'applewebkit', 'firefox', 'msie', 'msie 6', 'msie 7', 'msie 8', 'msie 9', 'msie 10');
    },

    checkUserAgent : function(){
        $('body').attr('data-useragent', this.sUserAgent);
        for(var nUserAgent in this.arrUserAgent){
            if(this.sUserAgent.match(this.arrUserAgent[nUserAgent])){
                $('body').addClass(this.arrUserAgent[nUserAgent]);
            }
        }
    }
};

var oCheckUserAgent = new checkUserAgent();
