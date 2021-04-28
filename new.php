<!DOCTYPE html>
<html>

<head>
    <title>Noy Shabo</title>
    <meta charset="UTF-8">
</head>

<body>
    <?php
        $un = $_GET["gender"];
        $nu = $_GET["coffee"];
        
        if( $un == "male")
            echo "<h1>Hi man, your num".$nu."&nbsp; + 2 =".($nu+2)."</h1>";

        if( $un == "female")
            echo "<h1>Hi Wonder-woman, your num".$nu." +&nbsp; 2 =".($nu+2)."</h1>";
    ?>
</body>

</html>