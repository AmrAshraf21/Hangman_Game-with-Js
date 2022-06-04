const letters ="abcdefghijklmnopqrstuvwxyz"

let lettersArray = Array.from(letters)

let lettersContainer = document.querySelector('.letters');

let wrongTries = document.querySelector('.wrong-number span');

lettersArray.forEach((letter)=>{
    let span = document.createElement('span')
    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);

    span.classList.add('letter-box');

    lettersContainer.appendChild(span);


})



let randomValueValue;

fetch(`object.json`)
.then(response => response.json())
.then(data =>{

    let allKeys = Object.keys(data)
   let randomPropNumber = Math.floor(Math.random() * allKeys.length)
    let randomPropName = allKeys[randomPropNumber];
    let randomPropValue = data[randomPropName]

    let randomValueNumber = Math.floor(Math.random() *randomPropValue.length );
     randomValueValue = randomPropValue[randomValueNumber];

    document.querySelector('.category span').innerHTML = randomPropName;

    let lettersGuessContainer = document.querySelector('.letters-guess');

    let letterAndSpace = Array.from(randomValueValue)

    letterAndSpace.forEach((letter)=>{
        let span = document.createElement('span');
        if(letter === " "){
            span.classList.add('with-space')
        }
        lettersGuessContainer.appendChild(span)
        })

        let guessSpan = document.querySelectorAll('.letters-guess span');

        let wrongAttempts = 0;
        let theDraw = document.querySelector('.hangman-draw');

        document.addEventListener('click',(e)=>{
            let status=false
            if(e.target.classList.contains('letter-box')){
                e.target.classList.add('clicked');
                let theClickedLetter = e.target.innerHTML.toLowerCase();

                let theChosenWord=Array.from(randomValueValue.toLowerCase())
                    theChosenWord.forEach((wordLetter,wordIndex)=>{
                        if(theClickedLetter === wordLetter){
                            status=true
                            guessSpan.forEach((span,index)=>{
                                if(wordIndex === index){
                                    span.innerHTML = wordLetter
                                }

                            })

                        }


                    })

                        if(status !== true){
                            document.querySelector('#fail').play()
                            wrongAttempts++;
                            wrongTries.innerHTML = wrongAttempts
                            theDraw.classList.add(`wrong-${wrongAttempts}`);
                            if(wrongAttempts ===8){
                                endGame();
                                document.querySelector('#end').play()
                                lettersContainer.classList.add('finished')
                            }
                        }else{
                            document.querySelector('#success').play()
                        }

            }


        })
})


function endGame(){
    let div = document.createElement('div');
    let span = document.createElement('span');
    let t = document.createTextNode('X');
    let divText = document.createTextNode(`Game Over The Word is ${randomValueValue}`);
    span.appendChild(t);
    

    div.appendChild(divText)
    div.appendChild(span)
    div.classList.add('popup');

    document.body.appendChild(div)
    span.addEventListener('click',function(){
        div.style.display='none'
    })
}




// const words = {
//     programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//     people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
// }




//Get Random Property
// let allKeys = Object.keys(words);

//Random Number from array allKeys
// let randomPropNumber = Math.floor(Math.random() * allKeys.length);


//Choose one depend on the random number we get on randomPropNumber
// let randomPropName = allKeys[randomPropNumber];



// let randomPropValue = words[randomPropName];


// let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// let randomValueValue = randomPropValue[randomValueNumber]


// document.querySelector('.game-info .category span').innerHTML = randomPropName 


//select letter guess Element

// let lettersGuessContainer = document.querySelector('.letters-guess');

//Convert Chosen Word to Array 

// let lettersAndSpace = Array.from(randomValueValue);

// lettersAndSpace.forEach(letter =>{
//     let span = document.createElement('span');
//     if(letter ===" "){
//         span.classList.add('with-space')

//     }
//     lettersGuessContainer.appendChild(span)


// })

// let guessSpans = document.querySelectorAll('.letters-guess span');

//set the chose status


// let wrongAttempts = 0;

// let theDraw = document.querySelector('.hangman-draw')

// document.addEventListener('click',(e)=>{
//     let theStatus = false;

// if(e.target.classList.contains("letter-box")){
//     e.target.classList.add('clicked');

//     //get clicked letter
//     let theClickedLetter = e.target.innerHTML.toLowerCase()
    
//     let theChosenWord = Array.from(randomValueValue.toLowerCase())

//     theChosenWord.forEach((wordLetter,Wordindex) =>{
//         if(theClickedLetter === wordLetter){
//             theStatus = true
//                 //loop in all guess span

//                 guessSpans.forEach((span,spanIndex) =>{

//                     if(Wordindex === spanIndex){
//                         span.innerHTML = wordLetter
//                     }


//                 })


//         }



//     })
//     if(theStatus !== true){
//         wrongAttempts++;
        
//         theDraw.classList.add(`wrong-${wrongAttempts}`)
//             document.getElementById('fail').play()

//             if(wrongAttempts === 8){
//                 endGame();
//                 lettersContainer.classList.add('finished')
//             }

//     }else{
//         document.getElementById('success').play()
//     }

// }


// })
