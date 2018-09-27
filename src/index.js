module.exports = function makeExchange(currency) {
  let obj = {};
	let countH = -1; 
  let mH = 0;
  let countQ = -1;
  let mQ = 0;
  let countD = -1;
  let mD = 0;
  let countN = -1;
  let mN = 0;
  let countP = -1;
  for(i = 0; i <= currency; i += 50){
    countH++;
    mH = i;
  }
  for(j = 0; j <= currency - mH; j += 25){
    countQ++;
    mQ = j;
  }
   for(k = 0; k <= currency - mH - mQ; k += 10){
    countD++;
    mD = k;
  }
   for(l = 0; l <= currency - mH - mQ - mD; l += 5){
    countN++;
    mN = l;
  }
   for(m = 0; m <= currency - mH - mQ - mD - mN; m++){
    countP++;
  }
  if(currency > 10000){
  obj.error = "You are rich, my friend! We don't have so much coins for exchange";
  }
  if(countH !== 0 && currency < 10000){
    obj.H = countH;
  }  
  if(countQ !== 0 && currency < 10000){
    obj.Q = countQ;
  }  
  if(countD !== 0 && currency < 10000){
    obj.D = countD;
  }  
  if(countN !== 0 && currency < 10000){
   obj.N = countN;
  }  
  if(countP !== 0 && currency < 10000){
    obj.P = countP;
  } 
  if(currency <= 0){
      obj = {};
  } 
  return obj;
}