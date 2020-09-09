function zipTwoCollection(arrayOne, arrayTwo) {
  return [arrayOne, arrayTwo]
    .reduce((ant, cur) => ant.map((_, i) => [{ ...ant[i], ...cur[i] }]))
    .flatMap((item) => item);
}

module.exports = zipTwoCollection;
