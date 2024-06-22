const boxes=document.querySelectorAll('.box');
let player0=true;
const ach=document.getElementById('instruction');
const msg=document.getElementById('msg');
const card=document.querySelector('.card');
const whole=document.querySelector('section');
const close=document.getElementById('con');
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box) => {
    box.addEventListener('click',function(){
        if(player0)
            {
                
                box.innerHTML="X"
                player0=false;
                ach.innerHTML="Now <br>Player O turn !";

            }
            else{
               
                box.innerHTML="O"
                player0=true;
                ach.innerHTML="Now <br>Player X turn !";
            }
        box.disabled=true;  
        checkwinner(); 
    })
    
})

function checkwinner(){
    for(let w of winner)
        {
            let pos1=boxes[w[0]].innerText;
            let pos2=boxes[w[1]].innerText;
            let pos3=boxes[w[2]].innerText;
            // console.log(pos1.innerText, pos2.innerText ,pos3.innerText)
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3)
                    {
                        card.classList.remove("novis");
                        card.classList.add("vis");
                        card.classList.add("shift");
                        whole.classList.add("blur");
                        msg.innerHTML=`Winner is ${pos1}`;
                        ach.style.display="none";
                        boxes[w[0]].style.backgroundColor="rgb(247, 220, 220)";
                        boxes[w[1]].style.backgroundColor="rgb(247, 220, 220)";
                        boxes[w[2]].style.backgroundColor="rgb(247, 220, 220)";
                        boxes[w[0]].style.color="rgb(202, 158, 158)";
                        boxes[w[1]].style.color="rgb(202, 158, 158)";
                        boxes[w[2]].style.color="rgb(202, 158, 158)";
                        disablebutton();
                    }

            }
            
        }
}

function disablebutton(){
    for(let box of boxes){
        box.disabled=true;
    }
}

const restart=document.getElementById('rebtn');
restart.addEventListener('click',function(){
     player0=true;
     ach.style.display="block";
     ach.innerHTML="First Player starts as <b>Player X</b> and Second Player as <b>Player 0</b>";
     for(let box of boxes){
        box.innerHTML="";
        box.style.backgroundColor="rgb(202, 158, 158)";
        box.style.color="white";
     }
     msg.innerHTML="";
     enablebutton();
})

function enablebutton(){
    for(let box of boxes){
        box.disabled= false;
    }
}
con.addEventListener('click',function(){
    card.classList.add("novis");
    card.classList.remove("vis");
    card.classList.remove("shift");
    whole.classList.remove("blur");
})