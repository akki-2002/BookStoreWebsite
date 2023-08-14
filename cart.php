<?php
if(ISSET($_POST['name']))
{
    $server="127.0.0.1:3307";
    $username="sqluser";
    $password="password";
    $db_name="book_details";
    $con=mysqli_connect($server, $username, $password);
if($con)
{
    echo "successfully connected!!";
}else{
    echo "$con_error";
}

$book_name=$_POST['book_name'];
$price=$_POST['price'];
$quantity=$_POST['quantity'];


    $sql="INSERT INTO `book_details` (`book_name`, `price`, `quantity`) VALUES ('$book_name', '$price', '$quantity', );";

if($con->query($sql)!=true)
{
    
    echo "ERROR: $sql <br> $con->error";
}else{
    // echo "<script> window.location.assign('login.php'); </script>";
    // $reg=true;
    echo "Successfully Inserted";
}




$con->close();
}
?>