let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");



reset.addEventListener("click",()=> {
    console.log("reset")
    resetBtn;
})

let turnX = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((individualBox) => {
    individualBox.addEventListener("click", () => {
        console.log("Clicked");
        if(turnX) {
            individualBox.innerText = "X";
            turnX = false;
        } else {
            individualBox.innerText = "O";
            turnX = true;
        }
        individualBox.disabled = true;
    })
})