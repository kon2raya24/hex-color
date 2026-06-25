/**
 * isValidHex
 * @param hex
 */
export function isValidHex(hex: string): boolean {
  if (hex === null || hex === undefined) throw new Error("Invalid input");
  return /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex);
}
