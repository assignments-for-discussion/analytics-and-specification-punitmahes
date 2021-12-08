
function average(numbers) {
  if(numbers.length == 0) return NaN;
  const sum = numbers.reduce((p, {c})=> p + c, 0);
  return (sum / numbers.length) || 0;
}

module.exports = {average};
