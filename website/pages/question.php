<?php
    include_once "../templates/tpl_common.php";

    draw_main_document();
?>

    <link rel="stylesheet" href="../css/question.css">
</head>

<body>
    <header>
        <?php 
            draw_nav_bar("full", false);
        ?>
    </header>

    <div>
        <?php
            draw_side_pair();
        ?>
    </div>

    <div class="container-fluid">
        <div class="wrapper col-md-5">
            <div>
                <div class="row-sm-2 d-flex">
                    <div id="prof-img" class="col-3 text-center">
                        <a href="profile.php">
                            <img src="../resources/bob_iger.jpeg" alt="Generic placeholder image">
                        </a>
                    </div>
                    <div>
                        <h1>How to generate a random string of a fixed length in Go?</h1>
                        <p><a href="/pages/profile.php">pedro_dantas</a></p>
                    </div>
                </div>
                <div class="row-sm-10">
                    <p>I want a random string of characters only (uppercase or lowercase), no numbers, in Go. What is the fastest and simplest way to do this?</p>

                    <div class=icons>
                        <a class="icon" href="#">
                            <i class="fas fa-thumbs-up fa-lg"> 35</i>
                        </a>
                        <a class="icon" href="#">
                            <i class="fas fa-thumbs-down fa-lg"> 4</i>
                        </a>
                        <a class="icon" href="#">
                            <i class="fas fa-arrow-right fa-lg"> follow</i>
                        </a>
                        <a class="icon-answers" href="#">
                            <i class="fas fa-bug"> Report</i>
                        </a>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" placeholder="Do you know the answer to this question?"id="exampleFormControlTextarea1" rows="4"></textarea>
                        <button class="btn my-2 my-sm-0" type="submit">Answer</button>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" placeholder="Do you want to comment this question?"id="exampleFormControlTextarea1" rows="2"></textarea>
                        <button class="btn my-2 my-sm-0" type="submit">Comment</button>
                    </div>

                    <h2 class="mt-0">Comments</h2>

                    <div class="media-body">
                        <?php
                        draw_comment("nmtc01","Here's a meta topic discussing basic questions. Personally, I think basic questions are ok if written well and are on-topic. Look at the answers below, they illustrate a bunch of things that would be useful for someone new to go. For loops, type casting, make(), etc.");
                        draw_comment("edu1234","This question does not show any research effort - That's what I was referring to. He shows no research effort. No effort at all (an attempt, or even stating that he looked online, which he obviously hasn't). Although it would be useful for someone new, this site is not focused on teaching new people. It's focused on answering specific programming problems/questions, not tutorials/guides. Although it could be used for the latter, that is not the focus, and thus this question should be closed. Instead, its spoonfed");
                        ?>
                    </div>                
                    <h2 class="mt-0">Answers</h2>
                    
                    <ul class="list-unstyled">
                        <?php
                            $img = "bob_iger.jpeg";
                            $user = "bob_mourato";
                            $answer = "The question asks for the the fastest and simplest way. Let's address the fastest part too. We'll arrive at our final, fastest code in an iterative manner. Benchmarking each iteration can be found at the end of the answer.
                            All the solutions and the benchmarking code can be found on the Go Playground. The code on the Playground is a test file, not an executable.";
                            $score = 33;

                            for($i = 0; $i < 3; $i++){
                                draw_answer($img, $user, $answer, $score);
                            }
                        ?>
                    </ul>
                </div>
            </div>

        </div>
    </div>
   

<?php
    draw_footer();
?>