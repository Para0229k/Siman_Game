var btnColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var gameStatus = 0; // >0: gaming, =0: pausing, <0: over
var level = 0;



//==================== Callback ====================//
// button clicked
$(".btn").click(function(event){
    var userChosenColor = event.target.id; // get clicked color
    userPattern.push(userChosenColor); // record pattern
    
    Button_flash(userChosenColor);
    Play_audio(userChosenColor);

    if (gameStatus >= 0){
        Check_answer(userPattern.length - 1);
    }
})

// keyboard pressed
$(document).keydown(function(event){
    // press "a": game start
    if (event.key == "a"){
        if(gameStatus == 0){
            gameStatus++;
            Next_sequence();
        }
    }

    // is over: restart game
    if (gameStatus < 0){
        gameStatus = 1
        level = 0;
        gamePattern = [];
        Next_sequence();
    }
})



//==================== Helper Function ====================//
// fit number to color
function Next_color(randomNum){
    switch(randomNum){
        case 0:
            var color = "red";
            break;
        case 1:
            color = "blue";
            break;
        case 2:
            color = "green";
            break;
        case 3:
            color = "yellow";
            break;
    }
    return color;
}

// button activated (animation)
function Button_flash(activatedBtnName){
    var buttonID = "#" + activatedBtnName; // create full ID
    
    // flash
    $(buttonID).addClass("pressed");
    
    setTimeout(function(){
        $(buttonID).removeClass("pressed");
    }, 100);
}

// play sound when button activated
function Play_audio(activatedBtnName){
    var buttonAudio = new Audio('./sounds/' + activatedBtnName + '.mp3'); // create full audio path
    buttonAudio.play();
}

// next level (show random pattern)
function Next_sequence(){
    level++;
    $("h1").text("Level " + level); // change title
    userPattern = []; // clear user record

    // choose button randomly
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = Next_color(randomNum);
    gamePattern.push(randomChosenColor); // record
    
    Button_flash(randomChosenColor);
    Play_audio(randomChosenColor);
}

// check user's selection
function Check_answer(currentLevel){
    if (userPattern[currentLevel] == gamePattern[currentLevel]){
        if(currentLevel + 1 >= level){ // final selection at that level
            setTimeout(Next_sequence, 1000); // go to next level
        }
    }
    else{
        gameStatus = -1; // game over
        $("h1").text("Game Over, Press Any Key to Restart")
        
        var wrongAudio = new Audio('./sounds/wrong.mp3');
        wrongAudio.play();
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
    }
}