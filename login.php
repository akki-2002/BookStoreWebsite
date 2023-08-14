<?php
$loggedIn=false;
if(ISSET($_POST['username']))
{
    $server="127.0.0.1:3307";
    $username="sqluser";
    $password="password";
    $db_name="book_store";
    $con=mysqli_connect($server, $username, $password, $db_name);
    if($con)
    {
        // echo "successfully connected!!";
    }else{
        echo $con_error;
    }
    $username = $_POST['username'];
    $password = $_POST['password'];
// require_once('index.html');
    $sql= "SELECT * FROM users WHERE username = '$username' AND password = '$password' ";
    $result = mysqli_query($con,$sql);
    $check = mysqli_fetch_array($result);
    if(isset($check)){
    $loggedIn=true;
    // echo "<h3>Successfully logged In</h3>";
    echo "<script>
        
    const myTimeout = setTimeout(myGreeting, 3000);
    function myGreeting() {
        window.location.assign('index.html');
        document.getElementById('btn').innerHTML='LoggedIn';
    }
        
        </script>";
    }else{
    echo 'failure';
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
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    
    
    <div class="login_container">
    <?php 
        if($loggedIn)
        {
            echo "<div class='log_head'><h3>Successfully logged In</h3></div>";
        }
    ?>
    
        <form action="login.php" method="post">
            <div class="l_img">
                <img src="Images/login.png" alt="">
            </div>
            <div class="f_header">
                Login
            </div>
            <div class="l_input">
                <input type="text" placeholder="Username" name="username" required>
            </div>
            <div class="l_input">
                <input type="password" placeholder="Password" name="password" required>
            </div>
            <div class="l_btn">
                <button id="btn">Log in</button>
            </div>
        </form>
        <div class="ff">
            <div class="ff_d">
                Don't have an account? <a href="reg.php">Register here</a>
            </div>
            <div class="ff_d">
                <a href="index.html">Go to home page</a>
            </div>
        </div>
    </div>
    <script src="js/cart.js"></script>
</body>
</html>