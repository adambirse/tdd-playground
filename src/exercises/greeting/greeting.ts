export const greeting = (name?: string, ...additionalNames: string[]) => {
  if (!name) {
    return `Hello, my friend.`;
  }

  const names = constructNames(name, additionalNames);

  if (names === names.toUpperCase()) {
    return `HELLO, ${names.toUpperCase()}!`;
  } else {
    return `Hello, ${names}.`;
  }
};

const constructNames = (name: string, additionalNames: string[]) => {
  let names = name;
  if (additionalNames) {
    additionalNames.forEach((n, index) => {
      const isLastName = index === additionalNames.length - 1;
      if (isLastName) {
        names = names.concat(" and " + n);
      } else {
        names = names.concat(", " + n);
      }
    });
  }

  return names;
};
