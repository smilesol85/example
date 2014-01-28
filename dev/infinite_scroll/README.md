# infinite scroll
<a href="http://smilesol85.github.io/dev/infinite_scroll/infinite_scroll.html">infinite scroll page</a>  

- TYPE A - jQuery  

        $(document).height();  /* return height of html document */
        $(window).height();  /* return height of browser height */



- TYPE B - DOM  
    **element.offsetWidth / element.offsetHeight**  
    > border, padding 전부 포함한 사이즈  
    > W3C 권고안이 아님 (MSIE’s DHTML Object Moldel)  
      
    **element.clientWidth / element.clientHeight**  
    > border 를 뺀 영역의 사이즈  
    > W3C 표준 아님 (MSIE’s DHTML Object Moldel)  
      
    **element.scrollWidth / element.scrollHeight**  
    > scroll size  
    > W3C 권고안 아님 (MSIE’s DHTML Object Moldel)  