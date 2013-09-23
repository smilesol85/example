var reset = reset || {};

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
        this.welBtnRmAttr = $('.add_rm_attr');
        this.welBtnRmTag = $('.add_rm_tag');
        this.welBtnReset = $('.btn_reset');
    },
    _setCheck : function(){
        this.welHref = $('#reset_href').is(':checked');
        this.welScript = $('#rm_script_tag').is(':checked');
        this.welIframe = $('#rm_iframe_tag').is(':checked');
        this.welTarget = $('#rm_target_blank').is(':checked');
        this.welOnclick = $('#rm_onclick').is(':checked');
        this.welOnerror = $('#rm_onerror').is(':checked');
        this.welOnload = $('#rm_onload').is(':checked');
        this.welNocr = $('#rm_nocr').is(':checked');
        this.welUnderbar = $('#rm_underbar').is(':checked');
    },
    _setReg : function(){
        //this.rxScript = /<script.*[\r\n].*[\r\n]<\/script>/gi;
        //this.rxTarget = /target=["'][^"']+["']/gi;
        //this.rxOnclick = /onclick=["'].*["']/gi;
        //this.rxOnerror = /onerror=["'].*["']/gi;
        //this.rxOnload = /onload=["'].*["']/gi;
        //this.rxNocr = /nocr=["'].*["']/gi;

        this.rxHtml = /html/gi;
        this.rxHead = /head>/gi;
        this.rxBody = /body/gi;
        this.rxLink = /link/gi;

        this.rxHtml2 = /htmlS/gi;
        this.rxHead2 = /headS>/gi;
        this.rxBody2 = /bodyS/gi;
        this.rxLink2 = /LinkS/gi;
        
        this.rxLink3 = /<\/link>/gi;
        this.rxHref = /href=["'][^"']+["']/gi;
        this.rxScript = /<script/gi;
        this.rxScript2 = /<\/script/gi;
        this.rxNoScript = /<noscript/gi;
        this.rxNoScript2 = /<\/noscript/gi;
        this.rxTarget = /target=/gi;
        this.rxOnclick = /onclick=/gi;
        this.rxOnerror = /onerror=/gi;
        this.rxOnload = /onload=/gi;
        this.rxNocr = /nocr=/gi;

        this.rxCdata = /\/\/<\!\[CDATA\[/gi;
        this.rxCdata2 = /\/\/\]\]>>/gi;

        /* space */
        this.rxUnderbar = /_[^blank]\w*/gi;
        this.rxBlank = /\s[>]/gi;
        this.rxBlank2 = /\s["]/gi;
        this.rxBlank3 = /\s[']/gi;

        //this.rxLineBlank = /\r\n|\n\n/gi;
    },

    // 속성 추가
    _setEleRmAttr : function(sValue){
        if(sValue !== '' && sValue !== undefined && sValue !== null){
            $('.user_rm_attr').append('<li><input type="checkbox" id="rm_user_attr'+this.nRmAttr+'" checked="checked" disabled="disabled"><label for="rm_user_attr'+this.nRmAttr+'">'+sValue+'</label></li>');
            this.nRmAttr++;
        }
    },

    // 태그 추가
    _setEleRmTag : function(sValue){
        if(sValue !== '' && sValue !== undefined && sValue !== null){
            $('.user_rm_tag').append('<li><input type="checkbox" id="rm_user_tag'+this.nRmTag+'" checked="checked" disabled="disabled"><label for="rm_user_tag'+this.nRmTag+'">'+sValue+'</label></li>');
            this.nRmTag++;
        }
    },

    // 변환
    _replace : function(){
        var sReplace = '';

        /* html, head, body, link, cdata
        * 각 태그에 임시로 S 붙여서 제거되지 않게 방지
        */
        sReplace = $('.before').val().replace(this.rxHtml,'htmlS').replace(this.rxHead,'headS>').replace(this.rxBody,'bodyS').replace(this.rxLink,'linkS').replace(this.rxCdata,'').replace(this.rxCdata2,'');
        $('.before').val(sReplace);

        // script
        this.welScript ? sReplace = $('.before').val().replace(this.rxScript,'<div data-rm="rmself"').replace(this.rxScript2,'</div').replace(this.rxNoScript,'<div data-rm="rmself"').replace(this.rxNoScript2,'</div') : sReplace = $('.before').val();
        $('.before').val(sReplace);
        
        // onclick
        this.welOnclick ? sReplace = $('.before').val().replace(this.rxOnclick,'data-rmself=') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // onerror
        this.welOnerror ? sReplace = $('.before').val().replace(this.rxOnerror,'data-rmself=') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // onload
        this.welOnload ? sReplace = $('.before').val().replace(this.rxOnload,'data-rmself=') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // nocr
        this.welNocr ? sReplace = $('.before').val().replace(this.rxNocr,'data-rmself=') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // target
        this.welTarget ? sReplace = $('.before').val().replace(this.rxTarget,'data-rmself=') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // underbar class & id
        this.welUnderbar ? sReplace = $('.before').val().replace(this.rxUnderbar,'') : sReplace = $('.before').val();
        $('.before').val(sReplace);

        // 공백 제거
        sReplace = $('.before').val().replace(this.rxBlank,'>').replace(this.rxBlank2,'"').replace(this.rxBlank3,'\'');
        $('.before').val(sReplace);

        // 추가 속성 제거
        var nAttr = $('.user_rm_attr li').length;
        for(var i = 0; i < nAttr; i++){
            var sRmAttr = $('#rm_user_attr'+i+' + label').text();
            var rxRmAttr = new RegExp(sRmAttr+'=','gi');
            sReplace = $('.before').val().replace(rxRmAttr,'data-rmself=');
            $('.before').val(sReplace);
        }

        // 추가 태그 제거
        var nTag = $('.user_rm_tag li').length;
        for(var j = 0; j < nTag; j++){
            var sRmTag = $('#rm_user_tag'+j+' + label').text();
            var rxRmTag = new RegExp('<'+sRmTag,'gi');
            sReplace = $('.before').val().replace(rxRmTag,'<'+sRmTag+' data-rm="rmself"');
            $('.before').val(sReplace);
        }

        /* 특정 영역에 삽입
        * a태그 href 초기화
        * iframe 제거
        * 언더바 속성(클래스 및 아이디) 제거
        * data-rm 속성을 가진 태그 전부 제거
        * data-rmself 속성 전부 제거
        * 다시 textarea 에 삽입
        */
        $('.render').html(sReplace);
        this.welHref ? sReplace = $('.render a').attr('href','#') : '';
        this.welIframe ? sReplace = $('iframe').remove() : '';
        /*
        if(this.welUnderbar){
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
        sReplace = $('.before').val().replace(this.rxHtml2,'html').replace(this.rxHead2,'head>').replace(this.rxBody2,'body').replace(this.rxLink2,'link').replace(this.rxLink3,'');
        $('.before').val(sReplace);
    },

    _setEvents : function(){
        var oSelf = this;

        // prompt : 제거하고 싶은 속성 입력
        this.welBtnRmAttr.on('click',function(){
            var sRemove = prompt('제거하고 싶은 속성 입력 : ','');
            oSelf._setEleRmAttr(sRemove);
        });

        // prompt : 제거하고 싶은 태그 입력
        this.welBtnRmTag.on('click',function(){
            var sRemove = prompt('제거하고 싶은 태그 입력 : ','');
            oSelf._setEleRmTag(sRemove);
        });

        // 체크 여부 확인 후 코드 수정
        this.welBtnReset.on('click',function(){
            oSelf._setCheck();
            oSelf._setReg();
            oSelf._replace();
        });
    }
};