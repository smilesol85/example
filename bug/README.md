# bug
1. [firefox](#firefox)
1. [ios](#ios)
1. [android](#android)
1. [android_2_x](#android_2_x)
1. [android_4_x](#android_4_x)
1. [mobile](#mobile)
1. [pc](#pc)

## <a href="#" name="firefox">firefox</a>
* background-position-x / background-position-y 속성은 firefox에서 rendering 되지 않는다.

## <a href="#" name="ios">ios</a>
* 가로 전환시 font가 bold style이 적용된 것 처럼 rendering 되면 아래와 같이 적용해 보자.  
	
		div{-webkit-text-size-adjust:none || auto || n%}
		div{-webkit-backface-visibility:hidden || visibility}
		div{-webkit-transform:translateZ(0)}

**-webkit-text-size-adjudst**

> 해상도에 따라 텍스트 크기를 자동으로 조절할 때 사용한다.

**-webkit-backface-visibility**

> 뒷면을 보고싶지 않을 경우 사용한다.  
> [backface-visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility "backface-visibility")

**-webkit-transform:translateZ(0)**  

> 3D rendering 할때 Z축을 표현하기 위해 사용한다.

## <a href="#" name="android">android</a>

* animation, transtion 적용시 image가 흐리게 rendering되는 현상이 있다면 아래와 같이 적용해 보자.    
	* 빈 요소에 공백 문자 추가

			<span>&nbsp;</span>
			:before{content:'\00a0'}

	* 빈 요소가 생기지 않게 text에 color:transparent 적용

* image에 text-indent 사용시 image quality 저하되는 현상이 있다.  
* column 속성 사용시 정상 노출 되지 않고 redering이 잘 못 되는 현상이 있다.  
* placeholder 사용시 line-height, text-align 적용 되지 않는다.  
	(font color 및 font size만 적용된다.)  

## <a href="#" name="android_2_x">android_2_x</a>

* 영어 외의 다른 언어 사용시 jQuery keyup, keydown bug가 있다.
	영어가 아닌 타 언어를 사용하게 되면,  
	jQuery keyup, keydown event가 발생하지 않는다.  

* overflow 사용한 scroll이 적용되지 않는다.

## <a href="#" name="android_4_x">android_4_x</a>

* animation시 깜박임을 해결하기 위해서 아래와 같은 방법을 적용해 보자.
		
		animation-fill-mode:none || both || forwards || backwards

	> [animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode "animation-fill-mode")

	**animation-fill-mode** 속성은 재생 이전이나 이후에 애니메이션 효과를 표시할지 여부를 정의한다.  
	**animation-delay** 속성에 정의된 지연 시간 동안 속성 값에 영향을 주지 않는다.  
	**animation-duration** 속성에 정의된 시간이 경과한 후에는 기본적으로 애니메이션이 속성 값에 영향을 주지 않는다.  
	**animation-fill-mode** 속성은 이러한 기본 동작을 재정의하는 데 사용됩니다.  
  
	**none** : 기본 동작이 변경되지 않습니다.  
	**forwards** : 애니메이션이 완료된 후에도 마지막 키 프레임에 정의된 최종 속성 값이 유지됩니다.  
	**backwards** : animation-delay에 정의된 기간 중 애니메이션을 표시하기 전에 첫 번째 키 프레임에 정의된 시작 속성 값이 적용됩니다.  
	**both** : 앞으로 및 뒤로 채우기 모드가 모두 적용됩니다.  

## <a href="#" name="mobile">mobile</a>

* 한글 text 사용시 우측 끝에 의문의 공백이 발생 한다면 아래와 같이 적용해 보자.  
	
	* 텍스트 양쪽 끝에 공백을 추가해 주면 말끔히 해결된다.

			<!-- 텍스트 양쪽 끝에 공백 추가 -->
			<span> 가나다라마바사 </span>

## <a href="#" name="pc">pc</a>

* CSS에서 zoom 요소는 각종 요소들을 돋보기처럼 사용할 수 있다.
		
		/* 2, 3, 4 ~ */
		zoom:1;

	> 비표준 속성이어서 잘 사용하지 않지만, ie7버그 잡을때 주로 사용한다.  
	> ie7에서 자식 요소들이 float:left일 경우 부모 요소가 깨진다.  
	> 또한 ie7은 display:inline-block 이 적용되지 않기 때문에 zoom 속성으로 해당 버그도 잡을 수 있다.  
	> zoom:1을 적용하면 display:inline-block 과 같이 되며,  
	> float:left 때문에 깨진 부모 요소도 바로 잡을 수 있다.

* min-height 속성은 ie6에서 적용되지 않는다.  
	
	> 해결하기

		div{{min-height:500px; height:auto !important; height:500px}

