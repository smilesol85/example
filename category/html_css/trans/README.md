# trans
1. [transition](#transition)
1. [transform](#transform)
1. [animation](#animation)

## <a href="#" name="transition">transition</a>
**[github.io](http://smilesol85.github.io/+html-css/trans/transition.html "transition")**

현재(2013.02.27) transition 속성은 벤더프리픽스를 사용한다.

> transition-duration : 재생할 시간 지정  
> transition-delay : 지정 시간 후 재생  
> transition-property : 변경할 속성 지정  
> transition-timing-function : 수치 변형 함수 지정  
> (수치 변형 함수 : ease, ease-in, ease-out, ease-in-out 기타 등등)  


## <a href="#" name="transform">transform</a>
**[github.io](http://smilesol85.github.io/+html-css/trans/transform.html "transform")**

HTML5에서 3차원을 구현하는 방법에는 크게 2가지가 있다.
* 자바스크립트를 사용한 WebGL
* CSS3를 사용한 3차원 변환


대표적인 CSS3 변환을 사용하는 자바스크립트 플러그인중 HTML을 활용하여 ppt를 만들 수 있는 [Impress.js](http://bartaz.github.io/impress.js/ "Impress.js")가 있다.  
현재(2013/02/29) transform속성도 transition속성과 animation속성과 같이 벤더프리픽스를 사용해야 한다.

transform 속성은 아래와 같다.
> translate(X,Y) : 특정 크기 이동  
> translateX(X) : X축으로 특정 크기 이동  
> translateY(Y) : Y축으로 특정 크기 이동  
> scale(X,Y) : 특정 크기 확대 및 축소  
> scaleX(X) : X축으로 특정 크기 확대 및 축소  
> scaleX(Y) : Y축으로 특정 크기 확대 및 축소  
> skew(X,Y) : 특정 각도로 기울임  
> skewX(X) : X축으로 특정 각도 기울임  
> skewY(Y) : Y축으로 특정 각도 기울임  
> rotate(Z) : 특정 각도 회전  


3차원 변환 함수에서는 Z값만 추가해 주면 된다.
> translate3d(X,Y,Z);
> scale3d(X,Y,Z);
> rotate3d(X,Y,Z);


변환 함수 선언 순서에 따라 결과가 달라질 수 있으니 주의해야 한다.  
결과는 선언한 순서에 따라 적용된다.

transform-origin속성은 rotate함수 적용시 회전의 중심점을 설정할 수 있다.

    transform-origin:100% 100%;
    transform-origin:right bottom;

transform-style 속성은 3차원 속성 회전할 때 후손의 3차원 속성을 무시할지,유지할지 선택할 수 있다.
    
    transform-style:flat /* 후손의 3차원 속성을 무시한다. */
    transform-style:preserve-3d /* 후손의 3차원 속성을 유지한다. */


backface-visibility 속성은 3차원에서 후면을 보이게 하거나, 보이지 않게 설정 가능하다.
    
    backface-visibility:hidden /* 후면을 보이지 않게 */
    backface-visibility:visible /* 후면을 보이게 */

## <a href="#" name="animation">animation</a>
**[github.io](http://smilesol85.github.io/+html-css/trans/animation.html "animation")**

[HTML5 animation](http://animateyourhtml5.appspot.com/pres/index.html?lang=en#1 "HTML5 animation")


animation속성은 transition속성과 비슷하다.  
차이점은 keyframe을 활용할 수 있다는 점이다.

animation 속성은 아래와 같다.
> animation-delay : 지정 시간 후 재생  
> animation-direction : 애니메이션 진행 방향 설정 (alternate, normal)  
> animation-duration : 지정 시간동안 재생  
> animation-iteration-count : 반복 횟수 지정 (infinite, 1, 2, 3)  
> animation-name : 애니메이션 이름 지정,@keyframes활용  
> animation-play-state : 애니메이션 재생 상태 지정 (paused, running)  
> animation-timing-function : 수치 변형 함수 지정  

    
    /* create keyframe */
    @-webkit-keyframes ani{
    from{left:0;-webkit-transform:rotate(0deg);}
    50%{left:500px;}
    to{left:500px;-webkit-transform:rotate(360deg);}
    }

    @keyframes ani{
        from{left:0;transform:rotate(0deg);}
        50%{left:500px;}
        to{left:500px;transform:rotate(360deg);}
    }

    div{
        -webkit-animation-name:ani;
        -webkit-animation-duration:2s;
        -webkit-animation-timing-function:linear;
        animation-name:ani;
        animation-duration:2s;
        animation-timing-function:linear;

        /* 한 방향 */
        -webkit-animation-iteration-count:infinite;
        animation-iteration-count:infinite;
    }

    div{
        -webkit-animation-name:ani;
        -webkit-animation-duration:2s;
        -webkit-animation-timing-function:linear;
        animation-name:ani;
        animation-duration:2s;
        animation-timing-function:linear;

        /* 처음으로 되돌아 감 */
        -webkit-animation-iteration-count:infinite;
        -webkit-animation-direction:alternate; /* normal 은 from 에서 to */
        animation-iteration-count:infinite;
        animation-direction:alternate; /* normal from 에서 to */
    }

    div:hover{
        -webkit-animation-name:ani;
        -webkit-animation-duration:2s;
        -webkit-animation-timing-function:linear;
        animation-name:ani;
        animation-duration:2s;
        animation-timing-function:linear;

        -webkit-animation-play-state:paused; /* running */
        animation-play-state:paused; /* running */
    }

**animation 속성 한 줄로 입력하기**

    animation:|animation-name|animation-duration|animation-timing-function|animation-delay|animation-iteration-count|animation-play-state
    

