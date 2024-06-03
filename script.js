const winning=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnO=true;
let boxes=document.querySelectorAll(".box");
let messagecontainer=document.querySelector(".msg-container")
let message=document.querySelector("#message")
let newbutton=document.querySelector("#newbutton")
let resetbutton=document.querySelector("#resetbutton")


const resetgame=()=>{
    turnO=true;
    enablebutton();
    messagecontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner=()=>{
    for(let pattern of winning){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            showwinner(pos1val);
        }
    }
  }
}

const showwinner=(winner)=>{
    disablebutton();
    message.innerText=`Congratulations on Winning the Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
}

const disablebutton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebutton=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

Resetbutton.addEventListener("click",resetgame);
newbutton.addEventListener("click",resetgame);