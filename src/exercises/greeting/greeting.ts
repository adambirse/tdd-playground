export const greeting = (name?: string) => {
  if (!name) {
    return `Hello, my friend.`;
  } else if (name === name.toUpperCase()) {
    return `HELLO, ${name.toUpperCase()}!`;
  } else {
    return `Hello, ${name}.`;
  }
};
