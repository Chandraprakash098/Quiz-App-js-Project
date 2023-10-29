const questions=[
    {
        que:"1)What does the abbreviation HTML stand for?",
        a:"Hypertext markup Language",
        b:"Hightext markup Language",
        c:"Hypertext markdown language",
        d:"None of the above",
        correct:"a"
    },
    {
        que:"2)How many sizes of headers are available in HTML by default?",
        a:"2",
        b:"3",
        c:"4",
        d:"6",
        correct:"d",

    },
    {
        que:"3)What is the smallest header in HTML by default?",

       a:"h1",
       b:"h2",
       c:"h3",
       d:"h6",
       correct:"d"

    }
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesbox=document.getElementById("quesbox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
  const data=questions[index];
  quesbox.innerText=data.que;
  optionInputs[0].nextElementSibling.innerText=data.a;
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
       right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
              answer= input.value;
              
        }
      }
    ) 
    return answer;

}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
      }
    ) 
}
const endQuiz=()=>{
    document.querySelector(".box").innerHTML=`<h3>Thankyou for playing</h3>
    <h2>${right}/${total}are correct</h2>`

}

loadQuestion();