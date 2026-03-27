let mainBody = document.querySelector("#maincontent");
let button= document.querySelector("#gridSize");
let size = 16;
let colorful=true;
function gridMap(a){
    for (let i=0;i<a;i++){
        let container = document.createElement("div");
        for (let j=0;j<a;j++){
            let box = document.createElement("div");
            box.setAttribute("style","flex:1")
            if (colorful) {
                let red = 255*Math.random();
                let blue = 255*Math.random();
                let green= 255*Math.random();
                box.addEventListener("mouseenter",()=>box.style.backgroundColor=`rgb(${red},${blue},${green})`)
            } else{box.addEventListener("mouseenter",()=>box.style.backgroundColor="black")}
            container.appendChild(box);
        }
        container.setAttribute("style","display:flex;flex-direction:row;flex:1")
        mainBody.appendChild(container)
    }
    
}

function gridSize(){
    let size2 = size
    size = prompt("Enter grid size","16")
    if (size>100 || size<=0){
        alert('Invalid Size')
        size= size2;
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
    colorful=false;
    gridMap(size);
}
function clrfunc(){
    if (colorful==true) {colorful=false}
    else {colorful=true}
    mainBody.textContent='';
    gridMap(size);
}