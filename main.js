let btn =document.querySelector("#but");
let body = document.querySelector("body");
let main= document.querySelector(".main")
let currMode ="light";
btn.addEventListener("click", () => {
    
    if(currMode === "light"){
        body.style.backgroundColor = "#2e2c2cff";
        main.style.backgroundColor = "#acacacff"
        currMode ="dark";

    }
    else{
        body.style.backgroundColor ="#4B3B47";
        main.style.backgroundColor= "#e0d8de"
        currMode="light";
    }
})