import { describe, it, expect } from "vitest";
import { randomHex } from "../randomhex";

describe("randomHex", () => {
  it("should be a function", () => {
    expect(typeof randomHex).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => randomHex(null as any)).toThrow();
  });
});
