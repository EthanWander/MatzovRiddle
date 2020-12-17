
let n = 6;
let arr = [];
let guesses = [];
let bunchAmount = 20;


function genRandom(){
  let arr = [];
  for(let i=0; i<n; i++){
    arr.push(Math.floor(Math.random()*n))
  }
  return arr;
}

function calcGuesses(){
  let ret = [];
  let sumOthersNums;
  for(let i=0; i<n; i++){
    sumOthersNums = 0;
    for(let j=0; j<n; j++){
      if(i !== j){
        sumOthersNums += arr[j];
      }
    }
    ret.push((i+sumOthersNums)%n);
  }
  return ret
}

function checkGuesses(){
  for(let i=0; i<n; i++){
    if(arr[i] == guesses[i]) return true;
  }
  return false;
}

function calcBunch(){
  for(let i=0; i<bunchAmount; i++){
    arr = genRandom();
    guesses = calcGuesses();
    console.log(arr + " => " + guesses + ": " + checkGuesses())
  }
}


calcBunch();
