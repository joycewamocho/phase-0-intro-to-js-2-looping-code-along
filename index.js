// Code your solutions in this file
function writeCards(names, surprise = "surprise") {
    const card = [];
    for (let count = 0; count < names.length; count++) {
        card.push(`Thank you, ${names[count]}, for the wonderful ${surprise} gift!`);
    }
    return card;
}


function countDown(){
    let count=10;
    while(count >= 0){
        console.log (count--);
    }
}
countDown();

