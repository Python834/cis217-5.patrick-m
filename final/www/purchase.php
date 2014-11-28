<?php

$to      = 'cis217@gmail.com';
$subject = 'TEST';
$message = $_GET['orderUrl'];
$headers = 'From: cis217-4.patrick-m.com' . "\r\n" .
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

mail($to, $subject, $message, $headers);

echo $_GET['orderUrl'];