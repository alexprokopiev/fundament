<?php

if ($_POST["phone"] == '') return 0;

$email = array('heatlead@yandex.ru', ''); // Кому
$from = "zayavka@site.ru"; // от кого

$to = implode(",", $email);
$leadtype = trim($_POST["leadtype"]);
$sitename = trim($_POST["city"]);
$sitetype = trim($_POST["type"]);
$utm_source = trim($_POST["utm_source"]);
$utm_medium = trim($_POST["utm_medium"]);
$utm_campaign = trim($_POST["utm_campaign"]);
$utm_term = trim($_POST["utm_term"]);
$utm_content = trim($_POST["utm_content"]);
$phone = trim($_POST["phone"]);
$fundament = trim($_POST["fundament"]);
$square = trim($_POST["square"]);
$host = $_SERVER['SERVER_NAME'];

$subject = "Заявка (Кл.) - " . $sitetype . " - " . $sitename . "\r\n";
$headers = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: " . strip_tags($from) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$message = "<html><body style='font-family:Arial,sans-serif;'>\r\n";
$message .= "<h2>Тип заявки: " . $leadtype . "</h2>\r\n";

if (!empty($phone)) {
	$message .= "<p><strong>Телефон:</strong> " . $phone . "</p>\r\n";
}
if (!empty($fundament)) {
	$message .= "<p><strong>Email:</strong> " . $fundament . "</p>\r\n";
}

if (!empty($square)) {
	$message .= "<p><strong>Дата замера:</strong> " . $square . "</p>\r\n";
}

if (!empty($utm_source)) {
	$message .= "<p><strong>Источник перехода:</strong> " . $utm_source . " " . $utm_medium . " " . $utm_campaign . " " . $utm_term . " " . $utm_content . "</p>\r\n";
}

$message .= "<p><strong>Адрес сайта: </strong> " . $host . "</p>\r\n";
$message .= "</body></html>\r\n";

mail($to, $subject, $message, $headers);
// header('Refresh: 0.5; url=https://leads4you.ru/kitchen3/');
