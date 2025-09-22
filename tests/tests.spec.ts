import { greet } from "../src";

describe("greet", () => {
  it("should greet a name", () => {
    expect(greet("World")).toBe("Hello, World!");
  });
});
