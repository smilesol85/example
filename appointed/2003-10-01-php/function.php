<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>function</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'function';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                function longdate($timestamp){
                    return date('1 F jS Y',$timestamp);
                }
                echo longdate(time());
                echo '<br>';

                // 지역 변수
                function localVar(){
                    $temp = 'test';
                }

                // 전역 변수 - global
                global $is_logged_in;

                // 고정 변수 - static
                function staticvar(){
                    static $int = 0;
                    static $int = 1;
                    // static $int = 1 + 2; 해석 불가 오류 발생
                    echo $int;
                }
                staticvar();  // 1
                echo '<br>';

                // 슈퍼 전역 변수
                $GLOBALS;  // 현재 스크립트의 전역 범위 안에 정의된 모든 변수, 변수 이름은 배열의 키                
                $x = 10;
                $y = 20;
                echo $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
                echo '<br>';

                $_SERVER;  // 헤더, 패스, 스크립트 위치 등에 관한 정보, 이 배열의 엔트리는 웹 서버가 만들지만 모든 웹 서버가 동일하게 일부나 전체 정보를 제공하리라는 보장은 없다.
                echo $_SERVER['PHP_SELF'];
                echo '<br>';
                echo $_SERVER['SERVER_NAME'];
                echo '<br>';
                echo $_SERVER['HTTP_HOST'];
                echo '<br>';
                echo $_SERVER['HTTP_REFERER'];
                echo '<br>';
                echo $_SERVER['HTTP_USER_AGENT'];
                echo '<br>';
                echo $_SERVER['SCRIPT_NAME'];
                echo '<br>';

                $_REQUEST;  // // 브라우저에서 전달되는 정보 내용, 기본적으로 $_GET, $_POST, $_COOKIE
                $name = $_REQUEST['fname']; 
                echo $name;
                ?>

                <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                Name: <input type="text" name="fname">
                <input type="submit">
                </form>

                <hr>

                <?php
                echo strrev('abcd');  // 문자열 반전
                echo '<br>';
                echo str_repeat('abcdefg,',3);  // 문자열 반복
                echo '<br>';
                echo strtoupper('abcd');  // 대문자로 변환
                echo '<br>';
                ?>

                <?php
                echo fix_name('abc','def','ghi');
                function fix_name($name1, $name2, $name3){
                    $name1 = ucfirst(strtolower($name1));
                    return $name1;
                }
                echo '<br>';
                ?>

                <?php
                $a = 'abc';
                $b = 'def';
                $c = 'ggg';
                echo $a . $b . $c.'<br>';

                fix_name2($a, $b, $c);
                function fix_name2(&$n1, &$n2, &$n3){
                    $n1 = ucfirst(strtolower($n1));
                    $n2 = ucfirst(strtolower($n2));
                    $n3 = ucfirst(strtolower($n3));
                }
                echo $a . $b . $c.'<br>';
                ?>

            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>