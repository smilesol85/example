# media
1. [selector](#selector)
1. [selector-before-after-data](#selector-before-after-data)
1. [selector-child](#selector-child)
1. [selector-string](#selector-string)

## <a href="#" name="selector">selector</a>
**[github.io](http://smilesol85.github.io/html-css/selector/selector.html "selector")**

> `*` : 전체 선택자
    tag : tag 선택자
    #id : 아이디 선택자
    .class : 클래스 선택자
    ul li : 후손 선택자
    ul > li : 자손 선택자
    span + span : 동위 선택자
    span ~ em : 동위 선택자
    :active : 반응 선택자
    :hover : 반응 선택자
    :checked : 상태 선택자
    :focus : focus 선택자
    [type=text]:enabled : enabled 선택자
    [type=text]:disabled : disabled 선택자
    :not(.not) : 부정 선택자

## <a href="#" name="selector-before-after-data">selector-before-after-data</a>
**[github.io](http://smilesol85.github.io/html-css/selector/selector-before-after-data.html "selector-before-after-data")**

**counter도 할 수 있다**

> p{counter-increment:nSmilesol;}
    p::before{content:counter(nSmilesol)'. ';}
    p::after{content:' -' attr(data-page) "page";}

    <style>
    span::before{content:'Before section';color:red;}
    span::after{content:'After section';color:blue;}
    p{counter-increment:nSmilesol;}
    p::before{content:counter(nSmilesol)'. ';}
    p::after{content:' -' attr(data-page) "page";}
    </style>

    <span>view style</span>
    <p data-page="100">texttexttexttexttexttexttexttexttexttexttexttexttext</p>
    <p data-page="200">countercountercountercounter</p>

웹 표준에 준수하기 위해서는 태그에 지정된 속성 이외에는 사용할 수 없다. 하지만 data-를 `사용하면 사용자 지정 속성`으로 인정해 준다.

## <a href="#" name="selector-child">selector-child</a>
**[github.io](http://smilesol85.github.io/html-css/selector/selector-child.html "selector-child")**

    .first-child li:first-child{color:red;} /* 첫 번째 자식 요소 선택 */
    li:first-of-type{color:red;} /* li 요소 중 첫번째 li 선택 */
    .first-child li:last-child{color:blue;} /* 마지막 자식 요소 선택 */
    li:last-of-type{color:blue;} /* li 요소 중 마지막 li 선택 */

    /* n번째 선택 */
    .first-child li:nth-child(3),.first-child li:nth-last-child(3){color:orange;}
    li:nth-of-type(3),li:nth-last-of-type(3){color:orange;}

## <a href="#" name="selector-string">selector-string</a>
**[github.io](http://smilesol85.github.io/html-css/selector/selector-string.html "selector-string")**

    /* 첫 번째 문자 선택 */
    .sFl::first-letter{color:red;}

    /* 첫 번째 라인 선택 */
    .sFln::first-line{color:red;}

    /* selection 선택자 */
    .dh::selection{color:red;}

    /* 선택자[속성~=값] - 속성 안의 값이 특정 값을 단어로 포함하고 있는 것 선택 */
    .strSlt-a[data-role~=ab]{color:red;}

    /* 선택자[속성|=값] - 속성 안의 값이 특정 값을 단어로 포함하고 있는 것 선택 */
    .strSlt-b[data-role|=ko]{color:red;}

    /* 선택자[속성*=값] - 속성 안의 값이 특정 값을 포함하고 있는 것 선택 */
    .strSlt-b2[data-role*=x]{color:red;}

    /* 선택자[속성^=값] - 속성 안의 값이 특정 값으로 시작하는 태그를 선택 */
    .strSlt-c[data-role^=a]{color:red;}

    /* 선택자[속성$=값] - 속성 안의 값이 특정 값으로 끝나는 태그를 선택 */
    .strSlt-d[data-role$=f]{color:red;}