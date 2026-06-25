import { describe, it, expect } from "vitest";
import { rgbToHex } from "../rgbtohex";

describe("rgbToHex", () => {
  it("should be a function", () => {
    expect(typeof rgbToHex).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => rgbToHex(null as any)).toThrow();
  });
});
