
// Type exports for consumers
// Add specific types as needed
/**
 * randomHex
 */
export function randomHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
