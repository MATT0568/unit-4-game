$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var numberGoal = Math.floor((Math.random() * 120) + 19);
    $("#number-goal").html(numberGoal);
    var redNumber = Math.floor((Math.random() * 12) + 1);
    var blueNumber = Math.floor((Math.random() * 12) + 1);
    var orangeNumber = Math.floor((Math.random() * 12) + 1);
    var greenNumber = Math.floor((Math.random() * 12) + 1);

    function newGame() {
        totalScore = 0;
        numberGoal = Math.floor((Math.random() * 120) + 19);
        $("#number-goal").html(numberGoal);
        redNumber = Math.floor((Math.random() * 12) + 1);
        blueNumber = Math.floor((Math.random() * 12) + 1);
        orangeNumber = Math.floor((Math.random() * 12) + 1);
        greenNumber = Math.floor((Math.random() * 12) + 1);
        $("#total-score").html(0);
    }

    $("#red").on("click", function () {
        totalScore = totalScore + redNumber;
        $("#total-score").html(totalScore);
        console.log(totalScore +" = " +numberGoal);
        if (totalScore === numberGoal) {
            wins++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        else if (totalScore >= numberGoal) {
            losses++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        console.log("red: " + redNumber);
    });

    $("#blue").on("click", function () {
        totalScore = totalScore + blueNumber;
        $("#total-score").html(totalScore);
        console.log(totalScore +" = " +numberGoal);
        if (totalScore === numberGoal) {
            wins++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        else if (totalScore >= numberGoal) {
            losses++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        console.log("blue :" + blueNumber);
    });

    $("#orange").on("click", function () {
        totalScore = totalScore + orangeNumber;
        $("#total-score").html(totalScore);
        console.log(totalScore +" = " +numberGoal);
        if (totalScore === numberGoal) {
            wins++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        else if (totalScore >= numberGoal) {
            losses++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        console.log("orange: " + orangeNumber);
    });

    $("#green").on("click", function () {
        totalScore = totalScore + greenNumber;
        $("#total-score").html(totalScore);
        console.log(totalScore +" = " +numberGoal);
        if (totalScore === numberGoal) {
            wins++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        else if (totalScore >= numberGoal) {
            losses++;
            $("#wins-losses").html("Wins: " + wins + "<br><br> Losses: " + losses);
            newGame();
        }
        console.log("green: " + greenNumber);
    });
});
