var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", 
"and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", 
"and the Half-Blood Prince", "and the Deathly Hallows"];

for (let i = 0; i < harryPotterTitles.length; i++) {
    console.log("Harry Potter " + harryPotterTitles[i]);
    
}


/*************************************************************************************************************************/
/*************************************************************************************************************************/


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (let s = 0; s < grades.length; s++) {
    if (grades[s] >= 0 && grades[s] <= 69){
        console.log("You got an F")
    }else if
    (grades[s] >= 70 && grades[s] <= 76){
        console.log("You got a D")
    }else if
    (grades[s] >= 77 && grades[s] <= 84){
        console.log("You got a C")
    }else if
    (grades[s] >= 85 && grades[s] <= 92){
        console.log("You got a B")
    }else if
    (grades[s] >= 93 && grades[s] <= 100){
        console.log("You got a A")
    }    
}



/*************************************************************************************************************************/
/*************************************************************************************************************************/


let cheer = ""
    for(var i = 2; i <= 8; i += 2) {
        cheer += i + " "
    } console.log(cheer + "Who do you appreciate????")

    


var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

//constructing a sentence that starts out empty
var sentence = ""
//looping through the sentenceArray
    for (var i = 0; i < sentenceArray.length; i++)
    /*modulus operator returns a boolean of true or false if dividing the variable into 
    thirds has NO REMAINDER.*/
    if ((i % 3 == 0) && (i != 0))    /* --if -- i is divisible by 3 (%) and has a remainder of 0 (== 0) */
    {sentence = (sentence + ' MOOOOOOO ' + sentenceArray[i])
} else (sentence = sentence + " " + sentenceArray[i])

console.log(sentence)



/*************************************************************************************************************************/
/*************************************************************************************************************************/


const beatles = {
    albums: ["Abbey Road", " Sgt Peppers Lonely Heart's Club Band", " Revolver", " Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[0].name} was in the Beatles from ${beatles.history.formed} 
to ${beatles.history.disbanded}. He was born in ${beatles.members[0].birth}. 
He contributed heavily to the ${beatles.albums} Albums.`)

