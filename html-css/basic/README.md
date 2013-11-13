# HTML, CSS
1. [meta](#meta)
1. [string](#string)
1. [list](#list)
1. [shadow](#shadow)
1. [table](#table)
1. [page-break](#page-break)
1. [roll](#roll)
1. [webkit](#webkit)
1. [mobile_meta_link](#mobile_meta_link)
1. [css_optimization](#css_optimization)
1. [css_unit](#css_unit)
1. [background](#background)
1. [CSS_link](#CSS_link)
1. [opacity](#opacity)
1. [web_font](#web_font)
1. [scrollbar](#scrollbar)
1. [firefox_button](#firefox_button)
1. [media_query](#media_query)

## <a href="#" name="meta">meta</a>
**[github.io](http://smilesol85.github.io/html-css/basic/meta.html "meta tag")**

> meta tag 사용으로 해당 html 문서의 제목, 설명, 제작자 정보 등의 문서들의 정보들을 명시할 수 있다.

## <a href="#" name="string">string</a>
**[github.io](http://smilesol85.github.io/html-css/basic/string.html "string")**

	<!-- blockquote : block element 인용구 -->
	<blockquote>
        <blockquote>는 block element의 인용문에서 사용된다.
    </blockquote>

    <!-- q : inline element 인용구 -->
    홍길동은 <q cite="http://www.naver.com/" title="title">blah blah~</q>알고 했습니다.
    <br />
    <q> 인용구는 따옴표(" ")가 함께 표시된다.

    <!-- abbr : inline element 축약어 -->
    <abbr title="Apartmention">Apt.</abbr> : 스펠링 하나씩 발음하는 경우나 줄여서 단어를 단순하게 사용하는 경우

    <!-- acronym : inline element 축약어 -->
    <acronym title="Rich Internet Application">RIA</acronym> : 여러단어 조합

    <!-- font 
    	<b> 굵은 글자 tag </b>
    	<i> 기울어진 글자 tag </i>
    	<small> 작은 글자 tag </small>
    	<sub> 아래에 붙는 글자 </sub>
    	<sup> 위에 붙는 글자 </sup>
    	<ins>  밑줄 글자 tag </ins>
    	<del> 가운데 줄이 그어진 글자 tag </del>
    -->

## <a href="#" name="list">list</a>
**[github.io](http://smilesol85.github.io/html-css/basic/list.html "list")**

	/* list style
		list-style:disc;
		list-style:circle;
		list-style:square;
		list-style:decimal;
		list-style:lower-roman;
		list-style:upper-roman;
		list-style:lower-alpha;
		list-style:upper-alpha;
	*/
	ul {list-style:square url("test.jpg");}

## <a href="#" name="shadow">shadow</a>
**[github.io](http://smilesol85.github.io/html-css/basic/shadow.html "shadow")**

## <a href="#" name="table">table</a>
**[github.io](http://smilesol85.github.io/html-css/basic/table.html "table")**
* summary : table 내용 요약
* caption : table 제목 및 설명문
* th : table 제목 cell
* td : table 데이터 cell
* colgroup : 열 전체를 그룹 지정
* col : 열 각각의 속성 지정

## <a href="#" name="page-break">page-break</a>
> 인쇄시 강제로 다음 페이지로 넘길 수 있다.  
> 영역이 끝나면 페이지를 나눈다.  
> `block level`만 적용 되며, inline level에는 적용되지 안된다.  

	<div style="page-break-after:always"></div> 
	<!--
	page-break-after:always;  // 항상 페이지 넘김
	page-break-after:auto;  // 기본값
	page-break-after:avoid;  // 페이지를 강제로 넘기지 못하게 한다.
	-->

## <a href="#" name="roll">roll</a>
* 표지판 역할을 한다고 볼 수 있겠다. (application, banner, main, navigation, search 등)
* 문서에서 구조를 형성하는 요소에 부여한다. (section, navigation, note, heading 등)
* 문서에서 어플리케이션 구조를 형성하는 요소에 부여한다. (alert, alertdialog, progressbar, status)
* 사용자 인터페이스 역할을 한다. (treegrid, toolbar, menuitem 등)
* 사용자 입력수신 역할을 한다. (checkbox, slider, option 등)

**nav tag 예로 들어보면 아래와 같다.**

	<nav role="navigation"></nav>

*nav 요소는 반드시 navigation 으로 작동 하지만, screen reader 중 일부는 인식하지 못하는 리더기가 있다.*

## <a href="#" name="webkit">webkit</a>
> webkit은 safari, chrome 등이 탑재하고 있으며,  
> web browser를 만드는 데 기반을 제공하는 open source 응용 program framework이다.

[-webkit 속성](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance "-webkit 속성")

	/* webkit 기반의 브라우저에서 텍스트사이즈가 들쑥날쑥 하지 않게 조절한다. */
	* {-webkit-text-size-adjust:none;}

	/* font size 조절 */
	-webkit-text-size-adjust:8px;

	/* 그림자 등이 깨끗이 사라진다. */
	-webkit-appearance:none;

## <a href="#" name="mobile_meta_link">mobile_meta_link</a>
* 해상도를 고려한 레이아웃

	> 가로 길이를 가변폭(%)의 레이아웃으로 기획하고 개발 및 design 해야 한다. mobile의 해상도가 다양하기 때문이다.

* 사용자를 편하게! 터치 오류를 줄여라

* 화면 확대비율 고정
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

위와 같은 meta tag는 화면 확대 비율을 기기 size에 맞게 조정하는 부분이다.

	* initail-scale : 기본적인 확대 배율 결정. 0.5로 설정하면 원래 사이즈의 0.5배 크기로 보인다.
	* maximum-scale : 최대 확대 배율을 결정.
	* minimum-scale : 최소 확대 배율을 결정.
	* user-scalable : 화면의 확대/축소 가능 여부를 결정한다. 0이면 불가능, 1이면 가능.

단, initial-scale값과 maximum-scale 값이 같다면, 최대 확대 배율이 100% 이므로 1로 설정해도 확대되지 않는다.  
예를 들어 initial-scale=1.0, maximum-scale=2.0 으로 설정했다면 최대 2배까지 확대할 수 있다.

* 사이트 아이콘 제공
아이폰에서는 website 바로가기 icon을 홈화면에 넣울 수 있다.

	* 아이폰 3g, 아이폰 3gs

			<link rel="apple-touch-icon-precomposed" media="screen and (resolution:163dpi)" href="이미지 경로" />
			<link rel="apple-touch-icon-precomposed" media="screen and (resolution:132dpi)" href="이미지 경로" />

	* 아이패드

			<link rel="apple-touch-icon-precomposed" media="screen and (resolution:163dpi)" href="이미지 경로" />

	* 아이폰4

			<link rel="apple-touch-icon-precomposed" media="screen and (resolution:326dpi)" href="이미지 경로" />

* javascript 최소화  
jQuery 는 훌륭한 javascript framework이지만 mobile에서는 부담스러울 수 있다.

* over event는 소용이 없습니다.  
touch로 작동하는 기기에서는 over event 사용은 무의미하다.

* Retina Display  
Retina Display를 위해서 30px x 30px image라면 2배 크기인 60px x 60px 로 작업을 해야한다.

		
		.myImage {
		   width: 100px;
		   height: 40px;
		   -webkit-background-size: 100px 40px;
		   background: url("images/myImage.jpg");
		}

		@media screen and (-webkit-device-pixel-ratio: 2) {
		   .myImage {
		     background: url("images/myImage@2x.jpg");
		   }
		}


* meta tag, link tag


		< link rel="apple-touch-icon" href="/apple-touch-icon.png"/ >
		< link rel="apple-touch-startup-image" href="/startup.png" >
		< meta name="apple-mobile-web-app-capable" content="yes" / >
		< meta name="apple-mobile-web-app-status-bar-style" content="black" / >


	* link rel="apple-touch-icon" href="/apple-touch-icon.png"

		> 등록되는 document의 icon을 지정할 수 있다.

		일반적으로 iPhone에서 document icon을 추가 하게되면 document 화면을 capture한 내용을 icon으로 사용하는데  
		apple-touch-icon이라는 link를 추가하여 내가 지정한 icon으로 사용할 수 있다.  
		favicon의 iPhone version이라고 생각하면 됩니다.

		* iPhone : 57×57 png 이미지 사용
		* iPad : 72×72 png 이미지 사용
		* iPhone4 : 114×114 png 이미지 사용

		가능하면 114×114 이미지로 제작하여 사용하면 iPhone에서 자동으로 resize 한다.

		기본적으로 iPhone이 제공하는 UI 처리된다.  
		(모서리를 둥글게 하고 반원형의 밝은 부분을 추가해 주는 것)  
		원하지 않을 때는 rel 속성의 값을 apple-touch-icon-precomposed 라는 이름으로 지정하여 사용하면 된다.

			<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png"/>

		*이렇게 지정한 precomposed icon image는 android의 Add to Home Screen 기능에서도 지원된다. size는 48×48 입니다.*


	* link rel="apple-touch-startup-image" href="/startup.png"
		화면이 loading될 때 startup image를 지정할 수 있다.  
		Web App이지만 app 처음 loading시 logo화면 같이 노출할 수 있다.  
		iPhone 기본 app에 들어있는 Default.png 와 비슷한 역할이다.  

		단, image의 크기가 정확히 맞아야 한다.

		* iPhone : 320×460
		* iPhone4 : 640×920
		* iPad : 768×1004


	* meta name="apple-mobile-web-app-capable" content="yes"  
		Web App으로 선언하여 browser의 URL bar를 보이지 않게 할 수 있다.

		즉, Web App 이 마치 일반 Native App 처럼 화면 전체(최상단 상태바 20px 제)를 활용할 수 있도록 한다.

	* meta name="apple-mobile-web-app-status-bar-style" content="black"  
		status bar의 색상을 지정할수 있다.  
		바탕화면이 검정색인 app의 경우 status bar만 회색인 이질감을 줄이기 위해 사용합니다.

		3가지 style : default (회색) , black , black-translucent ( 반투명 )


---
---


## <a href="#" name="css_optimization">CSS optimization</a>
CSS란 `Cascading Style Sheets`의 약자이다.  
HTML 4.0 이후부터 style을 사용하므로써 HTML 문서와 design을 분리시키는 것이 가능해졌습니다.  
style이란 HTML 요소들이 어떻게 display 될 것인가에 대한 정의를 말합니다.

style은 크게 4가지 방법으로 사용 가능합니다.  
우선 순위는 숫자가 높을 수록 높습니다.

1. broser default
2. External Style Sheet (head tag안에 link tag로 외부에서 link됩니다.)
3. Internal Style Sheet(style이라는 tag를 써서 문서안에서 정의됩니다.)
4. Inline Style (각 tag에 style=""이라는 속성을 이용해 정의됩니다.)

CSS optimization manual

* inline, internal 보다 external stylesheet를 권장한다.
	* 유지보수가 좋을 뿐만 아니라, browser에 cashe되어 추가적인 HTTP 요청이 발생하지 않는다.

* 속도 향상을 위해서 @import는 지양한다.
	* 페이지 내에서 link tag와 @import를 병행해서 사용하거나 여러 @import만을 사용할 경우  
	순차적으로 loading하기 때문에 page speed에 영향을 미친다.
	* link tag를 여러번 사용할 경우 병행 즉 동시 download가 보장되어 속서면에서 좋다.

* 모니터, 프린트, 소형기기를 위한 css를 분류한다.
		
		<link type="text/css" rel="stylesheet" href="print.css" media="print">
		/* print.css */
		#header, #footer, .navWrap {display:none}

		
* !important 사용은 피하자! 렌더링 이슈가 발생할 수 있다.

* image 표현을 위해 sprite 기법 사용을 사용하자.
	* 정사각형의 sprite image 사용시 속도면에서 더 빠르다는 것을 알 수 있다.
	* img tag에서 src 경로는 display:none 이지만 request를 발생한다.  
	CSS background-image로 지정되고 display:none을 지정하면 request를 발생하지 않는다.  
	단, inline style로 적용될 경우 FF를 제외한 browser에서 request를 발생한다.

* 숫자 0 이외의 숫자에는 단위 붙이자.

* 색 지정에는 RGB 값 사용 권장한다.

* 전체 사이즈 및 폰트 사이즈에서는 em 사용, 절대 사이즈에는 px 사용, 상대 사이즈에는 % 사용하자.

* css 속성은 가능하면 축약형 사용하자.

		padding:5px 0 2px 0;
	
* 최소한의 id 와 class를 사용하자.

## <a href="#" name="css_unit">CSS unit</a>
많은 사람들이 em단위를 쓰면 해상도에 따라서 크기가 달라진다고 오해하는 경우가 많다.

*em을 쓰는 이유는 IE6과 같이 zoom 기능이 없는 browser에서 browser의 font size option을 조절했을 때 동작하게 하기 위함이다.*

최근의 브라우저들이 모두 zoom 기능을 지원하고 있어 em대신 px을 사용해도 상관 없다.  
하지만 Responsive Web Design을 추구하는 작업을 하시거나,  
화면 크기에 따라서 동적으로 body의 font-size를 조절하는 특수한 작업을 하실 경우에는  
em을 활용하여 scaleable한 UI를 구성할 수도 있습니다.  
또한 해외 웹사이트의 대부분이 em 을 사용하며, 유동성 부분 때문에 em이 표준으로 자리잡아가고 있습니다.

**편리한 작업을 위한 CSS 단위별 폰트크기(px, em, %, pt)**

| Pixels      | EMs         | Percent | Points |
|:-----------:|:-----------:|:-------:|:------:|
| 6px         | 0.375em     | 37.5%   | 5pt    |
| 7px         | 0.438em     | 43.8%   | 5pt    |
| 8px         | 0.5em       | 50%     | 6pt    |
| 9px         | 0.563em     | 56.3%   | 7pt    |
| 10px        | 0.625em     | 62.5%   | 8pt    |
| 11px        | 0.688em     | 68.8%   | 8pt    |
| 12px        | 0.75em      | 75%     | 9pt    |
| 13px        | 0.813em     | 81.3%   | 10pt   |
| 14px        | 0.875em     | 87.5%   | 11pt   |
| 15px        | 0.938em     | 93.8%   | 11pt   |
| 16px        | 1em         | 100%    | 12pt   |
| 17px        | 1.063em     | 106.3%  | 13pt   |
| 18px        | 1.125em     | 112.5%  | 14pt   |
| 19px        | 1.188em     | 118.8%  | 14pt   |
| 20px        | 1.25em      | 125%    | 15pt   |
| 21px        | 1.313em     | 131.3%  | 16pt   |
| 22px        | 1.375em     | 137.5%  | 17pt   |
| 23px        | 1.438em     | 143.8%  | 17pt   |
| 24px        | 1.5em       | 150%    | 18pt   |

**단위별 폰트의 특징**

* pt : points(포인트) - 1포인트는 0.72인치
* px : pixels(픽셀) - 화면 해상도에 대한 상대크기
* %, em : 지정되거나 상속받은 (또는 상위 엘리먼트)에 대한 백분율 상대 크기

**em 사용 예**

em은 부모의 요소에 영향을 받아 매번 계산해 보고 눈으로 확인해 봐야 하는 단점이 있다.

	body { font-size:62.5%; }
	h1 { font-size: 2.4em; } /* =24px */
	p  { font-size: 1.4em; } /* =14px */
	li { font-size: 1.4em; } /* =14px */


**rem 사용 예**

em의 단점인 부모 요소의 영향을 받는 단점을 보안하기 위해서  
CSS3에서 갠찮은 단위를 소개 했는데 그 중 rem(root em) 단위는 꽤 유용하게 쓰일 것 같다.  
rem 단위는 대부분의 browser를 지원하나 아직 전부 지원하지는 않는다.  
rem 지원 여부 : http://caniuse.com/#search=rem  
모드 browser 대응을 위해 아래와 같이 활용할 수 있겠다.

아래 code는 부모인 p tag에 1.4rem이 선언되어 있고,  
자식 요소인 span tag에 부모에 종속되지 않은 1.2rem을 선언할 수 있다.
	
	p { font-size: 1.4rem; } p span { font-size: 1.2rem; }

## <a href="#" name="background">background</a>

	/* 배경색 지정 */
	div{background-color:#ffffff}

	/* 배경에 image 삽입 */
	div{background-image:url('이미지경로')}

	/* 배경 반복 설정 no-repeat , repeat-x , repeat-y */
	div{background-repeat:no-repeat}

	/* scroll : 스크롤하도록 지정 , fixed : 고정되도록 지정 , inherit : 부모 요소의 값 상속하도록 지정 */
	div{background-attachment:scroll}

	/* left , right , center , top , bottom , 100px */
	div{background-position:10px 10px}

	/* 하나로 사용할 때 */
	div{background:#fff url('../images/test.jpg') no-repeat 0 150px}

	/* background 여러개 사용 */
	div{background:url(), linear-gradient(), url()}
	div{background-repeat:no-repeat, no-repeat, repeat}
	div{background-position:bottom right, left, right}

## <a href="#" name="CSS_link">CSS_link</a>
> link style 선언 순서 (LoVe HAte)

	a:link{color:blue}
	a:visited{color:red}
	a:hover{color:green}
	a:active{color:yellow}

## <a href="#" name="opacity">opacity</a>

**background:#000; opacity:없음**
	
	<!-- background:#000; opacity:없음 -->
	<div style="background:#000; color:#fff;">
	background:#000; opacity:없음
	</div>

**(for all browsers) background:#000; opacity:0.5;**

	<!-- (for all browsers) background:#000; opacity:0.5; -->
	<div style="background:#000; color:#fff; opacity:0.5;">
	(for all other browsers) background:#000; opacity:0.5;
	</div>

**(for IE5~7) background:#000; filter:alpha(opacity:50);**


	<!-- (for IE5~7) background:#000; filter:alpha(opacity:50); -->
	<div style="background:#000; color:#fff; filter:alpha(opacity:50);">
	(for IE5~7) background:#000;  filter:alpha(opacity:50);
	</div>

**(for IE8) background:#000; -ms-filter:alpha(opacity:50);**


	<!-- (for IE8) background:#000; -ms-filter:alpha(opacity:50); -->
	<div style="background:#000; color:#fff; -ms-filter:alpha(opacity:50);">
	(for IE8) background:#000;  -ms-filter:alpha(opacity:50);
	</div>

**(for all IE version) background:#000; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);**

	<!-- (for all IE version) background:#000; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50); -->
	<div style="background:#000; color:#fff; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);">
	(for all IE version) background:#000;  -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);
	</div>

**background:#000; opacity:0.5; -ms-opacity:0.5; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);**

	<!-- background:#000; opacity:0.5; -ms-opacity:0.5; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50); -->
	<div style="background:#000; color:#fff; opacity:0.5; -ms-opacity:0.5; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);">
	background:#000;  opacity:0.5; -ms-opacity:0.5; -ms-filter:alpha(opacity:50); filter:alpha(opacity:50);
	</div>

## <a href="#" name="web_font">web_font</a>
> web browser는 사용자의 컴퓨터에 설치된 폰트만 사용할 수 있다.  
> 개발할 당시의 computer에는 font가 설치되어 있지만,  
> 사용자의 computer에 설치되어 있지 않은 font를 사용하고 싶은 경우 web font를 사용한다.

> web font는 사용자가 web page에 접속하는 순간 font를 자동으로 내려 받는다.

[google web font - free](http://www.google.com/webfonts "google web font")

> IE9 version에서는 server에서 실행할 경우 web font가 적용되며,  
> local에서 실행할 경우 보안 문제 때문에 web font가 적용되지 않는다.

	@font-face {
	font-family:NanumGothic;  /* font name 마음대로 지정 */
	src:local('NanumGothic'),  /* 사용자 컴퓨터에 있는 폰트 사용 */
	     url('NanumGothic.eof'),  /* web font down */
	     url('NanumGothic.ttf'),
	     url('NanumGothic.woff');
	} 
	/* 위에서 생성한 font 사용 */
	*{font-family:’<strong>NanumGothic</strong>’;}

**각 format별 사용 가능한 browser**

* .eof : ie만 지원
* .ttf / .otf : ie 를 제외한 browser 지원
* .svg : opera만 지원
* .woff : ie, chorme, firefox만 지원

*따라서 .eof 와 .ttf 포맷을 사용하면 모든 browser를 지원한다.*

## <a href="#" name="scrollbar">scrollbar</a>

	<!-- ie 적용 -->
	html {
	scrollbar-face :움직이는 바 전체색
	scrollbar-shadow :바의 오른쪽과 밑쪽 그림자색
	scrollbar-highlight :바의 왼쪽과 위쪽의 얇은 선색
	scrollbar-3dlight :바의 왼쪽위쪽에 진하게 드러가는 선:
	scrollbar-darkshadow :바의 오른쪽과 밑쪽에 들어가는 얇은 색
	scrollbar-track :바가 없는 아래부분의 색
	scrollbar-arrow :위 아래 화살표 색
	}

	<!-- webkit 적용 -->
	*{overflow-y:scroll;-webkit-overflow-scrolling:touch}
	*::-webkit-scrollbar {width:8px;height:8px;border:3px solid #fff}
	*::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment {display:block;height:10px;background:url('./images/bg.png') #efefef}
	*::-webkit-scrollbar-track {background:#efefef;-webkit-border-radius:10px;border-radius:10px;-webkit-box-shadow:inset 0 0 4px rgba(0,0,0,.2)}
	*::-webkit-scrollbar-thumb {height:50px;width:50px;background:rgba(0,0,0,.2);-webkit-border-radius:8px;border-radius:8px;-webkit-box-shadow:inset 0 0 4px rgba(0,0,0,.1)}

## <a href="#" name="firefox_button">firefox_button</a>
> button tag에 design 요소를 추가하기 위해서  
> padding, background, border 등을 재정의 하는 경우가 있다.  
> 그러나 firefox에서는 padding 값과 border 값이 적용되지 않고 여백이 발생한다.  
> firefox가 버튼 내부에 focus가 갔을때 사용하기 위한 내부 여백이라고 한다.  

> firefox에서도 padding, border가 style 적용한 값으로 노출하고자 할때는  
> ::-moz-focus-inner 라는 선택자를 사용한다.  


	button{padding:0;border:0;background:none}
	button::-moz-focus-inner{padding:0;border:0}


## <a href="#" name="media_query">media_query</a>

> @media는하나의 CSS에서 분기처리하여 다양한 장치에서 문서가 출력될 수 있도록 정의할 수 있다.

**방법1. link 태그 사용**

	<link rel=”stylesheet” href=”screen.css” media=”screen”>
	<link rel=”stylesheet” href=”print.css” media=”print”>

각각 지정한 미디어 장치에 따라 스타일이 적용된다.


**방법2. CSS내에서 사용**

	<style>
	@media screen{}
	</style>

@media only all and (조건문) {실행문}  
> @media: 미디어쿼리 시작 선언  
> only : 생략 가능하며, 생략시 기본값은 only 이다.  
> all : all, aural, braille, embossed, handheld, print, projection, screen, speech, tty, tv 의 미디어 타입을 선택할 수 있다.
> and : 앞과 뒤의 조건을 만족해야 한다. / or : 앞과 뒤중 하나만 만족하면 된다.  
	
	/* 0 ~ 500px */
	@media screen and (max-width:500px){
	h1{color:red}
	}

	/* 500px ~ 800px */
	@media screen and (min-width:500px) and (max-width:800px){
	h1{color:yellow}
	}

	/* 800px ~ */
	@media screen and (min-width:800px){
	color:green
	}

	/* 세로모드 */
	@media screen and (orientation:portrait){
	color:pink
	}

	/* 가로모드 */
	@media screen and (orientation:landscape){
	color:orange
	}

	/* 레티나 디스플레이 */
	@media screen and (-webkit-min-device-pixel-ratio:2){
	color:blue
	}
