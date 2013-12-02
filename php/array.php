<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>array</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'array';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                $paper[] = ‘Copier’;
                $paper[] = ‘Inkjet’;
                $paper[] = ‘Laser’;
                $paper[] = ‘Photo’;
                print_r($paper);  // Array ( [0] => 'Copier' [1] => 'Inkjet' [2] => 'Laser' [3] => 'Photo')
                echo '<br>';

                $paper2[0] = ‘Copier’;
                $paper2[1] = ‘Inkjet’;
                $paper2[2] = ‘Laser’;
                $paper2[3] = ‘Photo’;
                print_r($paper2);   // Array ( [0] => 'Copier' [1] => 'Inkjet' [2] => 'Laser' [3] => 'Photo')
                echo '<br>';

                $paper3['a'] = 'aaa';
                $paper3['b'] = 'bbb';
                $paper3['c'] = 'ccc';
                print_r($paper3);  // Array ( [a] => aaa [b] => bbb [c] => ccc )
                echo '<br>';

                $p1 = array('aa','bb','cc','dd');
                echo $p1[0]. '<br>';  // aa

                $p2 = array('aa' => 'aaa',
                    'bb' => 'bbb',
                    'cc' => 'ccc',
                    'dd' => 'ddd');
                echo $p2[bb]. '<br>';  // bbb

                // foreach...as
                $papers = array('a','b','c','d');
                $j = 0;

                // 배열의 아이템을 꺼내서 as 키워드 뒤의 변수에 대입한다.
                foreach($papers as $item){
                    echo $j. ':' .$item. '<br>';
                    ++$j;
                }
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>