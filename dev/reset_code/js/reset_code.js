var reset = reset || {};
var nRmAttr = 0, nRmTag = 0;

reset.code = function(){
    this.init();
};

reset.code.prototype = {
    init : function(){
        this._initVals();
        this._setEvents();
    },
    _initVals : function(){
        this.btnRmAttr = $('.add_rm_attr');
        this.btnRmTag = $('.add_rm_tag');
        this.btnReset = $('.btn_reset');
    },
    _setCheck : function(){
        this.fHref = $('#reset_href').is(':checked');
        this.fScript = $('#rm_script_tag').is(':checked');
        this.fTarget = $('#rm_target_blank').is(':checked');
        this.fOnclick = $('#rm_onclick').is(':checked');
        this.fOnerror = $('#rm_onerror').is(':checked');
        this.fOnload = $('#rm_onload').is(':checked');
        this.fnocr = $('#rm_nocr').is(':checked');
        this.fUnderbar = $('#rm_underbar').is(':checked');
    },
    _setReg : function(){
        //this.regScript = /<script.*[\r\n].*[\r\n]<\/script>/gi;
        //this.regTarget = /target=["'][^"']+["']/gi;
        //this.regOnclick = /onclick=["'].*["']/gi;
        //this.regOnerror = /onerror=["'].*["']/gi;
        //this.regOnload = /onload=["'].*["']/gi;
        //this.regNocr = /nocr=["'].*["']/gi;
        this.regHref = /href=["'][^"']+["']/gi;
        this.regScript = /<script/gi;
        this.regScript2 = /<\/script/gi;
        this.regTarget = /target=/gi;
        this.regOnclick = /onclick=/gi;
        this.regOnerror = /onerror=/gi;
        this.regOnload = /onload=/gi;
        this.regNocr = /nocr=/gi;

        /* space */
        this.regUnderbar = /[^\w]_[^blank]\w+/gi;
        this.regBlank = /\s[>]/gi;
        this.regBlank2 = /\s["]/gi;
        this.regBlank3 = /\s[']/gi;
    },
    _setEleRmAttr : function(sValue){
        if(!sValue){
        }else{
            $('.user_rm_attr').append('<li><input type="checkbox" id="rm_user_attr'+nRmAttr+'" checked="checked" disabled="disabled"><label for="rm_user_attr'+nRmAttr+'">'+sValue+'</label></li>');
            nRmAttr++;
        }
    },
    _setEleRmTag : function(sValue){
        if(!sValue){
        }else{
            $('.user_rm_tag').append('<li><input type="checkbox" id="rm_user_tag'+nRmTag+'" checked="checked" disabled="disabled"><label for="rm_user_tag'+nRmTag+'">'+sValue+'</label></li>');
            nRmTag++;
        }
    },
    _setEvents : function(){
        var oSelf = this;

        // 제거하고 싶은 속성 입력
        this.btnRmAttr.on('click',function(){
            var sRemove = prompt('제거하고 싶은 속성 입력 : ','');
            oSelf._setEleRmAttr(sRemove);
        });

        // 제거하고 싶은 태그 입력
        this.btnRmTag.on('click',function(){
            var sRemove = prompt('제거하고 싶은 태그 입력 : ','');
            oSelf._setEleRmTag(sRemove);
        });

        // 체크 여부 확인 후 코드 수정
        this.btnReset.on('click',function(){
            var sReplace = '';
            oSelf._setCheck();
            oSelf._setReg();

            // script
            oSelf.fScript ? sReplace = $('.before').val().replace(oSelf.regScript,'<div data-rm="rmself"').replace(oSelf.regScript2,'</div') : sReplace = $('.before').val();
            $('.before').val(sReplace);
            
            // target
            oSelf.fTarget ? sReplace = $('.before').val().replace(oSelf.regTarget,'data-rmself=') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // onclick
            oSelf.fOnclick ? sReplace = $('.before').val().replace(oSelf.regOnclick,'data-rmself=') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // onerror
            oSelf.fOnerror ? sReplace = $('.before').val().replace(oSelf.regOnerror,'data-rmself=') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // onload
            oSelf.fOnload ? sReplace = $('.before').val().replace(oSelf.regOnload,'data-rmself=') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // nocr
            oSelf.fnocr ? sReplace = $('.before').val().replace(oSelf.regNocr,'data-rmself=') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // underbar class & id
            oSelf.fUnderbar ? sReplace = $('.before').val().replace(oSelf.regUnderbar,'') : sReplace = $('.before').val();
            $('.before').val(sReplace);

            // 공백 제거
            sReplace = $('.before').val().replace(oSelf.regBlank,'>').replace(oSelf.regBlank2,'"').replace(oSelf.regBlank3,'\'');
            $('.before').val(sReplace);

            var nAttr = $('.user_rm_attr li').length;
            for(var i = 0; i < nAttr; i++){
                var sRmAttr = $('#rm_user_attr'+i+' + label').text();
                var regRmAttr = new RegExp(sRmAttr+'=','gi');
                sReplace = $('.before').val().replace(regRmAttr,'data-rmself=');
                $('.before').val(sReplace);
            }

            var nTag = $('.user_rm_tag li').length;
            for(var j = 0; j < nTag; j++){
                var sRmTag = $('#rm_user_tag'+j+' + label').text();
                var regRmTag = new RegExp('<'+sRmTag,'gi');
                sReplace = $('.before').val().replace(regRmTag,'<'+sRmTag+' data-rm="rmself"');
                $('.before').val(sReplace);
            }

            $('.render').html(sReplace);

            // href
            oSelf.fHref ? sReplace = $('.render a').attr('href','#') : '';

            $('[data-rm]').remove();
            $('.render *').removeAttr('data-rmself');
            sReplace = $('.render').html();
            $('.before').val(sReplace);
        });
    }
};