export const greeting = (...names: string[]) => {
  if (names.length === 0) {
    return `Hello, my friend.`;
  }
  names = removeCommas(...names);

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

export const removeCommas = (...values: string[]) => {
  let results: string[] = [];
  values.forEach((v) => {
    results = results.concat(v.split(",").map((e) => e.trim()));
  });
  return results;
};

const createMessage = (
  lowerCaseGreeting?: string,
  upperCaseGreeting?: string
) => {
  if (lowerCaseGreeting && upperCaseGreeting) {
    return `Hello, ${lowerCaseGreeting}. AND HELLO ${upperCaseGreeting.toUpperCase()}!`;
  } else if (lowerCaseGreeting) {
    return `Hello, ${lowerCaseGreeting}.`;
  } else {
    return `HELLO, ${upperCaseGreeting.toUpperCase()}!`;
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
