export const greeting = (...names: string[]) => {
  if (names.length === 0) {
    return `Hello, my friend.`;
  }

  const greeting = constructNames(names);

  if (greeting === greeting.toUpperCase()) {
    return `HELLO, ${greeting.toUpperCase()}!`;
  } else {
    return `Hello, ${greeting}.`;
  }
};

const constructNames = (additionalNames: string[]) => {
  let names = "";
  if (additionalNames) {
    additionalNames.forEach((n, index) => {
      const isLastName = index === additionalNames.length - 1;
      const isFirstName = index === 0;
      if (isFirstName) {
        names = n;
      } else if (isLastName) {
        names = names.concat(" and " + n);
      } else {
        names = names.concat(", " + n);
      }
    });
  }

  return names;
};
