<?php
include 'info.php';

// return result array
$jsonEncode = json_encode(array('result' => true, 'file' => $_REQUEST['file']));
echo $jsonEncode;

$test = 'aaaaa';
$file = '';

$db = new mysqli($servername, $username, $password, 'photo-house');
$query = "insert into info (id, name, tag, meta)
        values(
            '0',
            '".$jsonEncode."',
            'c',
            'd'
        )";

$db->query($query);


    // // date 변수에 time함수에서 값을 뽑아내어 저장합니다.
    // // $date = date("YmdHis", time());
    // $date = 'testdate';
    //
    // // 디렉토리의 경로입니다.
    // $dir = "./files/";
    //
    // // 이제 해시값을 만들기 위해 file_hash 변수에 'date변수+파일제목'을 입력합니다.(date는 같은 파일제목일 경우 해시값 중복을 피하기 위해)
    // $file_hash = $date.$_FILES['file']['name'];
    //
    // // $file_hash의 값을 md5 함수를 통해 해시화 시킵니다.
    // $file_hash = md5($file_hash);
    //
    // // 실제 파일이 업로드 되는 경로입니다.
    // $upfile = $dir.$file_hash;
    //
    // // 업로드 파일은 임의의 파일명으로 임시로 저장됩니다. 그 파일의 유무를 판단
    // // if(is_uploaded_file($_FILES['file']['tmp_name']))
    // // {
    //             // 실제 upfile 위치에 임시파일을 복사합니다. 에러발생시 echo문이 실행됩니다.
    // //         if(!move_uploaded_file($_FILES['file']['tmp_name'], $upfile))
    // //         {
    // //                 echo "upload error";
    // //                 exit;
    // //         }
    // // }
    //
    // // 업로드된 파일의 정보를 저장하기 위해 DB 연결
    // @ $db = new mysqli($servername, $username, $password, 'photo-house');
    //
    // // DB 연결시 에러 발생하면 이 if문이 실행된다.
    // if(mysqli_connect_errno())
    // {
    //     echo "DB error";
    //     exit;
    // }
    //
    // $query = "insert into info (id, name, tag, meta)
    //           values('a', '".$_FILES['file']['name']."',
    //           '".$file_hash."', '".$date."')";
    //
    // // DB에 쿼리를 날리고 그 결과를 result에 저장
    // $result = $db->query($query);
    //
    // // result 값이 NULL이라면 문제가 발생했음으로 if문 실행
    // if(!$result)
    // {
    //     echo "DB upload error";
    //     exit;
    // }
    //
    // // 더 이상 DB를 사용할 일이 없으므로 연결을 해제한다.
    // $db->close();
    //
    // echo "<script>alert('업로드 성공');";
    // echo "history.back();</script>";

?>
