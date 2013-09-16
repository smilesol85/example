var reset = reset || {};
var nRmAttr = 0, nRmTag = 0;

reset.Code = function(){
    this.init();
};

reset.Code.prototype = {
    init : function(){
        this._initVals();
        this._setEvents();
    },
    _initVals : function(){

        this.nRmAttr = 0;
        this.nRmTag = 0;
        // this.welBtnRmAttr
        // this.elBtn
        this.btnRmAttr = $('.add_rm_attr');
        this.btnRmTag = $('.add_rm_tag');
        this.btnReset = $('.btn_reset');
    },
    _setCheck : function(){


    var aWel = $('.user_remove').find(':checked');

    var aSelectedItem = [];

    for(var i = 0; i < aWel.length; i++){
        aSelectedItem.push(aWel[i].attr('data-name'));
    }

    // aSelectedItem
    ['script', 'iframe'];



return;

        // this.welHref
        this.fHref = $('#reset_href').is(':checked');
        this.fScript = $('#rm_script_tag').is(':checked');
        this.fIframe = $('#rm_iframe_tag').is(':checked');
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

        // this.rxHtml    
        this.regHtml = /html/gi;
        this.regHead = /head>/gi;
        this.regBody = /body/gi;
        this.regLink = /link/gi;

        this.regHtml2 = /htmlS/gi;
        this.regHead2 = /headS>/gi;
        this.regBody2 = /bodyS/gi;
        this.regLink2 = /LinkS/gi;
        
        this.regLink3 = /<\/link>/gi;
        this.regHref = /href=["'][^"']+["']/gi;
        this.regScript = /<script/gi;
        this.regScript2 = /<\/script/gi;
        this.regNoScript = /<noscript/gi;
        this.regNoScript2 = /<\/noscript/gi;
        this.regTarget = /target=/gi;
        this.regOnclick = /onclick=/gi;
        this.regOnerror = /onerror=/gi;
        this.regOnload = /onload=/gi;
        this.regNocr = /nocr=/gi;

        this.regCdata = /\/\/<\!\[CDATA\[/gi;
        this.regCdata2 = /\/\/\]\]>>/gi;

        /* space */
        this.regUnderbar = /_[^blank]\w+/gi;
        this.regBlank = /\s[>]/gi;
        this.regBlank2 = /\s["]/gi;
        this.regBlank3 = /\s[']/gi;
    },

    // 속성 추가
    _setEleRmAttr : function(sValue){
        if(sValue !=='' && sValue !== undefined && sValue !== null){
        
            $('.user_rm_attr').append('<li><input type="checkbox" id="rm_user_attr'+nRmAttr+'" checked="checked" disabled="disabled"><label for="rm_user_attr'+nRmAttr+'">'+sValue+'</label></li>');
            nRmAttr++;
        }
    },

    // 태그 추가
    _setEleRmTag : function(sValue){
        if(!sValue){
        }else{
            $('.user_rm_tag').append('<li><input type="checkbox" id="rm_user_tag'+nRmTag+'" checked="checked" disabled="disabled"><label for="rm_user_tag'+nRmTag+'">'+sValue+'</label></li>');
            nRmTag++;
        }
    },

    _replace : function(){
        var sReplace = '', getHref = '', getSplitHref = [];
        /* html, head, body, link, cdata
        * 각 태그에 임시로 S 붙여서 제거되지 않게 방지
        */
        sReplace = $('.before').val().replace(oSelf.regHtml,'htmlS').replace(oSelf.regHead,'headS>').replace(oSelf.regBody,'bodyS').replace(oSelf.regLink,'linkS').replace(oSelf.regCdata,'').replace(oSelf.regCdata2,'');
        $('.before').val(sReplace);

        // script

        aFunc = {
            'script' : function(){
                return $('.before').val().replace(oSelf.regScript,'<div data-rm="rmself"').replace(oSelf.regScript2,'</div').replace(oSelf.regNoScript,'<div data-rm="rmself"').replace(oSelf.regNoScript2,'</div');
            }
        };


        if(this.aSelectedItem 배열에  script 스트링이 있으면){
            aFunc['script']();
        } else if (this.aSelectedItem 배열에 iframe 스트링이 있으면)}
            aFunc['iframe']();

        }

        for(var i = 0; i < this.aSelectedItem.length; i++){
            sRunnerName = this.aSelectedItem[i];
            aFunc[sRunnerName]();
        }



        //   실행
        oSelf.fScript ? sReplace = $('.before').val().replace(oSelf.regScript,'<div data-rm="rmself"').replace(oSelf.regScript2,'</div').replace(oSelf.regNoScript,'<div data-rm="rmself"').replace(oSelf.regNoScript2,'</div') : sReplace = $('.before').val();
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
    },

    _removeAdditionalAttribute : function(){
         // 추가 속성 제거
            var nAttr = $('.user_rm_attr li').length;
            for(var i = 0; i < nAttr; i++){
                var sRmAttr = $('#rm_user_attr'+i+' + label').text();
                var regRmAttr = new RegExp(sRmAttr+'=','gi');
                sReplace = $('.before').val().replace(regRmAttr,'data-rmself=');
                $('.before').val(sReplace);
            }
        },

        _removeAdditionalTag : function(){
                        // 추가 태그 제거
            var nTag = $('.user_rm_tag li').length;
            for(var j = 0; j < nTag; j++){
                var sRmTag = $('#rm_user_tag'+j+' + label').text();
                var regRmTag = new RegExp('<'+sRmTag,'gi');
                sReplace = $('.before').val().replace(regRmTag,'<'+sRmTag+' data-rm="rmself"');
                $('.before').val(sReplace);
            }
        },

    _replaceForResult : function(){
            this._replace();
            this._removeAdditionalAttribute();
            this._removeAdditionalTag();
    },

    _runConverter : function(){
        /* 특정 영역에 삽입
        * a태그 href 초기화
        * iframe 제거
        * 언더바 속성(클래스 및 아이디) 제거
        * data-rm 속성을 가진 태그 전부 제거
        * data-rmself 속성 전부 제거
        * 다시 textarea 에 삽입
        */
            $('.render').html(sReplace);
            this.fHref ? sReplace = $('.render a').attr('href','#') : '';
            oSelf.fIframe ? sReplace = $('iframe').remove() : '';
            /*
            if(oSelf.fUnderbar){
                //$('.render *').attr();
                $('.render *').each(function(){
                    $(this).attr('class');
                });
            }
            */
            $('[data-rm]').remove();
            $('.render *').removeAttr('data-rmself');
            sReplace = $('.render').html();
            $('.before').val(sReplace);

            /* html, head, body, link
            * 각 태그 원복
            */
            sReplace = $('.before').val().replace(oSelf.regHtml2,'html').replace(oSelf.regHead2,'head>').replace(oSelf.regBody2,'body').replace(oSelf.regLink2,'link').replace(oSelf.regLink3,'');
            $('.before').val(sReplace);
    },

    _setEvents : function(){
        var oSelf = this;

        // prompt : 제거하고 싶은 속성 입력
        this.btnRmAttr.on('click',function(){
            var sRemove = prompt('제거하고 싶은 속성 입력 : ','');
            oSelf._setEleRmAttr(sRemove);
        });

        // prompt : 제거하고 싶은 태그 입력
        this.btnRmTag.on('click',function(){
            var sRemove = prompt('제거하고 싶은 태그 입력 : ','');
            oSelf._setEleRmTag(sRemove);
        });

        // 체크 여부 확인 후 코드 수정
        this.btnReset.on('click',$.proxy(function(we){
            
            this._setCheck();
            this._setReg();

            this._replaceForResult();
            this._runConverter();
        }, this));
    }
};