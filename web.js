const msg = document.querySelector('.msg');
const guess= document.querySelector('input');
const btn= document.querySelector('.btn');
const hint=document.querySelector('.hint');
const show=document.querySelector('.show');
const skip=document.querySelector('.skip');

let play=false;
let newWords= "";
let randWords="";
let sWords = ['2008','mjolnir','vibranium','tchalla','chitauri','storkclub','gamora','harley',
'hydra','korg','malekith','morag'];

const createNewWords = function(){
    let randNum = Math.floor(Math.random() * sWords.length);
    // console.log(randNum);
    let newTempSwords = sWords[randNum];
     return newTempSwords;
}

const scrambleWords = function(arr){
    for(let i = arr.length-1; i>0; i--){                            
        let temp = arr[i];
        console.log(temp);                  
        let j = Math.floor(Math.random()*(i+1));                
        console.log(i);
        console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}

skip.addEventListener('click', ()=>{

        // btn.innerHTML="Guess";
                                        // skip.style.display="block";
        // guess.classList.toggle('text');

        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));

        msg.innerHTML = `Unscramble The Answer:- ${randWords}`;


        hintQuestions();


})


btn.addEventListener("click",function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
                                        skip.style.display="block";
        guess.classList.toggle('text');

        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));

        msg.innerHTML = `Unscramble The Answer:- ${randWords}`;


        hintQuestions();








    } else{
        let tempWord = guess.value;
        if(tempWord===newWords){
            // console.log("sahi");
            play=false;
            msg.innerHTML = `CORRECT!, IT IS ${newWords}`;
            btn.innerHTML="Next";
            guess.classList.toggle('text');
            guess.value="";
            show.style.display="none";
            skip.style.display="none";
        }else{
            // console.log("galat");
            msg.innerHTML=`ITS INCORRECT. TRY AGAIN -- ${randWords}`;
            show.style.display="block";
            show.innerHTML='STUCK ? SHOW ANSWER';

            show.addEventListener("click", ()=>{

                // let a = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                if(newWords===sWords[0]){
                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let a = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                    show.innerHTML='2008';
                    guess.value="2008";

                }
                else if(newWords===sWords[1]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='dumbledore';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let b = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                    show.innerHTML='mjolnir';
                    guess.value="mjolnir";

                }

                else if(newWords===sWords[2]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='tomriddle';
                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let c = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='vibranium';
                    guess.value="vibranium";

                }

                else if(newWords===sWords[3]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='hagrid';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let d = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='tchalla';
                    guess.value="tchalla";

                }

                else if(newWords===sWords[4]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='slytherin';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let e = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='chitauri';
                    guess.value="chitauri";

                }

                else if(newWords===sWords[5]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='voldemort';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let f = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='storkclub';
                    guess.value="storkclub";

                }

                else if(newWords===sWords[6]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='siriusblack';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let g = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='gamora';
                    guess.value="gamora";

                }

                else if(newWords===sWords[7]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='spiders';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let h = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');
                    if(a===true){
                    show.innerHTML='harley';
                    guess.value="harley";
                    }
                }

                else if(newWords===sWords[8]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='fang';

                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let i = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                    show.innerHTML='hydra';
                    guess.value="hydra";

                }

                else if(newWords===sWords[9]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='ginny';
                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let j = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                    show.innerHTML='korg';
                    guess.value="korg";

                }

                else if(newWords===sWords[10]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='keeper';
                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let k = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER?');

                    show.innerHTML='malekith';
                    guess.value="malekith";

                }

                else if(newWords===sWords[11]){
                    // confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? IF YES, CLICK AGAIN');
                    // show.innerHTML='ginny';
                    // show.innerHTML='STUCK ? SHOW ANSWER';
                    // let j = confirm('ARE YOU SURE YOU WANT TO SEE THE ANSWER? ');

                    show.innerHTML='morag';
                    guess.value="morag";

                }
            })
        }
    }
})



function hintQuestions(){
    if(newWords===sWords[0]){
            hint.innerHTML='HINT:Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets’? ';
            console.log("2008");

        }
        else if(newWords===sWords[1]){
            hint.innerHTML='HINT: Who has given Harry Potter the Invisibility cloak?';
            console.log("mjolnir");
        }

        else if(newWords===sWords[2]){
            hint.innerHTML='HINT: The actual name of Lord Voldemort is ';
            console.log("vibranium");
        }


        else if(newWords===sWords[3]){
            hint.innerHTML='HINT: Who brought Harry to Hogwarts when he was matured to go there?';
            console.log("tchalla");
        }


        else if(newWords===sWords[4]){
            hint.innerHTML='HINT:In his first quidditch match, Harry’s team was against which House';
            console.log("chitauri");
        }





        else if(newWords===sWords[5]){
            hint.innerHTML='HINT: Man behind the scar of harry potter';
            console.log("storkclub");
        }

        else if(newWords===sWords[6]){
            hint.innerHTML="HINT: Who is Harry Potter's godfather?";
            console.log("gamora");
        }

        else if(newWords===sWords[7]){
            hint.innerHTML='HINT: Which type of insect is Ronald Weasley most afraid of?';
            console.log("harley");
        }


        else if(newWords===sWords[8]){
            hint.innerHTML='HINT: What is the name of Hagrid’s big dog?';
            console.log("hydra");
        }



        else if(newWords===sWords[9]){
            hint.innerHTML="HINT: What is the first name of Harry Potter's wife?";
            console.log("korg");
        }





        else if(newWords===sWords[10]){
            hint.innerHTML='HINT:What do you call the person who defends the goal post in Quidditch?';
            console.log("malekith");
        }

        else if(newWords===sWords[11]){
            hint.innerHTML='HINT:What part of the United Kingdom is Hogwarts School located in?';
            console.log("morag");
        }

}