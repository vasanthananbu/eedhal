<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    $pwdc = $_POST['pwdc'];

    // Database connection
    $conn = new mysqli('localhost', 'root', 'Eedhal#byleen@61', 'eedhal');
    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into user(email, password, pwdc) values(?, ?, ?)");
        $stmt->bind_param("sss", $email, $password, $pwdc);
        $execval = $stmt->execute();

        if ($execval) {
            // Redirect to index.html after successful registration
            header("Location: index.html");
            exit(); // Ensure the script stops after the redirect
        } else {
            echo "Error in registration.";
        }

        $stmt->close();
        $conn->close();
    }
?>
