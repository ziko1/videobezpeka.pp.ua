<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$name = $_POST['name'];}
  if (isset($_POST['hid_cam'])) {$hid_cam = $_POST['hid_cam'];}
  if (isset($_POST['out_cam'])) {$out_cam = $_POST['out_cam'];}
  if (isset($_POST['inn_cam'])) {$inn_cam = $_POST['inn_cam'];}
  if (isset($_POST['rot_cam'])) {$rot_cam = $_POST['rot_cam'];}
  if (isset($_POST['sys_type'])) {$sys_type = $_POST['sys_type'];}
  if (isset($_POST['vid_type'])) {$vid_type = $_POST['vid_type'];}
  if (isset($_POST['rec_archive'])) {$rec_archive = $_POST['rec_archive'];}
  if (isset($_POST['sys_montag'])) {$sys_montag = $_POST['sys_montag'];}

/* Сюда впишите свою эл. почту */
 $address = "tracker.gigamax@gmail.com";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: Замовлення зворотного дзвінка!\nТелефон: $phone\nІмя: $name\nПриховані камери: $hid_cam\nВуличні камери: $out_cam\nВнутрішні камери: $inn_cam\nПоворотні камери: $rot_cam\nТип системи: $sys_type\nТип відео: $vid_type\nАрхів записи: $rec_archive\nАрхив записи: $sys_montag";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='info@site.ru'; //сабж
$email='Замовлення з сайту Videobezpeka'; // от кого
$send = mail ($address,$email,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$sub");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>