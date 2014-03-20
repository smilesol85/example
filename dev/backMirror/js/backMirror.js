var backMirror = backMirror || {};

backMirror.controlUi = function(){
    this.init();
};

backMirror.controlUi.prototype = {
    init : function(){
        this.el();
        this._setValue();
        this.changeValue();
    },
    
    el : function(){
        this.elFileUpload = $('#control_back_mirror #file_upload');
        this.elMirror = $('#back_mirror');
        this.elWidth = $('#control_back_mirror #width');
        this.elTop = $('#control_back_mirror #top');
        this.elLeft = $('#control_back_mirror #left');
        this.elOpacity = $('#control_back_mirror #opacity');
        this.elBlockNone = $('#control_back_mirror #block_none');
    },
    
    _setValue : function(){
        this.elWidth.val(480);
        this.elTop.val(47);
        this.elLeft.val(12);
        this.elOpacity.val(50);
        this.elBlockNone.attr('checked', true);
        
        this._setWidth(this.elWidth.val());
        this._setTop(this.elTop.val());
        this._setLeft(this.elLeft.val());
        this._setOpacity(this.elOpacity.val() / 100);
    },
    
    _setPreview : function(preview){
        if(preview.files && preview.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e){
                $('#back_mirror img').attr('src', e.target.result);
            }
            reader.readAsDataURL(preview.files[0]);
        }
    },
    
    _setWidth : function(widthValue){
        this.elMirror.find('img').attr('style', 'width:'+widthValue+'px');
    },
    
    _setTop : function(topValue){
        this.elMirror.css('top', topValue+'px');
    },
    
    _setLeft : function(leftValue){
        this.elMirror.css('left', leftValue+'px');
    },
    
    _setOpacity : function(opacityValue){
        this.elMirror.css('opacity', opacityValue);
    },
    
    _setDisplay : function(displayValue){
        if(displayValue == true){
            displayValue = 'block';
        }else{
            displayValue = 'none';
        }
        this.elMirror.css('display', displayValue);
    },
    
    changeValue : function(){
        oThis = this;
        this.elWidth.on('change', function(){
            oThis._setWidth(this.value);
        });
        this.elTop.on('change', function(){
            oThis._setTop(this.value);
        });
        this.elLeft.on('change', function(){
            oThis._setLeft(this.value);
        });
        this.elOpacity.on('change', function(){
            oThis._setOpacity(this.value / 100);
        });
        this.elBlockNone.on('change', function(){
            oThis._setDisplay(this.checked);
        });
        this.elFileUpload.on('change', function(){
            oThis._setPreview(this);
            var getPath = this.value;
            var spliteFileName = this.value.split('\\');
            var nFileName = spliteFileName.length - 1;
            var getFileName = spliteFileName[nFileName];
        });
    }
};