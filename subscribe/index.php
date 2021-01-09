<?php
if(isset($_POST['email'])) {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        include_once "sxgeo/SxGeo.php";
        $SxGeo = new SxGeo('sxgeo/SxGeo.dat');
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) $ip=$_SERVER['HTTP_CLIENT_IP'];
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
        else $ip=$_SERVER['REMOTE_ADDR'];
        $country = $SxGeo->getCountry($ip);
        $email = $_POST['email'];
        define('server', 'localhost');
        define('user', 'viespire');
        define('database', 'viespire');
        define('password', 'ohN6ebei2Ung');
        $dbConnect = new mysqli(server, user, password, database);
        if (mysqli_connect_errno()) {
            header('HTTP/1.0 503 Service Temporarily Unavailable');
            die();
        }
        $dbConnect->query('SET NAMES UTF8;');
        if (mysqli_connect_errno()) {
            header('HTTP/1.0 503 Service Temporarily Unavailable');
            die();
        }
        $row = $dbConnect->query("SELECT `idsubscribers`, `email`, `geo` FROM `viespire`.`subscribers` WHERE `email`='".$email."';");
        if (mysqli_connect_errno()) {
            header('HTTP/1.0 400 Bad Request');
            die();
        }
        $result = $row->fetch_row();
        if($result) {
            if(!$result[2] && $country) {
                $dbConnect->query("UPDATE `viespire`.`subscribers` SET `geo`='".$country."' WHERE `idsubscribers`='".$result[0]."';");
                if (mysqli_connect_errno()) {
                    header('HTTP/1.0 400 Bad Request');
                    die();
                }
            }
        }
        else {
            $dbConnect->query("INSERT INTO `viespire`.`subscribers` (`email`, `date`, `geo`) VALUES ('".$email."', '".date("Y-m-d")."', '".$country."');");
            if (mysqli_connect_errno()) {
                header('HTTP/1.0 400 Bad Request');
                die();
            }
        }
    }
    else {
        header('HTTP/1.0 400 Bad Request');
        die();
    }
}
else {
    header('HTTP/1.0 403 Forbidden');
    die();
}