
// Type exports for consumers
// Add specific types as needed
export function rgbToHex(r: number, g: number, b: number): string {
  [r, g, b].forEach(v => { if (v < 0 || v > 255) throw new Error("RGB values must be 0-255"); });
  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
}
