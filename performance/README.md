# performance
1. [image_request](#image_request)

## <a href="#" name="image_request">image_request</a>

* image  
    이미지 태그에 지정된 src의 파일은 display:none 이더라도 `request 발생한다.`

* background-image  
    CSS의 background-image가 지정되고 display:none 이라면 `request 발생하지 않는다.`  
    하지만, inline style로 지정했을 경우 FF(파이어폭스)를 제외한 browser에서 `request 발생한다.`

* iframe src=""  
    iframe만으로는 `request가 발생하지 않는다.`  
    빈 src는 about:blank를 가르키므로 `request가 발생하지 않는다.`

* font-face  
    font-face선언된 것만으로는 `request 발생하지 않는다.`  
    내부의 텍스트가 존재해야만 `request 발생한다.`