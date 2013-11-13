# trans
1. [transition](#transition)
1. [transform](#transform)
1. [animation](#animation)

## <a href="#" name="transition">transition</a>
**[github.io](http://smilesol85.github.io/html-css/trans/transition.html "transition")**

## <a href="#" name="transform">transform</a>
**[github.io](http://smilesol85.github.io/html-css/trans/transform.html "transform")**

## <a href="#" name="animation">animation</a>
**[github.io](http://smilesol85.github.io/html-css/trans/animation.html "animation")**
    
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
    

