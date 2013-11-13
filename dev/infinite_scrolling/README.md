# infinite scrolling
**[github.io](http://smilesol85.github.io/dev/infinite_scrolling/infinite_scrolling.html "infinite_scrolling")**

> 무제한 스크롤링을 javascript로 구현해 봤다.

browser의 높이값을 check하는 방법에는 여러가지가 있다.

> // TYPE A - jQuery  
> $(document).height();  // return height of html document  
> $(window).height();  // return height of browser height  
  
> // TYPE B - DOM  
> 1. element.offsetWidth / element.offsetHeight  
> - border, padding 전부 포함한 사이즈  
> - W3C 권고안이 아님 (MSIE’s DHTML Object Moldel)  
  
> 2. element.clientWidth / element.clientHeight  
> - border 를 뺀 영역의 사이즈  
> - W3C 표준 아님 (MSIE’s DHTML Object Moldel)  
  
> 3. element.scrollWidth / element.scrollHeight  
> - 스크롤 사이즈  
> - W3C 권고안 아님 (MSIE’s DHTML Object Moldel)  