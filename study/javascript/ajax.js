// getJson
var jqxhr = $.getJSON( "tpls/jsonList.json", function(data) {
    console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function() {
    console.log( "second complete" );
});


// angular
//$scope.xhrObject = '';
//$scope.xhrObject = new XMLHttpRequest();
//$scope.xhrObject.onreadystatechange = resultProcess;
//$scope.xhrObject.open('get', 'tpls/jsonList.json', 'true');
//$scope.prevDate = new Date();
//$scope.xhrObject.send(null);
//$scope.nowDate = new Date();
//function resultProcess() {
//    if($scope.xhrObject.readyState == 4) {  // 모든 데이터를 받을 수 있는 상태
//        if($scope.xhrObject.status == 200) {
//            $scope.getInfoSticker = $scope.xhrObject.responseText;
//            $scope.evalText = eval('('+$scope.getInfoSticker+')');
////                $scope.arrInfoSticker = [$scope.evalText];
////                console.log($scope.arrInfoSticker);
//        }
//    }
//}


var xhrObject;
startMethod();

function createXHR() {
    xhrObject = new XMLHttpRequest();
}

function startMethod() {
    createXHR();

    xhrObject.onreadystatechange = resultProcess;
    xhrObject.open('get', 'tpls/jsonList.json', 'true');
    var prevDate = new Date();
    xhrObject.send(null);
    var nowDate = new Date();
}

function processJson() {
    var str = '';
    var getInfoSticker = xhrObject.responseText;
//        var objResult = eval('('+result+')');
//        var num = objResult.getInfoSticker.length;
//
//        for(var i = 0; i < num; i++) {
//            str += objResult.getInfoSticker[i].title;
//        }

//        var jsons = eval('('+getInfoSticker+')');
    console.log(getInfoSticker);
}

function resultProcess() {
    if(xhrObject.readyState == 4) {  // 모든 데이터를 받을 수 있는 상태
        if(xhrObject.status == 200) {
            processJson();
        }
    }
}

// jquery
$.get('tpls/jsonList.json', processResponse);
function processResponse(data, status) {
    console.log(data+'/'+status);
}
