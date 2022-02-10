var cardOne=0;
var cardTwo=10;
var cardThree=0;
var sum=cardOne+cardTwo;
var resLoc= document.getElementById("result");
var cardsLoc=document.getElementById("cards")
var sumLoc= document.getElementById("sum")
function Result(){
    if (sum===21){
        resLoc.innerText="You've got Jack";
    }else if(sum<=21){
        resLoc.innerText="One more card?";
    }else{
        resLoc.innerText="You Lost!";
    }

    cardsLoc.innerText+= " "+cardOne + " " + cardTwo;
    sumLoc.innerText+= sum;

    
}

