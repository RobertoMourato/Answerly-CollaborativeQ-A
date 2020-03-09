<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous">
    <style type="text/css">
        
        body {
            background: #eee;
            background-image: url("resources/wallpaper2.png");
            background-size: 100% 100%;
        }

        .wrapper {
            margin: 70px;
        }

        .form-signin {
            max-width: 380px;
            margin: 0 auto;
            background-color: #fff;
            padding: 15px 40px 50px;
            border: 1px solid #e5e5e5;
            border-radius: 10px;
        }

        .form-signin input[type="text"],
        .form-signin input[type="password"] {
            margin-bottom: 20px;
        }

        .form-signin #api {
            margin-bottom: 40px;
        }

        .form-signin .form-signin-heading {
            margin-bottom: 50px;
        }

        .jumbotron {
            background: #eee;
            text-align: center;
        }

        #register {
            margin-top: 10px;
        }

        #logo {
            margin-top: 50px;
            text-align: center;
        }
    </style>
</head>

<body>
    <script defer src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    <header>    

        
        <nav class="navbar navbar-light" style="background-color: #6545c9">
            <a class="navbar-brand" style="color: #6545c9;">Navbar</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn my-2 my-sm-0" type="submit" style="background-color:	white; color: #6545c9">Search</button>
            </form>
        </nav>
        


    </header>


    <div class="wrapper">

        <form class="form-signin">

            <h2 class="form-signin-heading text-center display-3" style="text-align: center;">Answerly</h2>

            <button id="api" class="btn  btn-lg btn-block" style="background-color:  #DB4437; color: white;">Sign in
                with Google</button>
            <input type="text" class="form-control" name="username" placeholder="Email Address">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <button type="button" class="btn  btn-lg btn-block" style="background-color: 	#6545c9; color: white">Login</button>

            <div id="register">
                Don't have an account? <a href="#" style="color: #6545c9;">Register</button>
            </div>


        </form>

    </div>


</body>

</html>