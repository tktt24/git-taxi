const inputdata = document.querySelector("#inputbtn");

function nyu(){
    console.log("chinko!");
    const newH2 = document.createElement("H3");
    newH2.innerText = "入力だよ^^"
    document.body.appendChild(newH2);
}

inputdata.addEventListener("click", nyu);
