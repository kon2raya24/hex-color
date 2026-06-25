import { describe, it, expect } from "vitest";
import { isValidHex } from "../isvalidhex";

describe("isValidHex", () => {
  it("should be a function", () => {
    expect(typeof isValidHex).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => isValidHex(null as any)).toThrow();
  });
});
