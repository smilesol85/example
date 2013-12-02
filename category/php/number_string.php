<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>number and string</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'number and string';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                echo 3 + 1;
                echo '<br>';
                echo 3 * 1;
                echo '<br>';
                echo 4 / 2;
                echo '<br>';
                var_dump(6);
                echo '<br>';
                var_dump(6.1);
                echo '<br>';
                echo var_dump(1234);
                echo '<br>';
                echo var_dump('1234');
                echo '<br>';
                echo 'hello'.'world';
                echo '<br>';
                echo "가나다\"라마바\"";
                echo '<br>';
                echo '가나다\'라마바\'';
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>