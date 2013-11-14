# media
1. [video](#video)
1. [audio](#audio)
1. [track](#track)

## <a href="#" name="video">video</a>
**[github.io](http://smilesol85.github.io/html-css/media/video.html "video")**

    <video preload controls autoplay loop poster="" width="300" height="150">
        <source src="#" type="video/mp4" />
        <source src="#" type="video/ogv" />
    </video>

> 속성 : preload, controls, autoplay, loop, poster, width, height  
> source 태그는 브라우저마다 지원하는 확장자 형식이 다르기 때문에 사용한다.

모든 브라우저를 지원하지 않기 때문에 source 태그로 `mp4`, `ogv` 확장자 또는 `mp4`, `WebM` 확장 파일을 사용한다.  
모든 브라우저에서 사용 가능한 video.js 플러그인이 있다.  
[video.js 플러그인](http://videojs.com/ "video.js 플러그인")

head 태그에 아래 2줄을 추가해야 한다.

    <!-- video 태그의 class 에는 class="video-js vjs-default-skin" data-setup="{}" 을 추가해 주면 된다. -->
    <link href="http://vjs.zencdn.net/c/video-js.css" rel="stylesheet">
    <script src="http://vjs.zencdn.net/c/video.js"></script>

## <a href="#" name="audio">audio</a>
**[github.io](http://smilesol85.github.io/html-css/media/audio.html "audio")**

    <audio preload controls="controls" autoplay="autoplay" loop>
        <source src="#" type="audio/mp3" />
        <source src="#" type="audio/ogg" />
    </audio>

> audio 태그의 속성중 controls 및 autoplay 등의 속성은 줄여서 `controls autoplay`와 같이 사용 가능하다.  
> source 태그는 브라우저마다 지원하는 확장자 형식이 다르기 때문에 사용한다.

보통 `mp3`와 `ogg` 확장자이면 거의 모든 브라우저는 지원 가능하다.

    <source src="" type="audio/mp3" />
    <source src="" type="audio/ogg" />

타입은 생략 가능 하지만, 브라우저가 음악 파일을 내려받은 뒤 재생 가능한 파일인지 확인이 필요하므로 트래픽이 낭비된다.  
따라서 타입 속성을 사용하는 것이 좋다.

> MP3 라이센스 때문에 5000번 이상 재생한 MP3 파일은 2500달러를 내야 한다.  

## <a href="#" name="track">track</a>
**[github.io](http://smilesol85.github.io/html-css/media/track.html "track")**

> track 태그는 video 태그에 자막을 표시할 때 사용한다.

확장자는 .srt 로 저장 형식을 모든 파일로 선택 후 강제 지정해야 한다.

    <video width="400" height="100" controls="controls"> 
        <source src="test.mp4" type="video/mp4" /> 
        <source src="test.webm" type="video/webm" /> 

        <track kind="subtitles" src="track.srt" srclang="ko" label="Korean" /> 
        <track kind="subtitles" src="track.srt" srclang="en" label="English" /> 
        <track kind="subtitles" src="track.srt" srclang="jp" label="Japanese" /> 
        <track kind="subtitles" src="track.srt" srclang="ch" label="Chinese" /> 
    </video>

**track.srt**

    1
    00:00:00,000 --> 00:00:03,000
    <h1>동영상 입니다.</h1>
    <p>자막 자막 자</p>

    2
    00:00:03,000 --> 00:00:10,000
    <p>자막 자막 자</p>

> 반드시 빈줄 다음에 다음 자막 파일을 만들어야 한다.  

현재 사용 가능한 브라우저는 없으며 [video.js plug-in](http://videojs.com/ "video.js plug-in")를 이용하면 된다.