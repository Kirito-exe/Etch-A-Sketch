let mainBody = document.querySelector("#maincontent");
let button= document.querySelector("#gridSize")
let size = 16
function gridMap(a){
    for (let i=0;i<a;i++){
        let container = document.createElement("div");
        for (let j=0;j<a;j++){
            let box = document.createElement("div");
            box.setAttribute("style","border:2px black solid;flex:1")
            box.addEventListener("mouseenter",()=>box.style.backgroundColor="grey")
            container.appendChild(box);
        }
        container.setAttribute("style","display:flex;flex-direction:row;flex:1")
        mainBody.appendChild(container)
    }
    
}

function gridSize(){
    size = prompt("Enter grid size","16")
    if (size>100 || size<=0){
        alert('Invalid Size')
    } else{
        button.textContent="Grid Size:"+ size;
        mainBody.textContent='';
        gridMap(size)
        }
    }
button.textContent="Grid Size:"+ size;
gridMap(size)
function reset(){
    mainBody.textContent='';
    gridMap(size);
}