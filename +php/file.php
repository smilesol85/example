<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>file</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'file';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                // 파일 존재 여부 검사
                if(file_exists('array.php')){
                    echo 'file exists';
                }else{
                    echo 'oooops';
                }
                echo '<br>';

                // 파일 생성
                $fh = fopen('testfile.txt', 'w') or die('fail');
                $text = <<< _END
                Line 1
                Line 2
                Line 3
_END;
                fwrite($fh, $text) or die('counld not write to file');
                fclose($fh);
                echo "file 'testfile.txt' written successfully";
                echo '<br>';

                // 파일 읽기
                $fh2 = fopen('testfile.txt', 'r') or die('file does not exist or lack');
                $line = fgets($fh2);  // fgets의 s는 string을 의미한다. 한 줄을 통째로 불러온다.
                fclose($fh2);
                echo $line;
                echo '<br>';

                $fh3 = fopen('testfile.txt', 'r') or die('file does not exist or lack');
                $line2 = fread($fh3, 20);
                fclose($fh3);
                echo $line2;
                echo '<br>';

                // 파일 복사
                //copy('testfile.txt', 'testfile2.txt') or die('could not copy file');
                echo 'successfully';
                echo '<br>';

                // 파일 이동
                //rename('testfile2.txt', 'testfile3.txt') or die('');
                echo 'successfully';
                echo '<br>';

                // 파일 삭제
                unlink('testfile3.txt') or die('');
                echo 'successfully';
                echo '<br>';

                // 파일 갱신

                // 전체 파일 읽기
                echo file_get_contents('testfile.txt');
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>