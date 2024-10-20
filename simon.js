let userSeq=[];
let gameSeq=[];
let btns=["col1","col2","col3","col4"];
let gamestart=false; 
let level=0;
let yourlev=document.querySelector("h3");
document.addEventListener("click",()=>{
if(gamestart==false){
    gamestart=true;
    console.log("game started")
    levelup();
}
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    },250);
    }
    
let levelup = ()=>{
    userSeq=[];
    level++;
    yourlev.innerText=`level ${level}`;
    let rndidx=Math.floor(Math.random()*4);
    let rndcol=btns[rndidx];
    let rndbtn=document.querySelector(`.${rndcol}`);
    gameSeq.push(rndcol);
    console.log(gameSeq)
    btnflash(rndbtn);
    console.log(rndbtn);
}
function checkans(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 1000);
            
        }
        
    }
    else{
        yourlev.innerText=`Game Over! press any key to start`; 
        setTimeout(reset,1000);
    }
    
}
function btnpress(){
console.log(this);
let btn=this;
userflash(btn);
usercolor=btn.getAttribute("id");
userSeq.push(usercolor);
console.log(userSeq);
checkans(userSeq.length-1);

}
function userflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    gamestart=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}