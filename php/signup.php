<?php
include 'connectDB.php';
$errors=array();

//validate users input in server-side
if(isset($_POST['create'])){
	$fName = $_POST['fullName'];
	$uName = $_POST['userName'];
	$email = $_POST['emailAdd'];
	$pw = $_POST['password'];
	$cpw = $_POST['cPassword'];

    if(empty($fName)){
        $errors['fname']="Invalid";
    }
    if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $fName))
    {
        $errors['fname']="invalid";
    }

    if(empty($uName)){
        $errors['lname']="Invalid";
    }

    if(empty($email)){
        $errors['email']="Email is empty. Please fill it in";
    }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $errors['filteremail']="Email is not valid.";
    }

    if(empty($pw)){
        $errors['password']="Password is empty. Please fill it in";
    }

    if(empty($cpw)){
        $errors['cpassword1']="Please Confirm your password.";
    }

    if($pw != $cpw){
        $errors['cpassword']="Password does not match";
    }
}


try{
	//if there is no errors proceed to inserting data in database
	if (count($errors) == 0){
		if(isset($_POST['create'])){
			$fName = $_POST['fullName'];
			$uName = $_POST['userName'];
			$email = $_POST['emailAdd'];
			$pw = $_POST['password'];

			$pw = sha1($_POST['password']);

			$stmt = $conn->prepare("INSERT INTO user_tbl (fullName, Username, emailAddress, Password) VALUES (:fName, :uName, :email, :pw)");
			$stmt->bindParam(":fName", $fName);
			$stmt->bindParam(":uName", $uName);
			$stmt->bindParam(":email", $email);
			$stmt->bindParam(":pw", $pw);
			$stmt->execute();
		}
	}
}catch(PDOException $e){
	echo "Failed to create " . $e->getMessage();
}
	
$conn = null;
?>

