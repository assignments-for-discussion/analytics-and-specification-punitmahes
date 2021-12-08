
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length || 0;
}

module.exports = {average};
