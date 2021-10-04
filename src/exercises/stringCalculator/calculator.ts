export const add = (expression: string): number => {
  const { numbers, delimiter } = extractOptions(expression);

  return numbers
    .replace(/(\n)/gm, delimiter)
    .split(delimiter)
    .map((v) => Number(v))
    .reduce((sum, current) => sum + current, 0);
};

function extractOptions(expression: string) {
  let delimiter = extractOptionalDelimiter(expression);
  let numbers;
  if (delimiter) {
    numbers = expression.substring(expression.indexOf(delimiter));
  } else {
    delimiter = ",";
    numbers = expression;
  }
  return { numbers, delimiter };
}

function extractOptionalDelimiter(numbers: string) {
  const delimterAndRest = numbers.split("\n");
  if (delimterAndRest.length > 1) {
    return delimterAndRest[0].substr(2);
  }
}
