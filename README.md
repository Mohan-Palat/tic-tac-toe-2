<h1>Tic Tac Toe </h1>

<h3>Developer: Jon A</h3>

<h3><a href="https://jacheampong.github.io/tic-tac-toe/" target="_blank"> Tic Tac Toe</a> </h3>

<h3>Description:</h3>
Tic Tac Toe game for users enjoyment.<br />
The main aim is to develop tic tac toe game utilizing basic web development technologies. 
<br /><br />
<h3>Technology stack:</h3>
HTML <br />
CSS/CSS3: Flexbox layout, overlay, modal<br />
JavaScript<br />
Chrome, Developer tool
<br /><br />
Wireframe: google draw<br />

https://docs.google.com/drawings/d/11uhhN_s1_K1PXQR5KZxEtxfMkf4s0WdfJl1YO7OGU4I/edit?usp=sharing

<br />
Confetti js<br />

https://www.cssscript.com/demo/confetti-falling-animation/
<br />confetti.js is a vanilla JS library for creating a configurable, high-performance confetti falling animation using HTML5 canvas and requestAnimFrame API

<br /><br />
Audio/sounds:<br />
http://soundbible.com/tags-click.html

https://www.myinstants.com/instant/all-i-do-is-win/

<br />
Google Fonts<br />
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

<br /><br />
<h3>User Stories - MVP </h3>
<li>As a user, I should be able to start a new tic tac toe game</li>
<li>As a user, I should be able to click on a square to add X first and then O, and so on</li>
<li>As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next</li>
<li>As a user, I should not be able to click the same square twice
</li>
<li>As a user, I should be shown a message when I win, lose or tie
</li>
<li>As a user, I should not be able to continue playing once I win, lose, or tie
</li>
<li>As a user, I should be able to play the game again without refreshing the page
</li>


<br />
<h3>Extra Features </h3>
<li>Keep track of multiple game rounds with a win, lose and tie counter</li>
<li>Allow players to customize their tokens (X, O, name, picture, etc)</li>
<li>Involve Audio in your game</li>
<li>Make your site fully responsive so that it is playable from a mobile phone</li>
<li>Get inventive with your styling e.g. use hover effects or animations</li>

<br />
<h3>Extra Features - Work In Progress</h3>
<li>Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity</li>
<li>Create an AI opponent: teach JavaScript to play an unbeatable game against you</li>

<br />
<h3>Super Features - Analysis phase </h3>
<li>Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services</li>

<br>
<h3>Final UI </h3>
[Screenshot] 
(
    https://github.com/jacheampong/tic-tac-toe/blob/main/tic-tac-screen.png
)

<br><br>
<h3>Game summary</h3>
<li>All the boxes are HTML buttons</li>
<li>Flex box: used to arrange/organize UI</li>
<li>Most of buttons are attached to event listener on click</li>
<li>There is sound effect/feedback on click</li>
<li>Hover effect to transform the scale/size of buttons </li>
<li>Active players button is highlighted in green. Blue text displays active player</li>
<li>Box is disable after it is selected. This prevents selecting same box twice</li>
<li>Player name can be change at the beginning of round. Cannot be changed when game is started</li>
<li>Record/scores for wins & draws are kept for each round until reset</li>
<li>All boxes are disbaled when the game ends </li>
<li>Click Restart to start new round while keeping scores</li>
<li>Click Reset Score to reset scores and player names</li>

 