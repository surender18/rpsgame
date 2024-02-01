
// game
let playgame =confirm("shall we play rock,paper,scissors game?");
if(playgame){ 
    while(playgame){
    const playerChoice =prompt("Please Enter rock , paper, scissors");
if(playerChoice || playerChoice ===""){
const You=playerChoice.trim().toLowerCase();
if(You === "rock"|| You ==="paper"|| You==="scissors"){
 const computerchoice =Math.floor(Math.random()*3);
 const rpsarray =["rock","paper","scissors"];
const computer =rpsarray[computerchoice];

 const result = You === computer
 ? "tie game"
 :You === "rock"&&computer === "paper"
 ? `You: ${You}\n computer: $ {computer}\nComputer wins`
 :You ==="paper"&& computer === "scissors"
 ?`You:${You}\n computer:${computer}\n computer wins`
 :You ==="scissors"&& computer === "rock"
 ?`You:${You}\n computer:${computer}\n computer wins`
 : `You:${You}\n computer:${computer}\n You wins`;
 alert(result);
 playagain =confirm("Play again?");
 if(!playgame) alert("ok,thanks for playing.");
 continue;}
 else{


    alert("You didn't Enter rock,paper,scissors");
    continue;
}
}   else{
    alert(" I think you doesn't want to Play");
    break;
}

} 

}else{
    alert("ok no problem");
}