var selectBox = selectBox || {};

selectBox.control = function(){
    this.init();
};

selectBox.control.prototype = {
    init : function(){
        this.getWelSelect();
        this.setOption();
        this.addOption();
        this.actOption();
    },
    
    getWelSelect : function(){
        this.welSelect = $('#selectBox');
    },
    
    setOption : function(){
        this.arrOption = [];
        this.arrOption.push('option1');
        this.arrOption.push('option2');
        this.arrOption.push('option3');
    },
    
    addOption : function(){
       for(var nOption = 0; nOption < this.arrOption.length; nOption++){
           this.welSelect.append('<option value="'+nOption+'">'+this.arrOption[nOption]+'</option>');
       }
    },
    
    actOption : function(){
        var oThis = this;
        this.welSelect.change(function(){
            oThis.getVal = $(this).val();
        });
        $('.getVal').on('click',function(){
            alert(oThis.getVal);
        });
    }
};

var oSelectBox = new selectBox.control();