import { clamp } from './clamp';

export function hexToRGBA(hex: string, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const validAlpha = clamp(alpha, { min: 0, max: 1 });

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + validAlpha + ')';
}
