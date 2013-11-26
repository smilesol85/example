#git?

1. [SVN과 GIT의 차이](#svn_git)  
1. [GIT의 로컬에서는 무슨 일이?](#local_computer)  
1. [용어](#word)  
1. [윈도우에 GIT 설치](#setup)  
1. [git 설치 후 사용하려면?](#use)  
1. [로컬 저장소에서 작업 완료 후 원격 저장소에 반영하기](#local)  
1. [로컬에서 새로운 branch 생성 후 작업하기](#branch)  

> git은 `분산 버전 관리 시스템(Distributed Version Control System, DVCS)`이다.  

*SVN과 같은 버전 관리 시스템(Version Control System, VCS)을 사용하는 이유 중 하나는  
	특정 파일에 대한 `히스토리를 생성하고 관리하기 위해서이다`.*  

##<a href="#" name="svn_git">SVN과 GIT의 차이</a>  
*SVN - 네트워크 영향을 받기 때문에 느리다.*  
`GIT - 로컬에서 작업되기 때문에 훨씬 빠르다.`  
*SVN - 네트워크가 끊기면 원격 저장소 접근이 어려워 히스토리 관리가 안된다.*  
`GIT - 네트워크가 끊겨도 로컬 저장소로 버전 관리가 가능하다.(원격 저장소에 대한 의존성이 없어진다.)`  
*SVN - commit에 부담을 갖는다.*  
`GIT - 로컬에서만 작업이 이루어지기 때문에 commit에 부담이 없다.`  
*SVN - 원격 저장소가 폭발해 버리면 복원이 어렵다.*  
`GIT - 원격 저장소가 폭발해 버려도 로컬 저장소 사본 유지로 작업에 지장이 없다.(모든 사용자는 완벽한 복사본을 가지게 된다.)`  

##<a href="#" name="local_computer">GIT의 로컬에서는 무슨 일이?</a>  
* 작업트리(working dir)  
	작업트리는 저장소를 바라보는 자신의 현재 시점을 말하며,  
	모든 변경은 작업트리에서 이루어진다. 즉, 우리가 작업하는 위치이며, 모든 파일을 가지고 있다.  
	로컬 컴푸터의 작업트리에는 .git/ 이라는 디렉토리에 존재한다.  
	.git/ 디렉토리에서는 모든 히스토리를 저장한다.      
	이로 인해 저장소의 수정 내용을 서버의 저장소와 통신 없이 확인 가능한 것이다.  
* 스테이지 또는 인덱스 공간  
	로컬 저장소에 저장하기 전 꼭 거쳐야 하는 공간이다.  
* 로컬 저장소. 즉, 최종 코드 저장소(HEAD)  

##<a href="#" name="word">용어</a>  
* 저장소(repository)  
	사용자가 변경한 모든 내용을 추적 가능한 공간이다.  
	저장소는 히스토리에 따른 모든 버전을 모두 가지고 있다.  
	저장소를 다른 곳으로 복사하여도 히스토리도 같이 복사되어 완벽한 저장소를 유지한다.  
* 분기(branch)  
	모든 분기는 master branch에서 이루어 진다.  
	branch가 만들어진 시점부터 적용된 commit만 추적한다.  
* 커밋(commit)  
	모든 히스토리를 로컬 저장소로 commit 할 수 있다.  
* 오리진(origin)  
	git이 복사해 온 저장소를 가리키기 위해 기본적으로 사용하는 이름이다.  
	서버의 별명 정도로 기억하면 되겠다.  

##<a href="#" name="setup">윈도우에 git 설치</a>  
1. [msysgit 설치](https://code.google.com/p/msysgit/downloads/list "msysgit 설치")  
	이제 git을 사용할 수 있다.  
	조금 더 편리하고 익숙한 UI이로 사용하기 위해 아래 tortoiseGIT을 설치해 보자.  
1. [tortoiseGit 설치 - window 탐색기 존재 필수](https://code.google.com/p/tortoisegit/ "tortoiseGit 설치")  
	윈도우 탐색기에서 클릭만으로 편리하게 사용 가능하다.  

##<a href="#" name="use">git 설치 후 사용하려면?</a>  
* GUI Clients 사용([GUI Clients 리스트](http://git-scm.com/downloads/guis "GUI Clients로 이동"))  
	특정 OS에서만 사용 가능한 GUI이므로 OS에 제한이 있다.  
* console환경에서 사용  
	명령어들을 외워야 하는 불편함이 있으나 OS 제한 없이 사용 가능하다.  

##<a href="#" name="local">로컬 저장소에서 작업 완료 후 원격 저장소에 반영하기</a>  
		
```javascript
// 저장소로 사용하고자 하는 디렉토리를 생성한다.
// 탐색기에서 직접 디렉토리를 생성해 줘도 된다.
> mkdir 디렉토리명

// 로컬 저장소로 사용하기 위해 생성한 디렉토리로 이동 후 해당 디렉토리를 로컬 저장소로 사용하겠다고 선언한다!
// 로컬 저장소로 설정되면 비밀디렉토리로 모든 히스토리가 저장되는 ./git 이라는 디렉토리가 생성된다.  
> git init

// 로컬 저장소에서 작업이 완료되면 원격 저장소로 push해 줘야 한다.
// 저장하고자 하는 원격 저장소의 등록이 필요하며, 해당 저장소로 push되게 된다.
> git remote add origin ssh 주소 입력
> git remote -v

// init 과 remote 작업을 한번에 처리하는 방법이 있다.
// 원격 저장소의 모든 파일 및 히스토리를 복사해 온다.
> git clone git://github.com/저장소/경로

// 원격 저장소에 있는 파일을 복사해 올 때 pull 명령을 사용하게 된다.
// pull 명령은 fetch, merge 작업을 한다다.
// fetch는 원격 저장소에 있는 내용을 가지고만 온다.  
// pull 원격 저장소에 있는 내용을 가지고 오는 동시에 merge까지 한다.  
> git pull origin master

// 사용자 정보를 등록 해야한다! 등록한 사용자로 로그가 남게 된다.
> git config --global user.name '사용자 이름'
> git config --global user.email '사용자 이메일'

// 등록한 사용자 정보 확인이 가능하다.
> git config --list

// 생성한 로컬 저장소를 삭제하고 싶은 경우 ./git 디렉토리를 삭제한다.
> rm -rf .git

// 로컬 저장소 파일의 상태가 어떤지 확인이 가능하다.
> git status

// 원하는 작업을 한다.
// 파일 추가 및 삭제, 수정 등

// 작업 중 특정 파일을 이전 파일로 돌아갈 수 있다.
> git checkout 파일명

// 작업트리에서 작업이 완료되었다면 스테이지에 추가 후 최종 로컬 저장소에 저장해 주면 된다.

// 작업트리에서 스테이지로 가라!
// 로컬 저장소에 commit할 준비가 된 것이다.
> git add 파일명

// 스테이지 상태에서 commit 해야 하는데 commit 하고 싶지 않은 파일이 있는 경우
// 스테이지 상태에서 해지하고 작업트리 상태에만 유지하도록 할 수 있다.
> git reset HEAD 파일명

// 스테이지 상태에 있는 파일들을 로컬 저장소에 최종으로 저장하기 위한 작업을 한다.
// commit하게 되면 로그 및 diff 확인이 가능하다.
// -m 옵션으로 로그 메세지를 남길 수 있다.
> git commit -m '로그 메세지'

// 최종 commit 로그를 수정할 수 있다.
> git commit --amend -m '수정할 내용'

// commit 이후에 이전 commit 상태로 돌아가고 싶을때가 있다.
// 이전 commit 상태로 돌아간 후 재 commit 한다.
> git revert HEAD
// 지정한 $id로 commit 상태로 돌아간 후 재 commit 한다.
> git revert $id

// commit한 로그을 확인이 필요할 때가 있다.
> git log
// 로그 확인시 수정된 상세 내용까지 알고 싶다면..
> git log -p
// 로그 확인시 로그의 특정 개수만 알고 싶다면..
> git log -5
// 로그 확인시 상세 내용 및 특정 개수만 알고 싶다면..
> git log -p -2

// 이전 버전과 diff 내용을 확인하고자 한다면..
> git diff $id

// 특정 파일을 삭제하고 싶다면..
// 파일 삭제 후 추적하지 않는 상태로 만든다.
// 탐색기에서 삭제할 경우 삭제 되었다고 알려줘야 한다.
> git rm 파일명

// 특정 파일의 파일명을 변경하고자 할 때가 있다.
> git mv 현재파일명 변경파일명

// 로컬 저장소에서 더이상 수정할 내용이 없으며, 원격 저장소에 반영하고자 한다면 한가지 작업만이 남았다.
> git pull origin master
```

##<a href="#" name="branch">로컬에서 새로운 branch 생성 후 작업하기</a>  
master라는 branch에서 작업시 원본 파일을 훼손할 우려가 있다.  
따라서, master branch는 유지하고 상황에 따라 branch를 새로 생성하여 작업하는 것을 습득해 보자.  
		
```javascript
// 현재 branch 리스트를 확인할 수 있다.
> git branch

// new 라는 branch를 생성해 보자.
> git branch new

// 생성된 new branch로 이동해 보자.
> git checkout new

// 이제 new라는 branch에서 작업한 내용은 master branch와 별도로 작업이 가능하다.
// 여러 작업 후 작업된 내용을 로컬 저장소에 commit까지 한다.

// new라는 branch에서 작업이 끝나고 원격 저장소에 반영하고자 한다면..
// 다시 원본이 있는 master라는 branch로 이동한다.
> git checkout master

// new라는 branch에서 수정된 내용을 master라는 branch로 병합한다.
> git merge new

// master라는 branch에 병합이 되었다면 원격 저장소에 반영할 차례다.
> git pull origin master

// 병합이 끝나고 new 라는 branch를 더이상 사용하지 않는다면 branch를 삭제한다.
> git branch -d new

```