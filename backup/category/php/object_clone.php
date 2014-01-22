<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>object clone</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'object clone';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                // 클래스 정의
                class User{
                    public $name;
                }

                // 객체 생성
                $object = new User();
                $object -> name = 'sol';
                
                $object2 = $object;
                $object2 -> name = 'mike';
                echo 'object name : '.$object -> name.'<br>';  // mike
                echo 'object2 name : ' .$object2 -> name.'<br>';  // mike

                $object3 = clone $object;
                $object3 -> name = 'jessica';
                echo 'object3 name : ' .$object3 -> name.'<br>';  // jessica
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>