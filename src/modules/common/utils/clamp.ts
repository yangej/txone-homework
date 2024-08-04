export function clamp(
  value: number,
  { min, max }: { min: number; max: number },
) {
  if (value > max) return max;
  if (value < min) return min;

  return value;
}
