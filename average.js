
function average(numbers) {
  if(numbers.length == 0) return NaN;
  var count = 0;
  const sum = numbers.reduce(function(p,c){
    console.log(p);
    if(isNaN(c)){
        count++;
        return p;
    }
    else{
        return p+c;
    }
},0);
  return (sum / (numbers.length - count)) || 0;
}

module.exports = {average};
