<?php
header('Access-Control-Allow-Origin: *'); // Allow CORS if needed
header('Content-Type: text/plain'); // Set the response type

$servername = "localhost";
$username = "u722002442_atiya_khan";
$password = "Webmaster_ghrce@123";
$dbname = "u722002442_view_counter";

// Establish a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    http_response_code(500);
    die("Connection failed: " . $conn->connect_error);
}

// Fetch the current visitor count
$sql = "SELECT count FROM visitors WHERE id = 1";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $count = (int)$row["count"] + 1;

    // Update the count in the database
    $updateSql = "UPDATE visitors SET count = ? WHERE id = 1";
    $stmt = $conn->prepare($updateSql);
    $stmt->bind_param('i', $count);

    if ($stmt->execute()) {
        echo trim($count); // Return the updated count
    } else {
        http_response_code(500);
        echo "Error updating record: " . $conn->error;
    }
} else {
    http_response_code(404);
    echo "Count not found";
}

// Close the database connection
$conn->close();
?>
