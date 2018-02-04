    // Variable sets
        
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var computerAnswer = computerChoices [Math.floor (Math.random () * computerChoices.length)]
    var wins = 0
    var losses = 0
    var guessesLeft = 10
    
    // Runs this funtions whenever user presses key
        document.onkeyup = function() {
        var userGuess = event.key
        var userGuessSoFar = []
        console.log(userGuess)
        console.log(computerAnswer)
        // Rules for winning the game
        if (userGuess === computerAnswer){
            wins++
            console.log("winner!")
            console.log(wins)
            console.log(computerAnswer)
            alert("You are freaking me out!")
        }
        // Rules for losing the game
        else {
            guessesLeft--
            console.log(guessesLeft)
            userGuessSoFar.push(userGuess)
            console.log("User Guess so Far "+ userGuessSoFar)
            console.log(userGuessSoFar)
        }
        // Rules for resetting the game when guessesLeft = 0
        if (guessesLeft === 0){
            losses++
            console.log("Not a psychic!")
            console.log(losses)
            guessesLeft=10
            console.log(guessesLeft)
            alert("You are not a psychic!")
        }

        $("#wins").html("Wins: " + wins)
        $("#losses").html("Losses: " + losses)
        $("#guessesLeft").html("Guesses Left: " + guessesLeft)
        $("#yourGuessesSoFar").html("Your Guesses so Far: " + userGuessSoFar.toString())
    
        
           
        
   }


            

    


