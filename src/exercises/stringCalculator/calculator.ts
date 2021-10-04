export const add = (numbers: string): number => {
  return numbers
    .split(",")
    .map((v) => Number(v))
    .reduce((sum, current) => sum + current, 0);
};
