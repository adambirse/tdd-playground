export const greeting = (...names: string[]) => {
  if (names.length === 0) {
    return `Hello, my friend.`;
  }

  const upperCaseNames = filterUpperCase(...names);
  const lowerCaseNames = filterLowerCase(...names);

  const upperCaseGreeting = constructNames(upperCaseNames);
  const lowerCaseGreeting = constructNames(lowerCaseNames);

  const lowerCaseString = lowerCaseGreeting
    ? `Hello, ${lowerCaseGreeting}.`
    : "";

  if (lowerCaseGreeting && upperCaseGreeting) {
    const upperCaseString = upperCaseGreeting
      ? `HELLO ${upperCaseGreeting.toUpperCase()}!`
      : "";
    return `${lowerCaseString} AND ${upperCaseString}`;
  } else if (lowerCaseGreeting) {
    return lowerCaseString;
  } else {
    const upperCaseString = upperCaseGreeting
      ? `HELLO, ${upperCaseGreeting.toUpperCase()}!`
      : "";
    return upperCaseString;
  }
};

export const filterUpperCase = (...values: string[]) => {
  return values.filter((v) => {
    return v === v.toUpperCase();
  });
};

export const filterLowerCase = (...values: string[]) => {
  return values.filter((v) => {
    return v !== v.toUpperCase();
  });
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
