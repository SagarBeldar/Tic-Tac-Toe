let boxes = document.querySelectorAll(".box");
let rst_btn = document.querySelector(".reset");
let msg_container=document.querySelector(".msg-container");
let new_game=document.querySelector("#new-game");
let msg=document.querySelector("#msg");

let turn0 = true;
const winPattern = [
    [0,1,2], 
    [0,3,6], 
    [0,4,8], 
    [1,4,7], 
    [2,5,8], 
    [2,4,6], 
    [3,4,5], 
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");
        // box.innerText="X"
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled=true;
        checkwinner();
    });
});
 
const reset_btn=()=>{
    turn0=true;
    EnabledBoxes();
    msg_container.classList.add("hide");
}

const disabledBoxes=()=>{
   for (const box of boxes) {
    box.disabled=true;
   }
}

const EnabledBoxes=()=>{
    for (const box of boxes) {
     box.disabled=false;
     box.innerText="";
    }
 }

const showWinner=(winner)=>{
    msg.innerText=`Congratulation....! winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledBoxes();
}

const checkwinner=()=>{
    for (const pattern of winPattern) {
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        //console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

       if(pos1Val!=""&& pos2Val!=""&& pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
       }
    }
}

new_game.addEventListener("click",reset_btn);
rst_btn.addEventListener("click",reset_btn);
