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
                // 클래스 정의
                class User{
                    public $name, $password;

                    function save_user(){
                        echo 'Save User code goes here';
                    }
                }

                // 객체 생성
                $object = new User;
                print_r($object);  // User Object ( [name] => [password] => ),  print_r은 사람이 읽기 편한 형태로 정보를 출력하라고 명령한다.
                echo '<br>';

                // 객체 사용
                $object -> name = 'sol';
                $object -> password = '0000';
                print_r($object);
                echo '<br>';

                // 생성자
                class User2{
                    function __construct(){
                        // 생성자 입력
                    }
                }

                // 소멸자, 코드가 마지막 참조를 한 후 스크립트가 끝에 도달한 경우 유용하게 사용된다.
                class User3{
                    function __destruct(){
                        // 소멸자 입력
                    }
                }

                // $this
                class User4{
                    public $name, $password;

                    function get_passwrod(){
                        return $this -> password;  // password 에는 '$' 가 붙지 않는다.
                    }
                }

                $object2 = new User4;
                $object2 -> password = '0000';
                echo $object2 -> get_passwrod();  // 0000
                echo '<br>';

                // 정적 메소드
                class User5{
                    // 정적 메소드는 어떤 객체에도 접근성이 없다.
                    static function pwd_string(){
                        echo 'Please enter your password';;
                    }
                }
                User5::pwd_string();  // 정적 메소드 접근시 '::' 사용한다.
                echo '<br>';

                // 상수 선언
                class Translate{
                    // 상수는 한 번 정의되면 바꿀 수 없다.
                    const ENG = 0;
                    const SPANISH = 1;
                    const KOREAN = 2;

                    static function lookup(){
                        echo self::SPANISH;  // 1, 상수는 self 키워드와 더블콜론을 사용해 직접 참조한다.
                    }
                }
                Translate::lookup();
                echo '<br>';

                // 속성과 메소드
                // public : 클래스 내외부 모두 접근 가능하다. 기본값으로 지정된다.
                // protected : 클래스 내부, 상속된 하위 클래스에서 접근 가능하다.
                // private : 클래스 내부에서 접근 가능하다. 상송된 하위 클래스에서는 접근 불가능
                class MyClass{
                    private $vars;
                    protected $protectedVar;
                     
                    public function __construct($pram){
                        $this -> vars = $pram;
                    }
                    public function __destruct(){
                    }
                    public function __get($name){
                        return $this -> $name;
                    }
                    public function __set($name, $value){
                        $this -> $name = $value;
                    }
                    public function myMethod($param){
                        echo 'Parameter: '.$param.'<br />';
                    }
                }
                 
                $a = new MyClass('myString');   // __construct() 자동호출(생성자)
                echo $a -> vars.'<br />';          // __get() 자동호출
                $a -> vars = 'newString';          // __set() 자동호출
                echo $a -> vars.'<br />';          // __get() 자동호출
                $a -> myMethod('myParam');        // myMethod() 호출
                ?>
            </section>
            <script src="../vCommon/footer.js"></script>
        </div>
    </body>
</html>