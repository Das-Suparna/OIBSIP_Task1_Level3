<?php 

	header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
	$conn = new mysqli("localhost","root","","pizzodb");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$name = $_POST['uname'];
		$pass = $_POST['upwd'];
		$email = $_POST['uemail'];
		$mobile = $_POST['ucontact'];
	      $nick = $_POST['unick'];
		$date = $_POST['udate'];
	
		$sql = "INSERT INTO userform(uname,upwd,uemail, ucontact, unick,udt) VALUES('$name','$pass','$email','$mobile', '$nick', '$date');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}

?>
