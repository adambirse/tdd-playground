export const greeting = (...names: string[]) => {
  if (names.length === 0) {
    return `Hello, my friend.`;
  }

  const upperCaseNames = filterUpperCase(...names);
  const lowerCaseNames = filterLowerCase(...names);

  const upperCaseGreeting = constructGreeting(upperCaseNames);
  const lowerCaseGreeting = constructGreeting(lowerCaseNames);

  return createMessage(lowerCaseGreeting, upperCaseGreeting);
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

const createMessage = (
  lowerCaseGreeting?: string,
  upperCaseGreeting?: string
) => {
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

const constructGreeting = (names: string[]) => {
  let greeting = "";
  if (names) {
    names.forEach((n, index) => {
      const isLastName = index === names.length - 1;
      const isFirstName = index === 0;
      if (isFirstName) {
        greeting = n;
      } else if (isLastName) {
        greeting = greeting.concat(" and " + n);
      } else {
        greeting = greeting.concat(", " + n);
      }
    });
  }
  return greeting;
};
