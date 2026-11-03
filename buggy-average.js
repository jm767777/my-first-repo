const scores = [80, 90, 100];

function calculateAverage(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return total / (values.length - 1);
}

console.log(calculateAverage(scores));
