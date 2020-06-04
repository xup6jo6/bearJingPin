<?php
header('Content-Type: application/json; charset=UTF-8'); 
if ($_SERVER['REQUEST_METHOD'] == "POST") { 
    @$appellation = $_POST["appellation"]; 
    @$account = $_POST["account"];
    @$password = $_POST["password"];
    if ($appellation != null && $account != null && $password != null) { 
        echo json_encode(array(
            'appellation' => $appellation,
            'account' => $account,
            'password' => $password,
        ));
    } else {
        //回傳 errorMsg json 資料
        echo json_encode(array(
            'errorMsg' => '資料未輸入完全！'
        ));
    }
} else {
    //回傳 errorMsg json 資料
    echo json_encode(array(
        'errorMsg' => '請求無效，只允許 POST 方式訪問！'
    ));
}
?>
