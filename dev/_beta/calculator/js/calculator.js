var calculator = calculator || {};

calculator.active = function(){
    this.init();
};

calculator.active.prototype = {
    init : function(){
        this.elInput();
        this.addition();
        this._setEvent();
    },

    elInput : function(){
        this.nInput = document.querySelector('input');
        this.btnAddition = document.querySelector('#addition');
        this.btnSubtraction = document.querySelector('#subtraction');
        this.btnMultiplication = document.querySelector('#multiplication');
        this.btnDivision = document.querySelector('#division');
        this.btnRoot = document.querySelector('#root');
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

    _setEvent : function(){
        this.btnAddition.addEventListener('click', function(){
            alert(this.nInput);
        });
    }
};

var oCalculator = new calculator.active();
