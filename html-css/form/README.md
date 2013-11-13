# box
1. [form](#form)

## <a name="form">form</a>
**[github.io](http://smilesol85.github.io/html-css/form/form.html "form")**

	<!-- form method : get || post -->
	<form action="#" method="get">
		<fieldset>
			<legend>HTML input type</legend>
			<label for="fhidden">`hidden`</label><input type="hidden" id="fhidden"><br>
            <label for="fbutton">`button`</label><input type="button" id="fbutton"><br>
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

## etc