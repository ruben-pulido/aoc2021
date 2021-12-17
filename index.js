const file = require("./file");
const day = require("./day5");
const parser = file.lines;

(async () => {
  const input = await parser("./data/day5/test.txt");
  // const input = await parser("./data/day5/test2.txt");
  // const input = await parser("./data/day5/test3.txt");
  // const input = await parser("./data/day5/pulido.txt");
  day.part1(input);
})();
