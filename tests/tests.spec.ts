import { BloomFilter } from "../src/BloomFilter";

describe("BloomFilter", () => {
  it("should confirm added elements", () => {
    const filter = new BloomFilter(50, 3);
    filter.add("cat");
    filter.add("dog");

    expect(filter.contains("cat")).toBe(true);
    expect(filter.contains("dog")).toBe(true);
  });

  it("should return false for definitely missing elements", () => {
    const filter = new BloomFilter(50, 3);
    filter.add("cat");

    expect(filter.contains("elephant")).toBe(false);
  });

  it("may return true for false positives", () => {
    const filter = new BloomFilter(10, 3);
    filter.add("apple");
    filter.add("banana");

    // "cherry" is probably false, but could be a false positive
    const result = filter.contains("cherry");
    expect(typeof result).toBe("boolean");
  });
});
