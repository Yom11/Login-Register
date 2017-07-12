<?php
include 'connectDB.php';

$sql = "select id from user_tbl";
$run = $conn->prepare($sql);
$run->execute();
$fetch = array();

while($row=$run->fetch(PDO::FETCH_ASSOC)){
	$fetch['user_tbl'][] = $row;
}
echo json_encode($fetch);
?>