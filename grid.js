let row=0;
let col=0;
let grid = false;
function createGrid(event) {
    event.preventDefault();
    if(grid){
        alert("You already created the grid!")
        return;
    }
    grid = true;
    row = parseInt(document.getElementsByTagName("input")[0].value);
    col = parseInt(document.getElementsByTagName("input")[1].value);
    let box = document.createElement("table");
    box.setAttribute("border","1");
    for(var i=0; i<row; i++){
        let tablerow = document.createElement("tr");
        for(var j=0; j<col; j++){
            let division = document.createElement("td");
            division.setAttribute("style","width:100px; height:100px; border:1px solid black; box-sizing: border-box; background-color: rgba(28, 84, 148, 1); border-color: aquamarine;");
            tablerow.appendChild(division);
            if(i==0 && j==0){
                let border = document.createElement("div");
                border.setAttribute("class","border");
                border.setAttribute("style","position:absolute; top:0; left:0; width:96px; height:96px; border:2px solid white; border-radius:10px; transition: left 0.2s linear, top 0.2s linear;");
                division.appendChild(border);

                let image = document.createElement("img");
                image.setAttribute("src","shinchan_gif.gif");
                image.setAttribute("id","cute");
                image.setAttribute("style", "position:absolute; top:0; left:0; width:100px; height:100px; transition: left 0.8s linear, top 0.8s linear;");
                division.appendChild(image);
            }
        } 
        box.appendChild(tablerow);
    }
    box.setAttribute("cellspacing","0");
    box.setAttribute("cellpadding","0");
    box.setAttribute("style", "position: relative; overflow:hidden;")
    document.getElementsByTagName("body")[0].appendChild(box);


    let div = document.createElement("div");
    div.setAttribute("style", "display: flex; padding: 5px 10px; gap: 10px; border:1px solid black; border-radius: 10px; background-color:aquamarine;")
    let left = document.createElement("button");
    let right = document.createElement("button");
    let top = document.createElement("button");
    let bottom = document.createElement("button");

    left.innerText = "Left";
    left.setAttribute("style","width:60px; height:30px; border-radius:10px; border:1px solid blue; background-color:rgba(28,84,148,1); color:white;");
    left.setAttribute("onclick", "leftfun()");

    right.innerText = "Right";
    right.setAttribute("style","width:60px; height:30px; border-radius:10px; border:1px solid blue; background-color:rgba(28,84,148,1); color:white;");
    right.setAttribute("onclick","rightfun()");

    top.innerText = "Top";
    top.setAttribute("style","width:60px; height:30px; border-radius:10px; border:1px solid blue; background-color:rgba(28,84,148,1); color:white;");
    top.setAttribute("onclick","topfun()")

    bottom.innerText = "Bottom";
    bottom.setAttribute("style","width:60px; height:30px; border-radius:10px; border:1px solid blue; background-color:rgba(28,84,148,1); color:white;");
    bottom.setAttribute("onclick","bottomfun()")


    div.appendChild(left);
    div.appendChild(right);
    div.appendChild(top);
    div.appendChild(bottom);
    document.getElementsByTagName("body")[0].append(div);

    
}
let lPos = 0;
let tPos = 0;
function leftfun(){
    var ele = document.getElementById("cute");
    lPos -= 100;
    if(lPos < 0){
        alert("You are trying to move out of the grid.");
        lPos += 101;
        return;
    }
    ele.style.left = lPos + "px";
    ele.style.transform = "rotateY(0deg)";
    document.getElementsByClassName("border")[0].style.left = lPos + "px";
}
function rightfun() {
    let ele = document.getElementById("cute");
    lPos += 100;
    if(lPos >= col*100){
        alert("You are trying to move out of the grid.");
        lPos -= 100;
        return;
    }
    ele.style.left = lPos + "px";
    ele.style.transform = "rotateY(180deg)";
    document.getElementsByClassName("border")[0].style.left = lPos + "px";
}
function topfun() {
    tPos -= 100;
    if(tPos < 0){
        alert("You are trying to move out of the grid.");
        tPos += 100;
        return;
    }
    document.getElementById("cute").style.top = tPos + "px";
    document.getElementsByClassName("border")[0].style.top = tPos + "px";
}
function bottomfun() {
    tPos += 100;
    if(tPos >= row*100){
        alert("You are trying to move out of the grid.");
        tPos -= 100;
        return;
    }
    document.getElementById("cute").style.top = tPos + "px";
    document.getElementsByClassName("border")[0].style.top = tPos + "px";
}