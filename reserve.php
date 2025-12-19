<?php
require "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

$name  = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$date  = $_POST["date"];

$stmt = $conn->prepare(
    "INSERT INTO reservations (name, email, date) VALUES (?, ?, ?)"
);
$stmt->bind_param("sss", $name, $email, $date);
$stmt->execute();

header("Location: ../index.html?status=success");
