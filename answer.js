function solution(number){
  let newArr= []
  for(let i=1;i<number;i++){
    i%5==0 || i%3==0 ? newArr.push(i) : newArr
  }
  let result = newArr.length!==0 ? newArr.reduce((a,b)=>a+b) : 0
  return result
}

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

solution= n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)
