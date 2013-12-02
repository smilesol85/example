<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>object</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
        <link rel="stylesheet" type="text/css" href="../vCommon/vCommon.css">
    </head>
    <body>
        <div id="wrap">
            <script>var titHeader = 'object';</script>
            <script src="../vCommon/header.js"></script>
            <section>
                <?php
                class User{
                    public $name, $password;
                    function save_user(){
                        echo 'save';
                    }
                }

                // extends 연산자를 사용해 User 서브클래스로 정의
                class Subscriber extends User{
                    public $phone, $email;
                    function display(){
                        echo 'Name : ' .$this -> name. '<br>';
                        echo 'Pass : ' .$this -> password. '<br>';
                        echo 'Phone : ' .$this -> phone. '<br>';
                        echo 'Email : ' .$this -> email. '<br>';
                    }
                }

                $object = new Subscriber;
                $object -> name = 'sol';
                $object -> password = '0000';
                $object -> phone = '000-0000-0000';
                $object -> email = '0@gmail.com';
                $object -> display();
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>