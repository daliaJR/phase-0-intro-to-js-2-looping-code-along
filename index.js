// Code your solutions in this file
function writeCards(arr,msg){
    let output=[];
    for(let i = 0; i<arr.length;i++){
        output.push(`Thank you, ${arr[i]}, for the wonderful ${msg} gift!`);
    }
    return output;
}

writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");

function countDown(num){
    for(let i = num ; i >= 0 ;i--){
        
        console.log(i);
    }
}
console.log(countDown(10));