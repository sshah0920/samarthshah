<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $mobile = $_POST['contact']
    $message = $_POST['message'];

    $body .= "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Contact: " . $contact . "\n";
    $body .= "Message: " . $message . "\n";

    mail("samarthshah3140@gmail.com", "From Resume Website", $body);

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <script> alert("Email Sent!");</script>
    <meta HTTP-EQUIV="REFERESH" content="#">
    </head>

?>