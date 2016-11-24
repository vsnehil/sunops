<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="solar";
// Create connection
$conn =new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//  echo "Connected successfully";
$lng=28.518845;
$lat=77.206032;

$sql = "SELECT id, ( 3959 * acos( cos( radians('$lat') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('$lng') ) + sin( radians('$lat') ) * sin( radians( lat ) ) ) ) AS distance FROM plants HAVING distance < 5000 ORDER BY distance LIMIT 0 , 5;";
$result = $conn->query($sql);

echo $result->num_rows;
while ($row = mysql_fetch_array($result)) {
    echo '<tr>';
    foreach($row as $field) {
        echo '<td>' . htmlspecialchars($field) . '</td>';
    }
    echo '</tr>';
}
  ?>
