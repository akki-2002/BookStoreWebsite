<?php
if(ISSET($_POST['name']))
{
    $server="127.0.0.1:3307";
    $username="sqluser";
    $password="password";
    $db_name="book_store";
    $con=mysqli_connect($server, $username, $password);
if($con)
{
    // echo "successfully connected!!";
}else{
    echo "$con_error";
}

$name=$_POST['name'];
$email=$_POST['email'];
$username=$_POST['username'];
$password=$_POST['password'];


    $sql="INSERT INTO `book_store`.`users` (`name`, `email`, `username`, `password`, `dt`) VALUES ('$name', '$email', '$username', '$password', current_timestamp());";

if($con->query($sql)!=true)
{
    
    echo "ERROR: $sql <br> $con->error";
}else{
    echo "<script> window.location.assign('login.php'); </script>";
    // $reg=true;
    // echo "Successfully Inserted";
}




$con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/reg.css">
</head>
<body>
    
    <div class="reg_container">
        <form action="reg.php" method="post">
            <div class="f_header">Register</div>
            <div class="r_input">
                <input type="text" placeholder="Name" name="name" required>
            </div>
            <div class="r_input">
                <input type="email" placeholder="Email" name="email" required>
            </div>
            <div class="r_input">
                <input type="text" placeholder="Username" name="username" required>
            </div>
            <div class="r_input">
                <input type="password" placeholder="Password" name="password" required>
            </div>
            <div class="r_btn">
                <button>Register Now</button>
            </div>
        </form>
        <div class="ff">
            <div class="ff_d">
                Already have an account? <a href="login.php">LogIn</a>
            </div>
            <div class="ff_d">
                <a href="index.html">Go to home page</a>
            </div>
        </div>
    </div>
</body>
</html>