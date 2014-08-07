(출처 : http://m.mkexdev.net/60)

HTML5에 포함된 스팩으로 `오프라인 웹 구현시 매우 유용`하다.  

- 인터넷이 연결되어 있지 않아도 서비스를 이용할 수 있는 확장성
- 서버와 통신을 줄여 네트워크 트래픽을 감소하는 성능적 장점

HTML5 의 application cache는 html, css, js 파일 및 이미지 파일, 폰트 파일 등
`웹 페이지를 구성하는 각종 웹 리소스들을 클라이언트 단에서 다운로드 후 캐싱`함으로써  
오프라인에서 해당 리소스들을 이용할 수 있도록 하는 기술이다.  

manifest 파일에 캐시 될 웹 리소스를 정의할 수 있으며,    
이 파일을 메인 페이지(혹은 서비스 되는 어떤 페이지)에 명시하는 것 만으로  
application cache가 자동으로 동작한다.  

manifest 파일에는 캐시될 리소스 외에도 반드시 네트워크를 통해서만 접근 가능한 리소스를  
별도로 지정할 수 있으며 존재하지 않는 리소스 요청에 대한 대체 리소스 지정도 가능하다.  

또한 application cache와 관련된 여러 유용한 자바스크립트 API를 제공해 주는데,  
`캐싱 상태 조회`, `캐시 갱신`, `각종 캐시 관련 이벤트` 등이 있다.  

## 캐시 매니페스트(Cache Manifest) 파일  
application cache의 동작에 핵심이 되는 파일이다.  
이 파일의 특성과 작성 방식을 아는 것이 곧 application cache를 아는 것과 다름이 없다.  

캐시 매니페스트는 실제로 캐시될 웹 리소스에 대한 정의를 포함하는 일종의 설정파일이다.  
브라우저는 이 파일에 명시된 리소스를 기반으로 로컬 캐시 항목을 결정한다.  

또한 캐시된 리소스가 서버에서 업데이트 되었다면 이를 다시 새 버전으로 캐시해야 하는데  
이 역시 캐시 매니페스트 파일의 업데이트 여부가 기준이 된다.  

그럼 가장 간단한 형태의 매니페스트 파일 예를 보자.  
	
	CACHE MANIFEST
	# Version 1.0.0.0
	ac.html
	ac.js
	ac.css 

- 확장자는 .manifest  
- 첫줄은 CACHE MANIFEST 라고 정의! 그 아래로 캐시될 웹 리소스들을 정의한다(각 항목은 줄바꿈으로 구분됨)  
- `#`은 주석  

그리고 메인페이지 혹은 어떤 페이지에서 매니페스트 파일을 지정해 주면 된다.  
이후 이 페이지가 호출되면 캐시는 동작한다.  
	
	<!DOCTYPE html>
	<html manifest="cache.manifest"> 

클라이언트의 웹 브라우저는 매니페스트 파일을 기준으로 캐시 여부를 판단한다.  
따라서 `매니페스트 파일은 클라이언트가 접근`할 수 있어야 하며 파일의 MIMIE 타입을  
알맞게 설정해 줘야 한다.  

마이크로소프트의 웹 서버인 IIS 의 경우 인터넷서비스 관리자 화면에서 MIME 타입 설정이 가능하다.  
.manifest 확장자에 대한 MIME 타입을 `text/cache-manifest`로 설정한다.  

### 캐시 매니페스트 파일의 3가시 섹션
캐시 매니페스트 파일에는 캐시될 리소스 지정 이외에도  
대체 리소스 및 반드시 온라인 액세스를 해야 하는 리소스의 지정도 가능하다.  

#### CACHE 섹션  
가장 핵심이 되는 섹션이다.  
클라이언트에 캐시되어야 할 항목을 지정한다.  
Cache 섹션으로 지정된 웹 리소스는 오프라인에서도 접근이 가능하게 된다.  
섹션의 기본값이다.
즉, 섹션을 직접 명시하지 않으면 기본적으로 CACHE 섹션이 된다.  

그리고 CACHE 섹션에 명시하지 않아도 자동으로 캐시되는 파일이 있는데,  
바로 `manifest 속성을 지정한 html 파일`이다.  

#### NETWORK 섹션  
CACHE 섹션과 반대 되는 개념이다. `반드시 온라인 상태에서만 접근 가능한 항목을 지정`한다.  
업데이트가 매우 잦거나 동적으로 변화하는 웹 리소스를 지정할 때 유용하다.  
`*` 표시를 하면 나머지 모두 캐시하지 않겠다! 라는 표현이다.  

#### FALLBACK 섹션  
대체 리소스를 지정하는 섹션이다.  
요청한 URL에 해당하는 리소스가 존재하지 않을 때 이를 대신해서 표시할 리소스를 지정한다.  
다른 요소와는 달리 (공백 혹은 탭을 기준으로) 좌/우 쌍으로 지정한다.  

예) 다음은 home 폴더에 요청한 리소스가 없을 경우 fallback.html 이 대체리소스로 사용되는 예이다.  
	
	FALLBACK:
	./home   fallback.html 

