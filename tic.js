let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let  msgcontainer = document.querySelector(".msgcontainer");
let  msg = document.querySelector("#msg");


let turn= true; // player-turn

let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7]
];

const resetgame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn){
            box.innerText = "X"
            turn = false;
        }
        else{
            box.innerText = "0"
            turn = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
const disableboxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";


    }
}

const showwinner =(winner) =>{
    msg.innerText = `Congratulations ! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();


}

const checkwinner = () =>{
    for(pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]],boxes[pattern[2]]);
        let position1val = boxes[pattern[0]].innerText;
        let position2val = boxes[pattern[1]].innerText;
        let position3val = boxes[pattern[2]].innerText;
        

        if(position1val != "" && position2val != "" && position3val != ""){
            if(position1val === position2val && position2val === position3val){
                console.log("winner",position1val);
                showwinner(position1val);
            }

        }

    }

}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);



