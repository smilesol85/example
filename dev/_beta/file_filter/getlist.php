<?php
// TO DO
/*
- branches가 있는지 || trunk
- css json
*/

$pathRoot = './';  // root 경로

class GetFile{
	// 폴더 필터
	function getFolder(){
		global $pathRoot;
		$pathRoot = opendir($pathRoot);
		while($file = readdir($pathRoot)){
			if(is_dir($file) == true){
				// '_' 기준으로 숫자로 시작하는 놈들만 필터
				$splitFolder = split('_',$file);
				if(is_numeric($splitFolder[0])){
					$arrRootFolderNum[] = $file;
				}
			}
		}
		sort($arrRootFolderNum,SORT_STRING);
		$nFolder = count($arrRootFolderNum);
		$this -> changeJsonFolder($arrRootFolderNum);
		$this -> getFiles($arrRootFolderNum, $nFolder);
		closedir($pathRoot);
	}

	// 필터된 폴더 JSON으로 할당
	function changeJsonFolder($arrRootFolderNum){
		$jsonFolder = json_encode($arrRootFolderNum);
		echo "<script>var jsonFolder = $jsonFolder;</script>";
	}

	// 필터된 폴더내의 php 파일 및 기타 파일 필터
	function getFiles($arrRootFolderNum, $nFolder){
		for($i = 0; $i < $nFolder; $i++){
			// 폴더별 할당
			$pathRootFolder = $arrRootFolderNum[$i];
			$pathRootFolder = opendir($pathRootFolder);
			while($fileSection = readdir($pathRootFolder)){
		 		if($fileSection == '.' || $fileSection == '..' || $fileSection == '.svn'){
		 			continue;
		 		}
		 		// 모든 파일 필터
		 		$arrFiles[$i][] = $fileSection;

		 		// php 파일 필터
				$full_filename = explode(".", "$fileSection");
				$extension = $full_filename[sizeof($full_filename)-1];
		 		if(!strcmp($extension,"php")){
					$arrPhpFiles[$i][] = $fileSection;
				}
		 	}
			closedir($pathRootFolder);
		}
		$this -> changeJsonFiles($arrFiles);
		$this -> changeJsonPhpFiles($arrPhpFiles);
	}

	// 폴더내 모든 파일 JSON으로 할당
	function changeJsonFiles($arrFile){
		$jsonFiles = json_encode($arrFile);
		echo "<script>var jsonFiles = $jsonFiles;</script>";
	}

	// 폴더내 php 파일만 JSON으로 할당
	function changeJsonPhpFiles($arrPhpFiles){
		$jsonPhpFiles = json_encode($arrPhpFiles);
		echo "<script>var jsonPhpFiles = $jsonPhpFiles;</script>";
	}
}

$oGetRootFile = new GetFile;
$oGetRootFile -> getFolder();
?>
