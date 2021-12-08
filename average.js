
function average(numbers) {
  if(numbers.length == 0) return 0;
  const sum = numbers.reduce((p, c)=> p + c, 0);
  return sum / numbers.length;
}

module.exports = {average};
