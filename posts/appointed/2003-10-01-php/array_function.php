<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>function of array</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'function of array';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                // list()
                list($a, $b) = array('Alice', 'Bob');  // 변수 $a, $b에 각각 Alice, Bob이 할당된다.

                $paper = array('a' => 'aa',
                    'b' => 'bb',
                    'c' => 'cc');

                while(list($item, $description) = each($paper))  // each()는 더 이상 쌍이 없으면 false를 반환한다.
                    echo $item. ':' .$description. '<br>';

                // is_array()
                $fred = array();
                echo is_array($fred);
                echo '<br>';

                // count()
                echo count($fred);
                echo '<br>';

                // sort()
                $arrSort = array('a','b','c','1d');
                sort($arrSort, SORT_NUMERIC);
                echo print_r($arrSort);
                echo '<br>';
                rsort($arrSort, SORT_NUMERIC);
                echo print_r($arrSort);
                echo '<br>';
                sort($arrSort, SORT_STRING);
                echo print_r($arrSort);
                echo '<br>';
                rsort($arrSort, SORT_STRING);
                echo print_r($arrSort);
                echo '<br>';

                // shuffle()
                shuffle($arrSort);

                // explode()
                $text = explode(' ','가나다 라마 바사아자 차카타');
                print_r($text);
                echo '<br>';

                // reset()
                $arrN1 = array('a','b','c');
                $itemN1 = reset($arrN1);
                echo $itemN1;
                echo '<br>';

                // end()
                $arrN2 = array('a','b','c');
                $itemN2 = end($arrN2);
                echo $itemN2;
                echo '<br>';
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>