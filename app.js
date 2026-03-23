let boxes = document.querySelectorAll(".box");

boxes.forEach((i) => {
    i.addEventListener("click", () => {
        console.log("Clicked")
    })
})