섹션의 기본 값은 CACHE 섹션이며, `섹션이름 :(콜론)` 으로 시작한다.  
매니페스트에 지정한 URL은 `동일한 도메인으로 제한`된다.  

## 데모 만들어 보기  
이제 간단한 어플리캐이션 캐시 데모를 제작해 보자.
파일 구성은 다음과 같다.  
	
	cache.manifest : 매니페스트 파일
	ac.html: HTML 파일 (manifest 속성이 지정된 페이지)
	ac.js: 자바스크립트 파일 (application cache 지원 유/무를 체크하는 로직 포함)
	ac.css: 스타일시트 파일 (문자열을 박스로 감싸는 간단한 스타일 지정)
	mkex.jpg: 샘플이미지
	mkex2.jpg: 샘플이미지2 (NETWORK 섹션 지정)

위 파일 중 mkex2.jpg 는 NETWORK 섹션으로 지정하여 반드시 온라인 상태에서만 액세스 가능하도록 설정하고,  
나머지 파일들은 CACHE 섹션으로 지정하여 오프라인 액세스가 가능하도록 지정한다.  
chace.manifest 파일과 html 파일을 아래와 같이 정의한다.  

> cache.manifest 파일  
	
	CACHE MANIFEST
	# Version 1.0.0.0
	
	CACHE:
	ac.html
	ac.js
	ac.css
	mkex.jpg
	
	NETWORK:
	mkex2.jpg 

> ac.html 파일  
		
	<!DOCTYPE html>
	<html manifest="cache.manifest">
	  <head>
		<link rel="stylesheet" type="text/css" href="ac.css">
		<script type="text/JavaScript" src="ac.js"></script>
		<script type="text/JavaScript">
		  var isSupportCache = supports_offline();
		  if(supports_offline) {
			  alert("현재 브라우저는 application cache를 지원합니다")
		  }
		  else{
			  alert("현재 브라우저는 application cache를 지원하지 않습니다")
		  }
		</script>
	  </head>
	  <body>
		<div class='etcBox'> Hello, Application Cache !  </div>    
		<img src="mkex.jpg"><br>
		<img src="mkex2.jpg"><br>
	  </body>
	</html>

## 캐시 업데이트  
매니페스트 파일에 지정된 CACHE 섹션 항목들은, 첫 요청 이후 모든 재요청은 로컬에서 처리된다.  
즉, a.html 파일이 캐시되었다면 앞으로 이 파일에 대한 모든 액세스는 클라이언트에 캐시된 것이 이용되며  
`서버로의 요청은 이루어 지지 않는다.`  

만일 a.html 파일이 서버에서 업데이트 되었다면 이를 반영할 수 있어야 하는데  
이때에도 역시 캐시매니페시트 파일이 기준이 된다.  

브라우저는 캐시된 모든 항목들의 변경 사항을 일일이 확인하는 대신  
캐시매니페스트 파일의 `변경 사항만을 확인하여 캐시 업데이트 여부를 판단`한게 된다.  

매 요청시 마다 캐시매니페스트 파일의 변경 여부를 확인하여,  
이 파일이 `변경 된 경우 모든 캐시 항목들을 다운로드하여 다시 캐싱` 하는 것이다.  

따라서 클라이언트에 캐시된 리소스를 업데이트 하기 위해서 캐시매니페스트 파일을 변경하면 된다.  

### 캐시 매니페스트 파일의 버전(주석)을 통한 업데이트 관리  
캐시 업데이트가 매니페스트 파일의 변경을 기준으로 하기 때문에 이 파일의 업데이트 관리 방법을 염두해 둘 필요가 있다.  

캐시 업데이트가 매니페시트 파일에 정의된 파일명의 변경이나 추가, 제거라면 매니페스트 파일을 직접 수정하면 되지만,  
기존 캐시된 파일안의 내용만 변경된다면 파일명 변경이 일어나지 않기 때문에  
딱히 매니페시트 파일을 수정할 것이 없게 된다.  

그러나 캐시는 업데이트 되어야 하므로 매니페스트파일을 어떤 식으로든 수정을 해야 한다.  
`그래야 브라우저는 캐시를 업데이트 할 것이다.`

따라서 이런 저런 경우를 다 포함하는 방법이 바로,  
매니페스트 파일에 `버전 문자열을 주석으로 정의`해 두는 것이다.  

앞서 데모에서도 매니페스트파일에 버전번호를 주석으로 달았는데, 이것이 바로 캐시 업데이트를 위한 것이다.  
이렇게 버전 번호를 업데이트 시 마다 변경해 주면 매니페스트파일이 변경된 것과 같으므로 브라우저에게 다시 캐시하도록 할 수 있게 되는 것이다.  

### application cache 관련 스크립트 API  
application cache는 기본적으로 매니페스트파일을 기준으로 동작하지만  
추가 세세한 제어를 위해 스크립트 API 및 몇 가지 이벤트를 지원한다.  

