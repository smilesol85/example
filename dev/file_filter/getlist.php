<?php
class GetFile{
	// 숫자 폴더 필터
	function getFolderNum(){
		$pathRoot = './';  // root 경로
		$pathRoot = opendir($pathRoot);
		while($file = readdir($pathRoot)){
			if(is_dir($file) == true){
				$splitFolder = split('_',$file);
				if(is_numeric($splitFolder[0])){
					$arrRootFolderNum[] = $file;
				}
			}
		}
		sort($arrRootFolderNum,SORT_STRING);
		$this -> changeJsonFolder($arrRootFolderNum);
		closedir($pathRoot);
	}

	// json 숫자 폴더
	function changeJsonFolder($arrRootFolderNum){
		$nFolder = count($arrRootFolderNum);
		$jsonFolder = json_encode($arrRootFolderNum);
		echo "<script>var jsonFolder = $jsonFolder;</script>";

		$this -> getFilePhp($arrRootFolderNum, $nFolder);
	}

	// 숫자 폴더내 php 파일 및 전체 파일 필터
	function getFilePhp($arrRootFolderNum, $nFolder){
		for($i = 0; $i < $nFolder; $i++){
			$pathRootFolder = $arrRootFolderNum[$i];  // folder 경로
			$pathRootFolder = opendir($pathRootFolder);
			while($fileSection = readdir($pathRootFolder)){
		 		if($fileSection == '.' || $fileSection == '..' || $fileSection == '.svn'){
		 			continue;
		 		}
		 		$arrFile[$i][] = $fileSection;

				$full_filename = explode(".", "$fileSection");
				$extension = $full_filename[sizeof($full_filename)-1];
		 		if(!strcmp($extension,"php")){
					$arrPhpFile[$i][] = $fileSection;
				}
		 	}
			closedir($pathRootFolder);
		}
		// json 폴더내 모든 파일
		$jsonFile = json_encode($arrFile);
		echo "<script>var jsonFile = $jsonFile;</script>";

		// json 폴더내 php 파일
		$jsonPhpFile = json_encode($arrPhpFile);
		echo "<script>var jsonPhpFile = $jsonPhpFile;</script>";
	}
}

$oGetRootFile = new GetFile;
$oGetRootFile -> getFolderNum();
?>