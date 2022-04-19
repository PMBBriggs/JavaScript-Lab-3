var submissions = [ 
    {  name:"Jane",
       score: 95,
       date: "2020-01-24",
       passed: true,
    },
    { name:"Joe",
      score: 77,
      date: "2018-05-14",
      passed: true,
      
    },
    { name:"Jack",
    score: 55,
    date: "2019-07-05",
    passed: false,
    
    }, 
    { name:"Jill",
    score: 77,
    date: "2020-04-22",
    passed: true,
    
    }
    ]

function addSubmission(array, newName, newScore, newDate){ // make a variable for each object to add 
    var entry = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    }

    submissions.push(entry); 
}

function deleteSubmissionByIndex (array,index){
    submissions.splice(index,1);
}

function deleteSubmissionByName(array,name){
    let foundIndex = array.findIndex(function(entry){
        // console.log(entry) - to see what is being shown for entry (objects)
        return entry.name === name ;
        })

        console.log(foundIndex);
    
 submissions.splice(foundIndex,1);
}

function editSubmission(array, index, score){
    let entry = array[index];
    entry.score = score;
    entry.passed = score >= 60;

    // how to target a specific part of object by index
}

function findSubmissionByName(array,name){
    let foundEntry = array.find(function(entry){
        return entry.name === name;

    })

    console.log(foundEntry);

}
 


function findLowestScore(array){
    // forEach method
    var lowerEntryScore = Number.MAX_VALUE;
    var lowestScore; 
   array.forEach(function(entry){
        if (entry.score < lowerEntryScore){
            lowerEntryScore = entry.score;
            lowestScore = entry;
        }
        return lowestScore 
   })

   console.log(lowestScore)
    
}

function findAverageScore(array){
    let sum = 0;
    for (let entry of array) {
        // console.log(entry.score);
        sum += entry.score;
    }

    return sum / array.length;

    }



// console.log(findAverageScore(submissions));

function filterPassing(array){

    // const result = submissions.filter(entry => entry.score > 60);
    
    const result = submissions.filter(entry => entry.passed === true);

    console.log(result);

}

function filter90AndAbove(array){

    const result = submissions.filter(entry => entry.score > 90);

    console.log(result);

}