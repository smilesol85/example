---
layout: post
title: github+jekyll+disqus 조합으로 블로그 셋팅하기
categories: [etc]
tags: [github, jekyll, blog]
fullview: false
---

결론부터 말하자면,  
해당 방법이 '블로깅하는데 최선의 방법이다!'라고 말하는건 아니다.  
각자의 성향에 맞게 사용하면 되는 것이고 이런 방법도 있구나라는 정도만 전달하고 싶다.  

많은 개발자들이 경력이 쌓이면서 블로그 운영에 관심을 갖게 되는 것을 본다.  
여러 블로그 서비스를 경험하면서 개발자의 조건을 충족하지 못하고 불편함을 느껴 중간에 운영을 그만 두는 모습을 많이 보게된다.  

나 또한 마찬가지이다.  
여러 서비스를 경험하면서 정착하지 못하고 떠돌아 다니다가 포스트를 중지하는 일이 많았다.  
그러다가 작년 초부터 버전 관리 시스템인 [git](http://git-scm.com/ "git")을 접하면서 [github](https://github.com/ "github") 서비스를 이용하게 되었다.  
그러던 중 [github](https://github.com/ "github")에서 무료로 서비스하는 웹호스팅 서비스인 [pages](http://pages.github.com/ "github pages")를 활용하여 블로그 운영을 할 수 있다라는 것을 알게 되었다.  
바쁜 일들이 지나가면 [github](https://github.com/ "github")의 코드들을 정리하고 블로그 운영을 위한 셋팅을 해보기로 마음먹은 것이  
새해를 넘기고 이제서야 셋팅하게 되었다.  

기존에 코드 및 마크다운 파일을 잘 정리해 놓은 사용자라면 [jekyll](https://github.com/jekyll/jekyll "jekyll")을 이용하여 블로그를 쉽게 생성하고 운영할 수 있다.  
설치 후 원하는 스타일로 수정 가능하며 이미 멋지게 디자인 된 테마를 적용하여 바로 포스팅이 가능하다.  

##jekyll 특징  
- Linux, Unix, Mac OS X 3가지 운영체제만 지원한다.  
- 루비 언어로 만들어진 도구이다.
- 정적인 페이지를 만드는 도구이다.  
- 동적인 페이지가 없기 때문에 DB가 필요없다.  
- 도구가 단순하여 확장이 쉽다.  
- 코멘트 기능은 [disqus](http://disqus.com/ "disqus")나 [Facebook Comments](https://developers.facebook.com/docs/plugins/comments "Facebook Comments")를 이용하면 된다.  

##jekyll 설치  
- [RubyGems](http://rubygems.org/ "RubyGems") 설치 (리눅스 배포버전에 대부분 포함되어 있다.)  
- `sudo gem install jekyll`  
- `jekyll new folder_name`  
- folder_name으로 생성된 폴더를 push  

push하게 되면 셋팅은 끝난다.  
[jekyll theme](http://jekyllthemes.org/ "jekyll theme")의 테마 파일을 이용해서 원하는 스타일만 변경 후 포스팅 하는 방법도 있다.  
github에 수북히 쌓여 있는 파일들은 새로 생성된 폴더(folder_name)의 `_post` 폴더로 옮기기만 하면 기존 코드들도 전부 살리면서 포스팅 할 수 있겠다.  

참고로 `_post` 폴더 내에는 포스트를 원하는 파일을 추가하면 되며,  
파일 이름은 `년도-월-일-포스트명.md` 형식으로 추가하면 된다.  
확장자는 꼭 .md가 아닌 .html도 상관없다.  

##disqus를 활용하여 코멘트 기능 달기  
위에서 언급했듯이 코멘트 기능으로 disqus를 활용하는 방법이 있어 알아보도록 하겠다.  
방법은 매우 간단하다.  

- [disqus](http://disqus.com/ "disqus")로 이동  
- 회원가입  
- Add Disqus to Your Site 버튼 클릭  
- Dashboard > setting 에서 입력하고자 하는 정보 저장  
- Dashboard > setting > Install > Universal Code 선택 후 생성되는 코드 복사  
- 복사한 코드를 내 블로그에서 코멘트 기능을 달고자 하는 부분에 추가  
- 끝!  

##disqus의 장점  
소셜 코멘트로 도구로 방대한 블로거들이 사용하고 있으며,  
사용자들은 disqus 계정이 없이도 코멘트를 남길 수 있다.  
기존에는 어느 포스트에 어느 코멘트를 남겼는지 잊어버리고 지나가는 경우가 많았다면,  
어느 포스트에 어떠한 코멘트가 남겨졌는지 확인이 가능하며, 소셜 네트워크 서비스로 공유가 가능하여  
풍부한 상호작용을 할 수 있는 강력한 코멘트 도구이다.  