
function average(numbers) {
  if(numbers.length == 0) return NaN;
  const sum = array.reduce(function(p,c){
    console.log(p);
    if(isNaN(c)){
        return p;
    }
    else{
        return p+c;
    }
},0);
  return (sum / numbers.length) || 0;
}

module.exports = {average};
