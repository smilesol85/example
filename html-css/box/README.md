# box
1. [border](#border)
1. [box-sizing](#box-sizing)
1. [flexbox](#flexbox)

## <a name="border">border</a>
**[github.io](http://smilesol85.github.io/html-css/box/border.html "border")**
	
	/* border-radius */
	*{border-radius:10px}
	div{border-top-right-radius:10px}

	/* border-width */
	*{border-width:10px}
	div{border-top-width:10px}

	/* border-style */
	*{border-style:solid}
	div{border-right-style:solid}

	/* border-color */
	*{border-color:red}
	div{border-bottom-color:red}

## <a name="box-sizing">box-sizing</a>
**[github.io](http://smilesol85.github.io/html-css/box/box-sizing.html "box-sizing")**

	/* border를 포함 */
	.box2{box-sizing:border-box}

	/* border를 포함하지 않음 */
	.box3{box-sizing:content-box}

## <a name="flexbox">flexbox</a>
**[github.io](http://smilesol85.github.io/html-css/box/flexbox.html "flexbox")**

flexbox 사용은 box안의 요소들은 `block` 요소라는 조건이 있다.
	
	/* 부모 요소에 box 선언 */
	.box{display:box;display:-webkit-box}

	/* 상단 정렬 */
	.oBox2{-webkit-box-orient:vertical;-webkit-flex-direction:column;height:100px}

	/* 좌측 정렬 */
	.oBox3{-webkit-box-pack:start}

	/* 우측 정렬 */
	.oBox4{-webkit-box-pack:end}

	/* 일정 간격으로 정렬 */
	.oBox5{-webkit-box-pack:justify}

	/* 가운데 정렬 */
	.oBox6{-webkit-box-pack:center}

	/* 좌측 상단 정렬 */
	.oBox7{-webkit-box-align:start}

	/* 좌측 하단 정렬 */
	.oBox8{-webkit-box-align:end}

	/* 좌측 가운데 정렬 */
	.oBox9{-webkit-box-align:center}

	/* 왼쪽 상단 정렬 */
	.oBox10{-webkit-box-align:baseline}

	/* 왼쪽 정렬 */
	.oBox11{-webkit-box-align:stretch}

	/* 각 box 영역 정렬 */
	.box .oBoxE1{-webkit-box-flex:1}
	.box .oBoxE2{-webkit-box-flex:20}
	.box .oBoxE3{-webkit-box-flex:1}

	/* 각 box 순서 강제 정렬 */
	.box .oBoxE1{-webkit-box-ordinal-group:2}
	.box .oBoxE2{-webkit-box-ordinal-group:1}
	.box .oBoxE3{-webkit-box-ordinal-group:3}

## etc