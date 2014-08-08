---
layout: post
title: bug
categories: [etc]
tags: [bug]
fullview: false
---

## bug
1. [firefox](#firefox)  
1. [ios](#ios)  
1. [android](#android)  
1. [android_2_x](#android_2_x)  
1. [android_4_x](#android_4_x)  
1. [mobile](#mobile)  
1. [pc](#pc)  

### <a href="#" name="firefox">firefox</a>  
**_background-position-x / background-position-y 속성은 firefox에서 렌더링 되지 않는다._**  

### <a href="#" name="ios">ios</a>  
**_가로 전환시 폰트가 bold 스타일로 적용된 것 처럼 렌더링 되면 아래와 같이 적용해 보자._**  
(하드웨어 가속을 통해 렌더링 될 수 있도록..)

	div{-webkit-text-size-adjust:none || auto || n%}
	div{-webkit-backface-visibility:hidden || visibility}
	div{-webkit-transform:translateZ(0)}

- -webkit-text-size-adjudst  
	해상도에 따라 텍스트 크기를 자동으로 조절할 때 사용한다.  

- -webkit-backface-visibility  
	뒷면을 보고싶지 않을 경우 사용한다.  
	<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility">backface-visibility</a>  

- -webkit-transform:translateZ(0)  
	3D 렌더링 할때 Z축을 표현하기 위해 사용한다.  

### <a href="#" name="android">android</a>  
**_animation, transtion 적용시 이미지가 흐리게 렌더링되는 현상이 있다면 아래와 같이 적용해 보자._**  
빈 요소에 공백 문자 추가  

		<span>&nbsp;</span>
		:before{content:'\00a0'}

빈 요소가 생기지 않게 텍스트에 color:transparent 적용하는 방법도 있겠다.  

**_이미지에 text-indent 사용시 이미지 퀄리티가 저하되는 현상이 있다. 해결 방법은?_**  
**_column 속성 사용시 정상 노출 되지 않고 비정상적으로 렌더링이 되는 현상이 있다._**  
**_placeholder 사용시 line-height, text-align 적용 되지 않는다._**  
font color 및 font size만 적용된다.  

### <a href="#" name="android_2_x">android_2_x</a>  
**_영어 외의 다른 언어 사용시 jQuery keyup, keydown 버그가 있다._**  
영어가 아닌 타 언어를 사용하게 되면,  
jQuery keyup, keydown 이벤트가 발생하지 않는다.  
(아직 눈으로 확인해 보지 못했다.^^;)  

**_overflow의 scroll이 적용되지 않는다._**  
**_position: fixed 속성 버그가 있다._**  
	
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0,0,0);

### <a href="#" name="android_4_x">android_4_x</a>  
**_animation시 깜박임을 해결하기 위해서 아래와 같은 방법을 적용해 보자._**  
	
	animation-fill-mode:none || both || forwards || backwards

> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode">animation-fill-mode</a>  

- animation-fill-mode : 재생 이전이나 이후에 애니메이션 효과를 표시할지 여부를 정의한다.  
	- none : 기본 동작이 변경되지 않습니다.  
	- forwards : 애니메이션이 완료된 후에도 마지막 키 프레임에 정의된 최종 속성 값이 유지됩니다.  
	- backwards : animation-delay에 정의된 기간 중 애니메이션을 표시하기 전에 첫 번째 키 프레임에 정의된 시작 속성 값이 적용됩니다.  
	- both : 앞으로 및 뒤로 채우기 모드가 모두 적용됩니다.  

- animation-delay : 속성에 정의된 지연 시간 동안 속성 값에 영향을 주지 않는다.  
- animation-duration : 속성에 정의된 시간이 경과한 후에는 기본적으로 애니메이션이 속성 값에 영향을 주지 않는다.  

### <a href="#" name="mobile">mobile</a>  
**_한글 텍스트 사용시 좌, 우측 끝에 의문의 공백이 발생 한다면 아래와 같이 적용해 보자._**  
텍스트 양쪽 끝에 공백을 추가해 주면 말끔히 해결된다.  
	
	<!-- 텍스트 양쪽 끝에 공백 추가 -->
	<span> 가나다라마바사 </span>

**_-webkit-line-clamp과 padding 의 부조화_**  
height의 영향을 받아 padding과 조화롭지 못하는 경우가 있다.  
padding을 margin으로 대체하거나, 부모 요소에 padding을 활용하면 되겠다.  

### <a href="#" name="pc">pc</a>  
**_CSS에서 zoom 요소는 각종 요소들을 돋보기 기능처럼 사용할 수 있다._**  
	
	/* 2, 3, 4 ~ */
	zoom:1;

- 비표준 속성이어서 잘 사용하지 않지만, ie7버그 잡을때 주로 사용한다.  
- ie7에서 자식 요소들이 float:left일 경우 부모 요소가 깨진다.  
- 또한 ie7은 display:inline-block 이 적용되지 않기 때문에 zoom 속성으로 해당 버그도 잡을 수 있다.  
- zoom:1을 적용하면 display:inline-block 과 같이 된다.  
- float:left 때문에 깨진 부모 요소도 바로 잡을 수 있다.  

**_min-height 속성은 ie6에서 적용되지 않는다._**  
아래와 같은 방법으로 해결할 수 있다.  
	
	div{min-height:500px; height:auto !important; height:500px}

**_jquery와 png는 안친한가봐요._**  
png 파일을 jquery animate와 함께 사용하게 되면, png 파일이 깨지는 버그가 있다.  
이런 경우 css로 해결하는 방법이 있다.  
	
	pngImg {
		background:transparent;
		-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
		/* IE8 */
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
		/* IE6 & 7 */
		zoom:1;
	}

**_IE10 input text 기본 삭제버튼 겹침 현상_**  
-ms- prefix를 사용하여 숨길 수 있다.  
	
	input::-ms-clear{display:none}

**_chorme 에서 배경이미지 가운데 정렬과 margin: 0 auto; 로 가운데 정렬이 어긋나는 경우_**  
	
	.background {
	   background: url("image.png") no-repeat 50% 100%;
	}
	@mediascreen and (-webkit-min-device-pixel-ratio:0) {
	  .background{ background-position: 49.999% 100%; }
	   @mediaall and (min-width:1000px){  /* background image 사이즈가 1000px일 경우 */
		.min2000 .background { background-position: 50.001% 100%;}
	   }
	}