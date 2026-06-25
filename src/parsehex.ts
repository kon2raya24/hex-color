
// Type exports for consumers
// Add specific types as needed
export function parseHex(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.replace(/^#/, "");
  const full = cleaned.length === 3
    ? cleaned.split("").map(c => c + c).join("")
    : cleaned;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) throw new Error("Invalid hex color");
  return { r: parseInt(full.slice(0, 2), 16), g: parseInt(full.slice(2, 4), 16), b: parseInt(full.slice(4, 6), 16) };
}
