export const add = (expression: string): number => {
  const { numbers, delimiter } = extractOptions(expression);

  return numbers
    .replace(/(\n)/gm, delimiter)
    .split(delimiter)
    .map((v) => Number(v))
    .reduce((sum, current) => {
      if (current < 1000) {
        return sum + current;
      } else {
        return sum;
      }
    }, 0);
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

const extractOptionalDelimiter = (numbers: string) => {
  if (hasDelimiter(numbers)) {
    const delimiterSection = splitDelimiter(numbers)[0];
    if (isSingleCharacterDelimiter(delimiterSection)) {
      return delimiterSection.substring(2);
    } else {
      return delimiterSection.substring(3, delimiterSection.length - 1);
    }
  }
};

const hasDelimiter = (numbers: string) => {
  return splitDelimiter(numbers).length > 1;
};

const splitDelimiter = (numbers: string) => {
  return numbers.split("\n");
};

const isSingleCharacterDelimiter = (delimter: string) => {
  return delimter.length <= 3;
};
