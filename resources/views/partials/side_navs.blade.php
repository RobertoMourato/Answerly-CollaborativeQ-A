<div id="sidenav_left" class="sidenav d-none d-md-block">
    @if (Auth::check())
    <label>Following</label>
    @else
    <label>Popular questions</label>
    @endif
    <a class="row" href="#">Will Erling Braut Haaland be a future winner of the Ballon d’Or?</a>
    <a class="row" href="#">Is it possible for Leicester City to defeat Aston Villa in the English Premier League?</a>
    <a class="row" href="#">Do you think that Ronaldo is going to play in the next world cup?</a>
    <a class="row" href="#">How can I learn C and C++?</a>
</div>
<div id="sidenav_right" class="sidenav d-none d-md-block">
    <label>Popular labels</label>
    <a class="row" href="#">#Medicine</a>
    <a class="row" href="#">#Sports</a>
    <a class="row" href="#">#Anatomy</a>
    <a class="row" href="#">#Astronomy</a>
    <a class="row" href="#">#Comics</a>
</div>