# 이벤트

## 이벤트 핸들러 등록 방법
		
* html에 직접 작성  
* 간단하지만 화면을 구성하는 마크업과 분리되지 않아 권장하지 않는다.  
		
```javascript
/*
<div onclick="f();">클릭!</div>
*/
```

* 프로퍼티 지정을 통해 작성  
* 다른 곳에서 등록한 이벤트 핸들러를 덮어 쓸 수 있기 때문에 잘 사용하지 않는다.  
		
```javascript	
/*
<div id="event">클릭!</div>
*/
$('.event').onclick = function(){};
```

* 이벤트 핸들러를 목록에 추가하고 제거하는 방법  
* 여러가지 이벤트를 등록할 수 있어 가장 많이 사용된다.  
		
```javascript
/*
<div id="event">클릭!</div>
*/

$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
$('.event').addEventListener('click', function(){});
```

## 이벤트
		
	<body onload="console.log('one');">
		<script>
			window.onload = function(){
				console.log('two');
			};

			window.addEventListener('load',functiob(){
				console.log('three');
			});
		</script>
	</body>

	<!-- one은 출력되지 않는다. window.onload 가 덮어쓰기 때문이다. 덮어쓰지 않도록 하기 위해서는 addEventListener를 이용하면 된다.  
	two
	three
	-->