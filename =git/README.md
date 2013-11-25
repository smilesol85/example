#git?
1. [git 설치 및 활용](#get_setting)  

---
---
---

> git은 C언어로 구현되어 있으며, 분산 버전 관리 시스템(Distributed Version Control System, DVCS)이다. 

*버전 관리 시스템(Version Control System, VCS)을 사용하는 이유 중 하나는  
	어떤 파일에 대한 `히스토리를 생성하고 관리하기 위해서이다`.  
	사용자는 변경 내용의 로그 메시지를 남기고 저장소에 commit 한다.  
	중앙 집중식 저장소이다.*  

**중앙 집중식 저장소의 한계**  
* 사용자는 최신 버전의 코드만 가지고 있다.  
* 수정 내용 확인을 위해 저장소에 정보를 요청해야 한다.  
	즉, 네트워크를 이용하여 원격 저장소로 접근이 필요하다.  

**git의 단점**
* 혼자 단순하게 git을 사용할 경우 svn과의 차이를 느낄 수 없다.  
* svn보다 개념적인 이해가 어려워 많은 조직들이 여전히 svn과 같이 접근이 쉬운 툴로 소스 관리를 한다.  

> 많은 개발사들이 조금식 git을 활용하는 범위가 커지고 있으며, 그 이유는 git의 장점을 정확히 알고 나면  
	최적의 방법으로 코드를 관리하게 될 것이다.  

**git의 장점**  
* 중앙 저장소에 대한 의존성이 없어진다.  
	수정된 내용을 매번 master 저장소에 commit해서 올리는 대신 로컬 저장소를 이용한다.  
	즉, 개발에 따른 잦은 commit에 유연성을 확보할 수 있다.  
	따라서, 보다 안정적인 협업이 이루어 진다.  
* 모든 사용자는 완벽한 복사본을 가지고 있다.  
* 원격 저장소 뿐만이 아닌 로컬 저장소를 복사해 올 수도 있다.  

> svn 작업시 중앙 저장소(서버)에 commit 하기 이전에 완전한 코드를 개발하고 commit하는 방식이다.  
	svn의 commit은 중장 저장소에 내가 개발한 코드를 반영하겠다라는 뜻이다.  
	commit 후 의도치 않은 곳에서 오류가 발생하게 된다면 바로 다른 개발자에게 영향을 미치게 된다.  


> git은 개발자 만의 히스토리를 생성하게 되며, 원격 저장소(서버)와 로컬 저장소(내 컴퓨터)의 독립된 공간으로  
	코드 관리가 가능하다.

**git 작업의 공간?**  
* 원격 저장소(서버)에 원본 파일이 있다.  
* 직접 작업하는 작업트리(working dir)  
	작업트리는 저장소를 바라보는 자신의 현재 시점을 말하며,  
	모든 변경은 작업트리에서 이루어진다. 즉, 모든 파일을 가지고 있다.  
	git에서 작업트리는 로컬 컴퓨터의 디렉토리에 있는 .git/ 디렉토리에 존재한다.  
	이 작업트리로 인해 저장소의 수정 내용을 서버의 저장소와 통신 없이 확인 가능하다.  
* 스테이징이라는 인덱스 공간(index - stage)  
* 로컬 저장소. 즉, 최종 코드 저장소(HEAD)  

**용어**  
* 저장소(repository)  
	사용자가 변경한 모든 내용을 추적 가능한 공간이다.  
	저장소는 히스토리에 따른 다른 버전을 모두 가지고 있다.  
	저장소를 다른 곳으로 복사하여도 히스토리도 같이 복사되어 완벽한 저장소를 유지한다.  
* 분기(branch)  
	모든 분기는 master에서 이루어 진다.  
	branch가 만들어진 시점부터 적용된 commit만 추적한다.  
* 커밋(commit)  
	모든 히스토리를 로컬 저장소로 commit 할 수 있다.  
* 오리진(origin)  
	git이 복사해 온 저장소를 가리키기 위해 기본적으로 사용하는 이름이다.  

---
---
---

##<a href="#" name="get_setting">git 설치 및 활용</a>
1. 사용자 OS에 해당하는 git 다운  
	[http://git-scm.com/downloads](#http://git-scm.com/downloads "git 다운")  
	윈도우에서는 GUI(Graphic User Interface)를 활용하여 git 명령어를 이용할 수도 있다.  
1. `> git congig`
	git을 설치가 끝났다면 사용자 정보 설정해야 한다.  
	commit할 때 해당 정보로 로그가 남게 된다.  

		git config --global user.name 'name'
		git config --global user.email 'email'

1. `> git config --list`  
	git의 사용자 설정 사항을 확인할 수 있다.  
1. `> git init`
	git 저장소로 사용할 폴더 생성 후 폴더로 이동 후 init!    
	해당 폴더에는 .git 이라는 숨겨진 디렉토리가 만들어지게 된다.  
1. '> rm -rf .git'  
	git 저장소를 삭제하고 싶은 경우 ./git 폴더 삭제  
	탐색기에서 폴더를 휴지통에 버려도 된다.  
1. `> git status`  
	저장소에 대한 정보를 확인할 수 있다. (수정 내용 등)  
1. `> git clone git://github.com/저장소/경로`
	저장소를 생성했다면 원격 저장소를 복사해 올 수 있다.  
1. `> git log`  
	commit 로그을 확인 할 수 있다.  
	로그를 최근 5개 까지만 확인 하고 싶을 경우 아래와 같이 사용한다.  

		git log [-p] -5

1. `> git diff 해시코드`  
	이전 파일 버전과 현재 파일 버전의 수정 내용을 확인할 수 있다.  
1. `> git rm 파일명`  
	파일 삭제, 삭제 후 스테이징 상태로 만든다.  
	탐색기에서 삭제할 경우 해당 명열으로 삭제 되었다고 알려 주어야 한다.  
1. `> git add *`
	git의 특징으로 바로 commit하지 않고 스테이지에 등록하는 과정이 필요하다.  
	add 명령으로 파일의 변경을 등록한다.  
	`> git add *` - 전체선택 하여 등록  
	`> git add test.html`  - 특정 파일 선택하여 등록  
	`> git add *.js` - js 파일 전체 선택하여 등록  
1. `> git commit -m 'commit 로그'  
	m 옵션으로 commit 로그를 포함하여 commit할 수 있다.  
	commit 이전에 add 과정이 없었다면 경고가 나타난다.  
	add 과정을 거치지 않고 commit 명령에서 add 과정을 포함할 수 있다.  
	`> git commit -am 'commit 로그'` => 대신 추가된 파일에 대해서는 자동으로 추가해 주지는 않는다.  

*현재까지는 branch를 생성하지 않고 master에서 직접 작업한 내용입니다.  
	master에서는 작업하지 않고 branch를 생성하여 작업 하는 것이 안정적으로 유지보수 할 수 있겠죠?*  

1. `> git branch`
	해당 명령어로 현재의 모든 branch를 확인할 수 있다.  
1. `> git branch new`  
	new라는 branch가 생성된다.  
1. `> git checkout new`  
	생성된 new 라는 branch로 이동할 수 있다.  
	new 라는 branch에서는 어떠한 작업을 하여도 master에는 전혀 영향을 끼치지 않는다.  
1. `> git checkout -b branch_name`  
	해당 명령은 branch 생성 후 바로 checkout도 한다.  
1. `> git checkout file_name`  
	checkout 명령으로 또 다른 일을 할 수 있다.  
	해당 파일의 가장 마지막 commit 버전을 가져온다.  

*이제 새로 생성된 branch에서 master에 병합하고 싶을 것이다!*  

1. `> git checkout master` -> `> git merge new`  
	master에 new의 내용이 병합된다.  
1. `> git branch -d new'  
	이제 필요 없어진 branch를 삭제해도 된다.  

*위의 모든 내용은 내 로컬 저장소에만 저장되 있는 상태입니다.  
	원격 저장소에 반영을 위해 무언가의 작업을 해줘야 한다.*  

1. `> git remote add origin git://github.com/저장소/경로`  
	원격 저장소 등록!  
1. `> git remote`  
	현재 등록된 원격 저장소를 확인할 수 있다.  
1. `> git remote rm 원격저장소`  
	해당 원격저장소를 삭제할 수 있다.  
1. `> git push origin master`  
	origin 이름을 가지고 있는 원격저장소에 변경된 파일을 반영한다.  

*내 로컬 저장소를 원격 저장소에 맞춰 최신으로 업데이트 하는 일도 있다.*  

1. `> git pull`  
	원격 저장소에 최종적으로 commit된 파일이 내 로컬 컴퓨터에 적용된다.  

*이제 소셜 코딩을 위한 github에 빠져 볼까요??*  

> github의 무료 사용자는 public한 레파지토리를 만들어 전체공개로 사용할 수 있으며,  
> 유료 사용자는 private한 레파지토리를 만들어 공개 여부를 설정할 수 있다.  

github.com에서 레파지토리를 생성하게 되면 그 다음에 어떠한 일을 해야 하는지 친절하게 안내해 준다.  
		
	touch README.md
	git init
	git add README.md
	git commit -m 'first commit'
	git remote add origin https://github.com/~~.git
	git push -u origin master

이렇게 하면 github의 원격 저장소로 커밋된 내용이 반영된다.  

---
---
---

**기타 명령어 및 사용법**  
		
	
	// commit 할때 특정 파일은 무시하고 commit 할 수 있다.  
	// .gitignore 파일에 특정 폴더명을 입력 후 저장하면 된다.  

	// 파일 이름 변경하고 히스토리를 유지한다.
	git mv file.html file_name.html

	// 파일을 untracked 상태로 변경(ignore를 빼먹은 경우 사용)
	git rm --cached file_name

	// 마지막 commit 메세지 수정
	git commit --amend -m '수정할 내용'

	// 파일 삭제시 git add * 명령은 파일을 제거할 수 없다.
	// -a 옵션을 사용해야 파일 제거가 적용된다.
	git add -a

	// 파일을 수정하고 아직 add, commit 하지 않았으며 이전 버전으로 돌리고 싶다면...
	git checkout file_name

	// 파일을 수정하고 add, commit 한 상태일 때 이전 버전으로 돌아가고 싶다면...
	git reset HEAD file_name
	git checkout file_name

	// rever 명령으로 commit을 되돌릴 수 있다.
	git revert file_name

	// branch 2개 생성되 있어 branch1에서 file.html을 생성 후 수정하였고,
	// branch2에서 file.html을 생성 후 수정한 뒤 master 저장소로 push 한 후,
	// branch1에서 file.html을 push 하려고 하면 거절한다는 에러가 발생한다.
	// 변경 사항을 master로 받아야 한다.
	git pull origin master

	// 필요없는 commit을 하나의 commit으로 만들 수 있다.
	// 숫자는 5개의 commit을 의미한다.
	// rebase 이후에 git log를 명령해도 commit 메세지는 남아 있어 확인이 가능하다.
	git rebase -i HEAD~5

	// 2개의 branch를 rebase 명령을 이용해 merge할 수 있다.
	// master로 rebase 하기
	git rebase master

	// 누가 생성하고 수정했는지 확인 가능
	git blame file_name

	// 히스토리 통계를 보여준다.
	git log --stat 

	// 문제가 되는 부분을 찾아주고 해당 commit에 diff를 통해서 어떤 코드가 변경되어서 생긴 문제인지 알려준다.
	git bisect

---
---
---

*gh-pages는 github에서 지원하는 서비스이다.*  
서버 호스팅 없이 사용 가능하도록 지원해 준다.  
예를 들어 test라는 저장소를 github에 생성하고 git branch gh-pages라는 커멘드로 branch를 생성하고  
html을 푸시하면 http://{account}.github.com/test로 접속할 경우 gh-pages의 branch로 푸시한 html이 보여지게 된다.   

*gh-pages를 사용하지 않고 정적 페이지 생성 방법*  
{account}.github.com 저장소를 생성해 gh-pages를 사용하지 않아도 github 시스템이 자동으로  
{account}.github.com 이라는 도메인으로 해당 저장소에 있는 정적 html을 웹페이지 서비스를 제공해 준다.  

---
---
---