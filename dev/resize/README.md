#resize
**[github.io](http://smilesol85.github.io/dev/resize/resize.html "resize")**

> resizeTo 와 resizeBy 는 윈도우의 크기를 변경한다.  
> resizeTo는 절대좌표에 해당하며,  
> resizeBy는 상대좌표에 해당된다.  
		
```javascript
// width="50",height="100"
function reSize(){
	window.resizeTo('50','100');
}

// width="150",height="250"
function reSize(){
	window.resizeBy('50','100');
}
```