application cache API 의 핵심객체는 applicationCache 객체이며,  
이 객체의 status 속성으로 캐시 상태를 점검할 수 있다.  
또한 update() 함수로 캐시 업데이트를 명시적으로 수행할 수 있으며,  
updaterdady 이벤트를 수신하여 최신 캐시를 얻은 시점을 제어할 수 있다.  
더불어 업데이트 에러를 알려 주는 error 이벤트, 캐시 완료를 알려 주는 cached 이벤트 등이 있다.  

또한 progress 이벤트는 업데이트 진행 중에 발생함으로 이 이벤트를 이용하면,  
대량 캐시 업데이트 시 진행상태바와 같은 도우미 UI를 제공할 수 있게 된다.  

기타 몇 가지 유용한 API 와 이벤트가 제공되니 캐시 업데이트를 더욱 세세하게 제어하고 싶다면,  
관련 자료를 참조하기 바란다.  
	
	If (!!window.applicationCache) {
	//applicationCache지원함
	} else {
	//applicationCache지원하지 않음
	}
	
	var appCache = window.applicationCache;
	//applicationCache 이벤트 발생함
	window.addEventListener('load', function(e) {
	appCache.addEventListener('cached', handleCacheEvent, false);
	appCache.addEventListener('checking', handleCacheEvent, false);
	appCache.addEventListener('downloading', handleCacheEvent, false);
	appCache.addEventListener('progress', handleCacheEvent, false);
	appCache.addEventListener('noupdate', handleCacheEvent, false);
	appCache.addEventListener('obsolete', handleCacheEvent, false);
	appCache.addEventListener('updateready', handleCacheEvent, false);
	
	appCache.addEventListener('error', handleCacheError, false);
	}, false);
	
	function handleCacheEvent(e){
	switch(e.type){
	case "cached":
	console.log("cached: application cache됨");
	break;

	case "checking":
	console.log("checking: 업데이트 사항 체크");
	break;
	
	case "downloading":
	console.log("downloading: 다운로드 시작");
	break;
	
	case "progress":
	console.log("progress: 다운로드 진행");
	break;
	
	case "noupdate":
	console.log("noupdate: 업데이트 사항 없음");
	break;
	
	case "obsolete":
	console.log("obsolete: manifest 파일 찾을수 없음, 캐시삭제함");
	break;
	
	case "updateready":
	console.log("updateready: 업데이트 완료");
	
	// Application Cache 상태 확인
	if (appCache.status == appCache.UPDATEREADY) {
		 appCache.swapCache();
		 if (confirm('업데이트 완료되었습니다. 재시작 하세요.')) {
			  // 리소르를 새로 업데이트 하면 페이지를 새로고침해서 최신리소스를 반영해야합니다.window.location.reload();
		 }
	}
	break;
	}
	}
	
	// 에러발생 핸들러
	function handleCacheError(e){
		 console.log("error: 업데이트 에러");
	}
	
	Application Cache 상태확인
	window.applicationCache.status로 현재 캐시의 상태를 확인할수 있습니다.
	
	window.applicationCache.status == "0" 또는 window.applicationCache.UNCACHED
	캐시가 사용되지 않음
	
	window.applicationCache.status == "1" 또는 window.applicationCache.IDLE
	최신버전으로 업데이트 되었음
	
	window.applicationCache.status == "2" 또는 window.applicationCache.CHECKING
	메니페스트 파일이 업데이트 되었는지 확인
	
	window.applicationCache.status == "3" 또는 window.applicationCache.DOWNLOADING
	리소스르 다운로드하고 있음
	
	window.applicationCache.status == "4" 또는 window.applicationCache.UPDATEREADY
	리소스르 다운로드 받아 업데이트 했음
	
	window.applicationCache.status == "5" 또는 window.applicationCache.OBSOLETE
	메니페스트 파일 찾을 수 없음.

### Application Cache 메서드  
> 새로다운로드 받은 리소스를 기존의 리소스와 강제로 교체시킵니다.  

	
	window.applicationCache.swapCache()

	window.applicationCache.update()
	리소스를 다시 다운로드합니다.

## 진정한 오프라인 웹 어플리케이션  
application cache가 오프라인 웹 어플리케이션의 근간이 되는 기술이긴 하지만,  
보다 철저한 오프라인을 지원하기 위해서는 부족함이 느껴진다.  

인터넷 연결을 끊어 졌을 때,  
URL을 기반으로 하는 웹 리소스에 대한 오프라인 액세스 뿐만 아니라  
데이터 조회, 수정, 삭제 등 동적 데이터 관리도 가능하게 하려면 이 기술만으로는 부족하다.  

동적 데이터 관리를 오프라인 상태에서도 가능토록 하려면,  
클라이언트 저장소 기술이 접목되어야 하는데 HTML5 의 스펙 중 `Web Storage`, `Web Database` 등이 이 시나리오에 적합해 보인다.  

따라서 진정으로 동적 동작이 가능한 오프라인 웹 어플리케이션을 개발하기 위해서는  
application cache와 더불어 `Web Storage`, `Web Database` 와 같은 클라이언트 저장소 기술을  
같이 사용해야 할 것이다.  