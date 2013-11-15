# form
1. [form](#form)
1. [textarea](#textarea)
1. [placeholder](#placeholder)
1. [a11y_form](#a11y_form)

## <a href="#" name="form">form</a>
**[github.io](http://smilesol85.github.io/+html-css/form/form.html "form")**

	<!-- form method : get || post -->
	<form action="#" method="get">
		<fieldset>
			<legend>HTML input type</legend>
			<label for="fhidden">hidden</label><input type="hidden" id="fhidden"><br>
            <label for="fbutton">button</label><input type="button" id="fbutton"><br>
            <label for="fimage">image</label><input type="image" id="fimage"><br>
            <label for="fcheckbox">checkbox</label><input type="checkbox" id="fcheckbox"><br>
            <label for="fradio">radio</label><input type="radio" id="fradio"><br>
            <label for="ffile">file</label><input type="file" id="ffile"><br>
            <label for="ftext">text</label><input type="text" id="ftext" placeholder="text"><br>
            <label for="fpassword">password</label><input type="password" id="fpassword"><br>
            <label for="fsubmit">submit</label><input type="submit" id="fsubmit"><br>
            <label for="freset">reset</label><input type="reset" id="freset"><br>
            <label for="age">연령</label>
            <select id="age">
                <option>10대</option>
                <option>20대</option>
                <option>30대</option>
                <option>40대</option>
            </select>
            <input type="submit" />
            <br>
            <label for="num">숫자</label>
            <select id="num" size="5" multiple="multiple">
                <option value="a">1</option>
                <option value="b">2</option>
                <option value="c">3</option>
                <option value="d">4</option>
            </select>
            <input type="submit" />
            <br>
            <label for="se">성별</label>
            <select id="se">
                <optgroup label="남자">
                    <option>남1</option>
                    <option>남2</option>
                    <option>남3</option>
                </optgroup>
                <optgroup label="여자">
                    <option>여1</option>
                    <option>여2</option>
                    <option>여3</option>
                </optgroup>
            </select>
            <input type="submit" />
		</fieldset>
		<fieldset>
            <legend>HTML5 add input type (Opera browser is all support, other browser is partial support October 2012)</legend>
            <label for="fcolor">color</label><input type="color" id="fcolor"><br>
            <label for="fdate">date</label><input type="date" id="fdate"><br>
            <label for="fdatetime">datetime</label><input type="datetime" id="fdatetime"><br>
            <label for="fdatetime-local">datetime-local</label><input type="datetime-local" id="fdatetime-local"><br>
            <label for="fmonth">month</label><input type="month" id="fmonth"><br>
            <label for="fweek">week</label><input type="week" id="fweek"><br>
            <label for="ftime">time</label><input type="time" id="ftime"><br>
            <label for="femail">email</label><input type="email" id="femail"><br>
            <label for="fnumber">number</label><input type="number" id="fnumber"><br>
            <label for="frange">range</label><input type="range" id="frange"><br>
            <label for="fsearch">search</label><input type="search" id="fsearch"><br>
            <label for="ftel">tel</label><input type="tel" id="ftel"><br>
            <label for="furl">url</label><input type="url" id="furl">
        </fieldset>
	</form>

## <a href="#" name="textarea">textarea</a>
* name : 요소 이름 지정
* cols : 가로로 쓰여지는 텍스트 수
* rows : 세로로 쓰여지는 텍스트 수
* readonly : 클릭은 되나 택스트를 입력할 수 없습니다.
* disabled : 클릭조차 되지 않으며 사용하지 않는 경우입니다.

**readonly="readonly" disabled="disabled"**

	<textarea name="textarea_name" cols="30" rows="5" readonly="readonly" disabled="disabled" onclick="this.value=''">
	텍스트를 입력하세요.
	</textarea>


**readonly="readonly"**

	<textarea name="textarea_name" cols="30" rows="5" readonly="readonly" onclick="this.value=''">
	텍스트를 입력하세요.
	</textarea>

**useable**

	<textarea name="textarea_name" cols="30" rows="5" onclick="this.value=''">
	텍스트를 입력하세요.
	</textarea>


## <a href="#" name="placeholder">placeholder</a>
**[github.io](http://smilesol85.github.io/+html-css/form/placeholder.html "placeholder")**

> placeholder는 HTML5 DTD 에서 표준으로 추가되어 사용 가능하다.
> 이렇게 되면 자바스크립트에서 입력폼에 포커스가 오면
> value를 초기화 하는 일은 불필요하게 된다.


> placeholder는 android 하위 버전에서 텍스트 정렬이 되지 않는 버그가 있다.
> font-size 및 color는 사용 가능하다.

	<style>
	input::-webkit-input-placeholder{font-size:18px;color:red}
	</style>

	<input type="text" placeholder="텍스트를 입력">

## <a href="#" name="a11y_form">a11y_form</a>

	<form>
		<fieldset>
			<legend>title</legend>
			<p><label for="userid">아이디</label><input type="text" id="userid"></input></p>
			<p><label for="userpw">비밀번호</label><input type="text" id="userpw"></input></p>
		</fieldset> 
	</form>

> label은 form을 구조화하고 접근성을 높일 수 있다.
	web 표준을 지원하는 browser의 경우 label만 선택해도 form control을 선택할 수 있으며,
	음성 browser의 경우 form control이 label과 인접하지 않는 경우에도 인식할 수 있도록 지원한다.

**웹 접근성을 고려한 select**

전송 button없이 javascript의 onchange event를 사용한 select는 접근성을 고려하지 않은 방법이다.
전송 button이 없는 경우 keyboard 사용자나 javascript를 사용할 수 없는 사용자를 고려하여 noscript tag를 사용하면 되겠지.. 하겠지만, 그러한 방법은 반쪽짜리 접근성이다.
전송 button을 생성하여 접근성을 지키는 방법을 습관화 하자.

	<select>
		<option>웹 접근성을 고려한 select tag</option>
		<option>웹 접근성을 고려한 select tag</option>
		<option>웹 접근성을 고려한 select tag</option>
		<option>웹 접근성을 고려한 select tag</option>
	</select>
	<input type="submit">