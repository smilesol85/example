<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>multiple line</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'multiple line';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                // 다중라인
                echo 'abcde

                ffffffff
                sdfsdf<br>';

                // 다중라인
                $text = 'abcsd

                sdfsdfwesd
                fsdfsefsdf';

                echo $text.'<br>';

                // 다중라인
                $data = <<< _END

                abcdsd11112f
                sdfsef2222sdf
                        sdfsd3333fsdf
                sdfsf444esdf

_END;
                echo $data;
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>