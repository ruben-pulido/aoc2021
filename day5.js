module.exports.part1 = (input) => {
  let ventStrengthMap = new Map();

  function getKey(x, y) {
    return x + "," + y;
  }

  for (let i = 0; i < input.length; i++) {
    let x1 = input[i][0][0];
    let y1 = input[i][0][1];
    const x2 = input[i][1][0];
    const y2 = input[i][1][1];

    if (x1 !== x2 && y1 !== y2) {
      continue;
    }

    if (x1 === x2) {
      const sign = y2 - y1 > 0 ? 1 : -1;

      while (y1 !== y2 + sign * 1) {
        let newVentStrength = ventStrengthMap.get(getKey(x1, y1)) || 0;
        ventStrengthMap.set(getKey(x1, y1), newVentStrength + 1);
        y1 = y1 + sign * 1;
      }
    } else {
      const sign = x2 - x1 > 0 ? 1 : -1;

      while (x1 !== x2 + sign * 1) {
        let newVentStrength = ventStrengthMap.get(getKey(x1, y1)) || 0;
        ventStrengthMap.set(getKey(x1, y1), newVentStrength + 1);
        x1 = x1 + sign * 1;
      }
    }
  }

  const map1 = new Map([...ventStrengthMap].filter(([k, v]) => v >= 2).sort());

  return map1.size;
};

module.exports.part2 = (input) => {
  return 0;
};
