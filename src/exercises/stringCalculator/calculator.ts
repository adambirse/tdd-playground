export const add = (numbers: string): number => {
  return numbers
    .replace(/(\n)/gm, ",")
    .split(",")
    .map((v) => Number(v))
    .reduce((sum, current) => sum + current, 0);
};
