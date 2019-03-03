<?php
require_once './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = "ssl://smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "sibtrade.tech";
$mail->Password = "wz2egnb9";

// От кого
$mail->setFrom('sibtrade.tech@gmail.com', 'sibtrade.tech');

// Кому
$mail->addAddress('shist95@mail.ru', 'shist95');

// Тема письма
$mail->Subject = 'test';

// Тело письма
$body = '<p><strong>«Hello, world!» </strong></p>';
$mail->msgHTML($body);


$mail->send();
?>