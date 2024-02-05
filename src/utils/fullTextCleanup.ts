export function fullTextCleanup(s: string): string | null {
  s = s.replace(/\s+/, " ").trim();

  if (!s) {
    return null;
  }

  return s
    .split(" ")
    .map((w) => `%${w}%`)
    .join(" ");
}
