#gerrit?
1. [gerrit 설치 전 필요한 놈들](#setup)  
1. [gerrit 설치](#setup_gerrit)  
1. [코드 리뷰 소프트웨어](#software)  

> gerrit은 웹 기반의 코드 리뷰를 위한 툴이다.  

##<a href="#" name="setup">gerrit 설치 전 필요한 놈들</a>  
gerrit 설치 진행시 데이터를 저장할 database와 인증방법을 선택해야 한다.  
* JDK(Java Developer Kit) version 1.6 이상 설치  
	1. OS에 맞는 JDK를 다운로드 후 설치한다.  
	[JDK 다운로드](http://www.oracle.com/technetwork/java/javase/downloads/index.html JDK 다운로드)  
	2. 설치 완료 후 정상 설치 됐는지 커멘드 창에서 확인한다.  
	`> java -version`  

* Database 셋팅 : H2(gerrit 내장), MySQL, PostgreSQL  

##<a href="#" name="setup_gerrit">gerrit 설치</a>  
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