---
layout: post
title: github+jekyll로 블로그 셋팅하기
categories: [etc]
tags: [github, jekyll]
fullview: false
---

많은 개발자들이 경력이 쌓이면서 블로그 운영에 관심을 갖게 되는 것을 본다.  
여러 서비스를 경험하면서 개발자의 조건을 충족하지 못하고 불편함을 느껴 중간에 운영을 그만 두는 모습을 많이 보게된다.  

나 또한 마찬가지이다.  
여러 서비스를 경험하면서 정착하지 못하고 떠돌아 다니다가 포스트를 중지하는 일이 많았다.  
그러다가 작년 초부터 버전 관리 시스템인 [git](http://git-scm.com/ "git")을 접하면서 [github](https://github.com/ "github") 서비스를 이용하게 되었다.  
그러던 중 [github](https://github.com/ "github")에서 무료로 서비스하는 웹호스팅 서비스인 [pages](http://pages.github.com/ "github pages")를 활용하여 블로그 운영을 할 수 있다라는 것을 알게 되었다.  
바쁜 일들이 지나가면 [github](https://github.com/ "github")의 코드들을 정리하고 블로그 운영을 위한 셋팅을 해보기로 마음먹은 것이  
새해를 넘기고 이제서야 셋팅하게 되었다.  

기존에 코드 및 마크다운 파일을 잘 정리해 놓은 사용자라면 [jekyll](https://github.com/jekyll/jekyll "jekyll")을 이용하여 쉽게 블로그를 생성하고 운영할 수 있다. 설치 후 원하는 스타일로 수정 가능하며 이미 멋지게 디자인 된 테마를 적용하여 바로 포스팅이 가능하다.  

##jekyll 특징  
- Linux, Unix, Mac OS X 3가지 운영체제만 지원한다.  
- 루비 언어로 만들어진 도구이다.
- 정적인 페이지를 만드는 도구이다.  
- 동적인 페이지가 없기 때문에 DB가 필요없다.  
- 도구가 단순하여 확장이 쉽다.  
- 덧글 기능은 [disqus](http://disqus.com/ "disqus")나 [Facebook Comments](https://developers.facebook.com/docs/plugins/comments "Facebook Comments")를 이용하면 된다.  

##jekyll 설치  
- [RubyGems](http://rubygems.org/ "RubyGems") 설치 (리눅스 배포버전에 대부분 포함되어 있다.)  
- `sudo gem install jekyll`  
- `jekyll new folder_name`  
- folder_name으로 생성된된 폴더를 push  

push하게 되면 셋팅은 끝난다.  
나는 [jekyll theme](http://jekyllthemes.org/ "jekyll theme")를 이용해서 원하는 스타일만 변경 후 포스팅 하고있다.  
기존에 수북히 쌓여 있던 파일들은 새로 생성된 폴더내의 `_post` 폴더로 옮기기만 하면 기존 코드들도 전부 살리면서 포스팅 할 수 있겠다.  

참고로 `_post` 폴더 내에는 포스트를 원하는 파일을 추가하면 되며,  
파일 이름은 `년도-월-일-포스트명.md` 형식으로 추가하면 된다.  
확장자는 꼭 마크다운이 아닌 html도 상관없다.  