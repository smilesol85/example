---
layout: post
title: grunt and bower
categories: [etc]
tags: [grunt, bower]
fullview: false
---

## javascript build 도구 grunt!!  
task runner인 grunt를 사용하는 이유는 단순 반복 작업시 우리의 실수를 줄여줄 수 있다.  
grunt는 0.4부터 grunt-cli를 전역으로 설치하고, 프로젝트별로 grunt를 설치해야 한다.  
grunt 사용을 위해 node가 설치되어 있어야 한다.  
	
	# node -v

설치되어 있다면 version을 확인할 수 있다.  
	
	// CLI(Command Line Interface)
	# npm install -g grunt-cli
	# npm install -g grunt-init
	
	// in project folder
	# npm install grunt
	
	// version
	# grunt --version
	# grunt-init --version
	
	// in project folder
	// grunt와 플러그인 설치와 동시에 package.json과 연동
	// 이 구문을 실행시키면 node_modules 폴더와 파일들이 생성되는것을 알 수 있다.  
	// 또한  package.json 파일에  devDependencies 항목이 추가된다.  
	# npm install grunt --save-dev
	# npm install grunt-contrib --save-dev 

`npm install -production`을실행하면 `--save-dev` 로 저장된 패키지는 설치되지 않는다.

기본 사항들과 작업자가 사용할 grunt 관련 플러그인 들을 나열하는 `package.json`을 생성해야 한다.  
	
	// package.json 생성
	# npm init

### grunt-contrib-uglify  
uglify는 파일의 용량을 축소할 수 있는 플러그인이다.  
	
	// package.json 에  "grunt-contrib-uglify": "~0.2.7" 자동으로 추가
	# npm install grunt-contrib-uglify --save-dev

### compass를 찾을 수 없다고 하는 경우  
	
	# ruby -v
	# compass -v
	# sass -v
	
	# sudo gem update -system
	# sudo gem install compass

### package.js 분석  
	
	{
		"name": "grunt1",
		"version": "0.0.0",
		"description": "",
		"main": "Grunt.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"author": "smilesol85",
		"license": "smilesol85"
	}

### Grunt.js 분석  
grunt.initConfig 하위에 uglify 등은 Task(할일)들이다.  
Task는 npm install 을 통해 위에서 설치 가능하다.  
grunt.loadNpmTasks 정의하면 사용할 수 있다.  
option은 각 Github 페이지에 가서 Documentation 에서 확인 가능하다.  
dist에 대해서 알아보자.  
src(원본) 을 작업해서 dest (결과) 로 만들어 준다.  
파일 이름은 [] 배열로 여러개 지정하거나 <%= %> 등의 템플릿 기능을 이용해  
다른 작업의 결과물을 뽑아 올 수도 있다.  
폴더 내에 모든 파일을 대상으로 하고싶다면 `src: ['public/javascripts/**/*.js']`와 같이 사용하면 된다.  

Task 들을 그룹지어 grunt로 실행할 Task를 정의한다.  
	
	# grunt.registerTask('default', ['uglify']);
	# grunt.registerTask('a', ['uglify', 'watch']);
	
	// default
	# grunt
	
	// uglify, waych
	# grunt a


## bower setting  
프로젝트 시작시 반복적인 셋팅이 싫다!!  
	
	// easy to install
	$ npm install -g bower
	
	// 사용법 및 커멘드 목록
	$ bower
	$ bower help
	
	// bower.json 생성: 프로젝트 설정
	$ bower init
	
	// global setting file
	// {"directory": "vendor"}
	$ bowerrc
	
	// install
	$ bower install angular
	$ bower install jquery
	$ bower uninstall jquery
	
	// 설치된 library 모두 update
	$ bower update
	
	// library 검색
	$ bower search jquery
	
	// 일치하는 library 보기
	$ bower lookup jquery