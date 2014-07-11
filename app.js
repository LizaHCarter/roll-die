var prompt = require('sync-prompt').prompt;

function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
  }

var z;

for(var i = 0; i < 10; i++){
z = rollDie();
console.log('roll: '+z);
}

function isPair(roll1,roll2){
  if(roll1 === roll2){
    return true;
  }else{
    return false;
  }
}

console.log(isPair(rollDie(),3));


function countPairs(amounts){
  var pairs = 0;
  for(var i = 0; i < amounts; i++){
   if (isPair(rollDie(),rollDie()) === true){
  pairs += 1;
   }
  }
     return pairs;
}

console.log(countPairs(10000));
