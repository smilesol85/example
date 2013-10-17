<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>parent</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'parent';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                class Dad{
                    function test(){
                        echo 'Dad';
                    }
                }

                class Son extends Dad{
                    function test(){
                        echo 'Luck';
                    }

                    function test2(){
                        parent::test();
                    }
                }

                $object = new Son;
                $object -> test();
                $object -> test2();
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>