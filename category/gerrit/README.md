#gerrit?  
[https://code.google.com/p/gerrit/](https://code.google.com/p/gerrit/)  

> gerrit은 구글에서 만들어 사용하고 있는 웹 기반의 코드 리뷰 툴이다.  

1. [gerrit rule](#rule)
1. [gerrit 설치 전 필요한 놈들](#setup)  
1. [gerrit 설치](#setup_gerrit)  
1. [코드 리뷰 소프트웨어](#software)  

##<a href="#" name="">gerrit rule</a>
* +2, +1, 0, -1, -2 와 같이 5개의 포인트가 있다.  
* +2 포인트를 부여한다면 summit을 하여 git에 머지한다.  
* -1, -2 포인트를 부여 받았다면 코드 수정 후 다시 gerrit으로 push한다.  

###테스터 시나리오  
* 신규 리뷰가 되었다면 코드 수정된 내용을 로컬 저장소로 머지한다.  
* 테스트 후 문제가 있다면 -1 포인트를 부여하고 코멘트를 남긴다.  
* 잘 동작 한다면 +1 포인트를 부여한다.  

###리부어 시나리오  
* 신규 리뷰가 되어 확인 후 테스터가 +1 포인트를 부여했다면 리뷰를 한다.
* 코드에 문제가 있다면 -2 포인트를 부여한다.  
* 코드에 문제가 없다면 +2 포인트를 부여한다.  

##<a href="#" name="setup">gerrit 설치 전 필요한 놈들</a>  
* JDK(Java Developer Kit) version 1.6 이상 설치  
	1. OS에 맞는 JDK를 다운로드 후 설치한다.  
	[JDK 다운로드](http://www.oracle.com/technetwork/java/javase/downloads/index.html JDK 다운로드)  
	2. 설치 완료 후 정상 설치 됐는지 커멘드 창에서 확인한다.  
	`> java -version`  

* Database 셋팅 : H2(gerrit 내장), MySQL, PostgreSQL  

##<a href="#" name="setup_gerrit">gerrit 설치</a>  
gerrit 설치 진행시 데이터를 저장할 database와 인증방법을 선택해야 한다.  
1. [gerrit 다운로드](http://gerrit-releases.storage.googleapis.com/index.html "gerrit 다운로드")  
1. `> java -jar 다운받은gerrit.war경로 init -d 설치경로`  

##<a href="#" name="software">코드 리뷰 소프트웨어</a>  
* [mondrian](https://code.google.com/p/rietveld/downloads/detail?name=Mondrian2006.pdf "mondrian")  
* [rietveld](https://code.google.com/p/rietveld/ "rietveld")  
* [phabricator](http://phabricator.org/ "phabricator")  
* [reviewBoard](http://www.reviewboard.org/ "reviewBoard")  
* [barkeep](http://getbarkeep.org/ "barkeep")  
* [rhodeCode](https://rhodecode.com/ "rhodeCode")  
* [gerrit](https://code.google.com/p/gerrit/ "gerrit")
* [gerritForge](http://gerritforge.com/ "gerritForge")  