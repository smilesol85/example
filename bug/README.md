# bug
1. [firefox](#firefox)
1. [ios](#ios)
1. [android](#android)
1. [android_2_x](#android_2_x)
1. [android_4_x](#android_4_x)
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

## <a href="#" name="android">android</a>

* animation, transtion 적용시 이미지가 흐리게 rendering되는 현상 해결 방법  
	* 빈 요소에 공백 문자 추가

			<span>&nbsp;</span>
			:before{content:’\00a0’}

	* 빈 요소가 생기지 않게 text에 color:transparent 적용

* column 속성 정상 노출 되지 않는 현상

* placeholder 사용시 line-height, text-align 적용 안됨 (폰트 color 및 size만 적용됨)

* image에 text-indent 사용시 quality 저하

## <a href="#" name="android_2_x">android_2_x</a>

* 영어 외의 다른 언어 사용시 jQuery keyup, keydown bug  
	영어가 아닌 타 언어를 사용하게 되면,  
	jQuery keyup, keydown event가 발생하지 않는다고 한다.

* overflow 사용한 scroll이 작동하지 않는다.

## <a href="#" name="android_4_x">android_4_x</a>

* 애니메이션 깜박임 해결 방법
		
		animation-fill-mode:none | both | forwards | backwards

	> [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode "animation-fill-mode")

	animation-fill-mode 속성은 재생 이전이나 이후에 애니메이션 효과를 표시할지 여부를 정의한다.  
	animation-delay 속성에 정의된 지연 시간 동안 속성 값에 영향을 주지 않는다.  
	animation-duration 속성에 정의된 시간이 경과한 후에는 기본적으로 애니메이션이 속성 값에 영향을 주지 않는다.  
	animation-fill-mode 속성은 이러한 기본 동작을 재정의하는 데 사용됩니다.  
  
	none : 기본 동작이 변경되지 않습니다.  
	forwards : 애니메이션이 완료된 후에도 마지막 키 프레임에 정의된 최종 속성 값이 유지됩니다.  
	backwards : animation-delay에 정의된 기간 중 애니메이션을 표시하기 전에 첫 번째 키 프레임에 정의된 시작 속성 값이 적용됩니다.  
	both : 앞으로 및 뒤로 채우기 모드가 모두 적용됩니다.  

