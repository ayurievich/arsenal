<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    $botToken = "7654862177:AAGCmGtrQMxanhALFq_a4oaQhIwN_0kT0Jo";
    $chatId = "-1002493657391";

    $text = "Новое сообщение с сайта:\n";
    $text .= "Имя: $name\n";
    $text .= "Телефон: $phone\n";
    $text .= "Сообщение: $message";

    $url = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text);

    $response = file_get_contents($url);

    if ($response) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Спасибо за ваше сообщение! Мы скоро с вами свяжемся.",
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Произошла ошибка при отправке сообщения.",
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Некорректный запрос.",
    ]);
}
