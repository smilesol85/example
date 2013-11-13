# bug
1. [firefox](#firefox)
1. [ios](#ios)
1. [android](#android)
1. [mobile](#mobile)
1. [pc](#pc)

## <a href="#" name="firefox">firefox</a>
* background-position-x / background-position-y  
	background-position-x / background-position-y 는 firefox에서 작동하지 않는다.

## <a href="#" name="ios">ios</a>
* 가로 전환시 font bold처럼 렌더링 해결 방법  
	
		*{-webkit-text-size-adjust:none}
		*{-webkit-backface-visibility:hidden || visibility}
		*{-webkit-transform:translateZ(0)}

**-webkit-text-size-adjudst**

> 해상도에 따라 텍스트 크기를 자동으로 조절할 때 사용한다.

**-webkit-backface-visibility**

> 뒷면을 보고싶지 않을 경우 사용한다.  
> [backface-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility "backface-visibility")

**-webkit-transform:translateZ**
> 3D rendering 할때 Z축을 표현하기 위해 사용한다.