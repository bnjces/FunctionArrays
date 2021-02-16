function startup(){
    var output = "";
    var testScores =    [
							["Sue", 100, 90, 75, 95 ],
							["Joe",  50, 80, 70, 85 ],
							["Sam",  80, 95, 90, 82 ],
							["Tim",  95, 92, 81, 97 ]
						]
    output += "The input array is " + printArray(testScores) + "\n";
	output += "High score of each " + printArray( highScoreEach(testScores)) + "\n";
	output += "Low score of each " + printArray( lowScoreEach(testScores)) + "\n";
	output += "Sum score of each " + printArray( sumScoreEach(testScores)) + "\n";
	output += "Average score of each " + printArray( avgScoreEach(testScores)) + "\n";

    document.getElementById("outputarea").innerText = output;
}

function printArray(testScores){
    let output = "\n[";
    for(let i = 0; i < testScores.length; i++){
		output += "\n    [";
		for(let j = 0; j < testScores[i].length; j++){
			if(j > 0){
				output += ", ";
			}
			output += testScores[i][j];
		}
		output += "]";
		if(i < testScores.length - 1){
			output += ",";
		}
    }
	output += "\n]"
    return output;
}

function highScoreEach(testScores){
    let newArray = [];
    //Return an array that contains all the students with their high score
	for(let i = 0; i < testScores.length; i++){
		newArray[i] = [];
		newArray[i][0] = testScores[i][0];
		let highScore = 0;
		for(let j = 1; j < testScores[i].length; j++){
			if(highScore < testScores[i][j]){
				highScore = testScores[i][j];
			}
		}
		newArray[i][1] = highScore;
	}
    return newArray;
}

function lowScoreEach(testScores){
    let newArray = [];
    //Return an array that contains all the students with their low score
   return newArray;
}

function sumScoreEach(testScores){
    let newArray = [];
    //Return an array that contains all the students with their sum of thier scores
   return newArray;
}

function avgScoreEach(testScores){
    let newArray = [];
    //Return an array that contains all the students with their average of thier scores
   return newArray;
}