import { describe, it, expect } from "vitest";
import { parseHex } from "../parsehex";

describe("parseHex", () => {
  it("should be a function", () => {
    expect(typeof parseHex).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => parseHex(null as any)).toThrow();
  });
});
