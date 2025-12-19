<?php
$conn = new mysqli("localhost", "root", "", "noire_dining");

if ($conn->connect_error) {
    die("Database connection failed");
}
