function add(...n) {
  return n.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(2, 2));

module.exports = add;
