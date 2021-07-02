function sum(arg) {
  if (arg === undefined) {
    throw new Error("No parameter provided");
  }

  return arg.reduce((a, v) => a + v);
}

module.exports = sum;
