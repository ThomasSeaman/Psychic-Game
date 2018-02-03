        // Variable sets
        
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var wins = 0
        var losses = 0
        var guessesLeft = 10
        var userGuess = 0

        // Runs this funtions whenever user presses key

        document.onkeyup = function (event) {
            var userGuess = event.key
            console.log(userGuess)
        

            var computerAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            // console.log(computerAnswer)


            if (userGuess === computerAnswer) {
                wins++
                // console.log("Correct!")
                // console.log(wins)
                $("#wins").html("<p>Wins: " + wins +"</p>")
            
            }

            else {
                guessesLeft--
                console.log("Wrong! Try Again")
                console.log(guessesLeft)
                $("#guessesLeft").html("<p>Guesses Left: " + guessesLeft +"</p>")
            }

            if(guessesLeft === 0){
                console.log(losses++)
                $("#losses").html("<p>Losses: " + losses +"</p>")
            }
            

        
        }

            

    


