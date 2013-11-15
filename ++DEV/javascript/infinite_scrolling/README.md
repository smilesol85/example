# infinite scrolling
**[github.io](http://smilesol85.github.io/javascript/++DEV/javascript/infinite_scrolling/infinite_scrolling.html "infinite_scrolling")**

> 사용 목적은 스크롤을 무제한으로 적용하고 싶은 경우를 위함이다.  
> 스크롤이 최하단에 도착했을 때 반응하는 구조이다.

추가로 개발시 적용한 브라우저의 높이값을 확인하는 방법을 알아보자.

* TYPE A - jQuery  

        $(document).height();  /* return height of html document */
        $(window).height();  /* return height of browser height */



* TYPE B - DOM  
    **element.offsetWidth / element.offsetHeight**
    > border, padding 전부 포함한 사이즈  
    > W3C 권고안이 아님 (MSIE’s DHTML Object Moldel)  
      
    **element.clientWidth / element.clientHeight**
    > border 를 뺀 영역의 사이즈  
    > W3C 표준 아님 (MSIE’s DHTML Object Moldel)  
      
    **element.scrollWidth / element.scrollHeight**
    > scroll size  
    > W3C 권고안 아님 (MSIE’s DHTML Object Moldel)  