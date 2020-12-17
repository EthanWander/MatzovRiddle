
let n = 4;
let arr = [];
let guesses = [];
let bunchAmount = 20;
let couples = [];


function genRandom(){
  let arr = [];
  for(let i=0; i<n; i++){
    arr.push(Math.floor(Math.random()*n))
  }
  return arr;
}

function calcCouple(couple){
  let ret = [];
  let sumOthersNums;
  for(let i=0; i<2; i++){
    sumOthersNums = 0;
    for(let j=0; j<2; j++){
      if(i !== j){
        sumOthersNums += couple[j];
      }
    }
    ret.push((i+sumOthersNums)%n);
  }
  return ret
}

function calcBinCouple(couple){
  let ret = [];
  let sumOthersNums;
  for(let i=0; i<2; i++){
    sumOthersNums = 0;
    for(let j=0; j<2; j++){
      if(i !== j){
        sumOthersNums += couple[j];
      }
    }
    ret.push((i+sumOthersNums)%2);
  }
  return ret
}

function checkGuesses(){
  for(let i=0; i<n; i++){
    if(arr[i] == guesses[i]) return true;
  }
  return false;
}


function isConsecutive(couple){
  let diff = couple[1] - couple[0];
  if(diff == 1 || diff == 0) return 1;
  if(couple[0] == n-1 && couple[1] == 0) return 1;
  return 0;
}


function seperateToCouples(){
  let ret = [];
  for(let i=0; i<n; i+=2){
    let couple = [];
    couple.push(arr[i]);
    couple.push(arr[i+1]);
    ret.push(couple);
  }
  return ret;
}

function boolifyCouples(){
  couples = seperateToCouples();
  let boolCouples = [];
  for(let i=0; i<n/2; i++){
    boolCouples.push(isConsecutive(couples[i]));
  }
  return boolCouples;
}

function addTwoToCouple(couple){
  let ret = [];
  for(let i=0; i<2; i++){
    let a = couple[i] + 2;
    a = a % n;
    ret.push(a);
  }
  return ret;
}

function calcQuad(){
  let boolCouples = boolifyCouples();
  let flipCalcByCouple = calcBinCouple(boolCouples);
  guesses = [];

  for(let i=0; i<n/2; i++){
    let retCouple = calcCouple(couples[i]);
    if(flipCalcByCouple[i]) retCouple = addTwoToCouple(retCouple);
    guesses.push(retCouple[0]);
    guesses.push(retCouple[1]);
  }

  return guesses;
}

function calcBunch(){
  for(let i=0; i<bunchAmount; i++){
    arr = genRandom();
    guesses = calcQuad();
    console.log(arr + " => " + guesses + ": " + checkGuesses())
  }
}

calcBunch();
