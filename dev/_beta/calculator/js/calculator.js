var calculator = calculator || {};

calculator = function(){
    this.init();
};

calculator.prototype = {
    init : function(){
        this.elInput();
        this.addition();
        this._setEvent();
    },

    elInput : function(){
        this.nInput = document.querySelector('input');
    },

    addition : function(){

    },

    subtraction : function(){

    },

    multiplication : function(){

    },

    division : function(){

    },

    root : function(){

    },

    setEvent : function(){
    }
};

var oCalculator = new calculator();
