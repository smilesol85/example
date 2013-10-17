<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>include</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'include';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                //include 'multiple_line.php';
                include_once 'multiple_line.php';  // include 로 동일한 파일이 여러번 로드되는 것을 방지할 수 있다. _once()가 붙으면 한번만 실행한다는 의미이다.

                $num = 0;
                if($num == 0){
                    include 'multiple_line.php';
                }else{
                    //require ‘b.php’;
                    require_once 'multiple_line.php';  // _once()가 붙으면 한번만 실행한다는 의미이다.
                }
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>