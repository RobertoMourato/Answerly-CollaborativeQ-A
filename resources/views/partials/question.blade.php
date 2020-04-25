<div class="row flex-row-reverse">
    <div class="col-sm-9">
        <h1>{{ $question->title }}</h1>
        @if (Auth::check() && Auth::user()->id == $question->user_id)
        <a class="icon-question" id="delete_question">
            <i class="fas fa-trash-alt"> Delete</i>
        </a>
        @endif
    </div>
    <div id="prof-img" class="col-sm-3 text-center">
        <a class="row-sm" href="profile.php">
            <img src="{{asset('/img/unknown.png')}}" alt="Generic placeholder image">
        </a>
        <p class="row-sm text-truncate"><a href="profile.php">{{ $user->username }}</a></p>
    </div>
</div>
<div>
    <p>{{ $question->description }}</p>
    <div class=icons>
        <a class="icon" href="#">
            <i class="fas fa-thumbs-up fa-lg"> {{ $question->nr_likes }}</i>
        </a>
        <a class="icon" href="#">
            <i class="fas fa-thumbs-down fa-lg"> {{ $question->nr_dislikes }}</i>
        </a>
        <a class="icon" href="#">
            <i class="fas fa-arrow-right fa-lg"> follow</i>
        </a>
        <a class="icon-answers" href="#">
            <i class="fas fa-bug"> Report</i>
        </a>
    </div>
</div>