<?php
    include_once "../templates/tpl_common.php";

    draw_main_document();
?>

    <link rel="stylesheet" href="../css/index.css">
</head>

<body>
    <header>    
        <?php 
            draw_nav_bar("simple");
        ?>
    </header>


    <div class="wrapper">
        <form class="form-signin">
            <h2 class="form-signin-heading text-center display-3">Answerly</h2>

            <button id="api" class="btn  btn-lg btn-block">Sign in with Google</button>
            <input type="text" class="form-control" name="username" placeholder="Email Address">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <button type="button" onclick="location.href='pages/home.php';" class="btn  btn-lg btn-block">Login</button>
            
            <div id="register">
                Don't have an account? <a href="pages/register.php">Register</button>
            </div>

        </form>

    </div>


</body>

</html>