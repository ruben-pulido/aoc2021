const file = require("./file");
const day = require("./day5");
const parser = file.lines;

describe("Day 5: Hydrothermal Venture", () => {
  describe("Part 1", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day5/test.txt");
      expect(day.part1(input)).toBe(5);
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day5/pulido.txt");
      expect(day.part1(input)).toBe(
        await file.int("./data/day5/expected-part1-pulido.txt")
      );
    });
  });

  describe.skip("Part 2", () => {
    it("Works with test input", async () => {
      const input = await parser("./data/day5/test.txt");
      expect(day.part2(input)).toBe(1924);
    });

    it("Works with ruben pulido's input", async () => {
      const input = await parser("./data/day5/pulido.txt");
      expect(day.part2(input)).toBe(
        await file.int("./data/day5/expected-part2-pulido.txt")
      );
    });
  });
});
