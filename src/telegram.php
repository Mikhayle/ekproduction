<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comments'];
$file = $_POST['download_foto'];
$token = "1310260375:AAH0nqgrOJjxwrfCHBwBchXbBqLAyXlhzSs";
$chat_id = "-486112156";

$arr = array(
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,	
	'Комментарий: ' => $comment,
	'Фото: ' => $file
);

foreach ($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}

?>