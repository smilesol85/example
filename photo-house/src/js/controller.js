if(!window.controller){
	controller = {};
}

controller.upload = function(){
	this.init();
};

controller.upload.prototype = {
    init: function() {
        this.elFile = $('#file');

        this._setEvent();
    },

    getFile: function() {
        this.valElFile = this.elFile.val();
        if(this.valElFile.length > 0) {
            this.xhr(this.valElFile);
        } else {
            console.log('no file');
            return false;
        }
    },

    xhr: function(val) {
        console.log(val);
        $.ajax({
            url: 'upload.php',
            dataType: 'json',
            type: 'POST',
            data: {
                'file': val
            },
            success: function(result) {
                // console.log(result.file.length);
                // if(result['result'] == true) {
                // 	$('#result').html(result['file']);
                // 	console.log('upload success');
                // }
            },
            complete : function(data) {
                // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.
            },
            error : function(xhr, status, error) {
                alert('error');
            }
        });
    },

    _setEvent: function() {
        $('#btnSend').on('click', $.proxy(this.getFile, this));
    }
};
