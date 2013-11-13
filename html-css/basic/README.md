# basic

## meta
**[github.io](http://smilesol85.github.io/html-css/basic/meta.html "meta tag")**

meta tag 사용으로 해당 html 문서의 제목, 설명, 제작자 정보 등의 문서들의 정보들을 명시할 수 있다.

## list
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

## shadow
**[github.io](http://smilesol85.github.io/html-css/basic/shadow.html "shadow")**

## string
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

## table
**[github.io](http://smilesol85.github.io/html-css/basic/table.html "table")**
* summary : table 내용 요약
* caption : table 제목 및 설명문
* th : table 제목 cell
* td : table 데이터 cell
* colgroup : 열 전체를 그룹 지정
* col : 열 각각의 속성 지정

## CSS optimization
CSS란 `Cascading Style Sheets`의 약자이다.
HTML 4.0 이후부터 style을 사용하므로써 HTML 문서와 design을 분리시키는 것이 가능해졌습니다.
style이란 HTML 요소들이 어떻게 display 될 것인가에 대한 정의를 말합니다.

style은 크게 4가지 방법으로 사용 가능합니다.
우선 순위는 숫자가 높을 수록 높습니다.

1. broser default
2. External Style Sheet (`head`안에 `link` tag로 외부에서 link됩니다.)
3. Internal Style Sheet(`style`이라는 tag를 써서 문서안에서 정의됩니다.)
4. Inline Style (각 tag에 style=""이라는 속성을 이용해 정의됩니다.)

CSS optimization manual

1. inline, internal 보다 external stylesheet를 권장한다.

	* 유지보수가 좋을 뿐만 아니라, browser에 cashe되어 추가적인 HTTP 요청이 발생하지 않는다.
2. 속도 향상을 위해서 @import는 지양한다.

	* 페이지 내에서 <link>와 @import를 병행해서 사용하거나 여러 @import만을 사용할 경우 순차적으로 loading하기 때문에 페이지 속도에 영향을 미친다.
	* <link>를 여러번 사용할 경우 병행 즉 동시 download가 보장되어 속서면에서 좋다.
3. 모니터, 프린트, 소형기기를 위한 css를 분류한다.

	<link type="text/css" rel="stylesheet" href="print.css" media="print">

	/* print.css */
	#header, #footer, .navWrap {display:none}
4. !important 사용은 피하자! 렌더링 이슈가 발생할 수 있다.
5. image 표현을 위해 sprite 기법 사용을 사용하자.

	* 정사각형의 sprite image 사용시 속도면에서 더 빠르다는 것을 알 수 있다.
	* img tag에서 src 경로는 display:none 이지만 request를 발생한다.
	CSS background-image로 지정되고 display:none을 지정하면 request를 발생하지 않는다. 단, inline style로 적용될 경우 FF를 제외한 browser에서 request를 발생한다.
6. 숫자 0 이외의 숫자에는 단위 붙이자.
7. 색 지정에는 RGB 값 사용 권장한다.
8. 전체 사이즈 및 폰트 사이즈에서는 em 사용, 절대 사이즈에는 px 사용, 상대 사이즈에는 % 사용하자.
9. css 속성은 가능하면 축약형 사용하자.

	padding:5px 0 2px 0;
10. 최소한의 id 와 class를 사용하자.

## etc