export function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number
): number {
  let a = 0;
  let b = 100;
  for (let i = 1; b > threshold; i++) {
    b -= (b / 100) * evapPerDay;
    a++;
  }
  return a;
}
