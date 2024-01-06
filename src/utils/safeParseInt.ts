export function safeParseInt(
  s: number | string | undefined | null,
  radix = 10,
): number {
  if (typeof s === 'number') {
    return s;
  }

  if (!s) {
    return 0;
  }

  const num = parseInt(s, radix);

  if (isNaN(num)) {
    return 0;
  }

  return num;
}
