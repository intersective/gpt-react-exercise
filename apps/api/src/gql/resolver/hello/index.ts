export const HelloWorldResolver = {
  Query: {
    hello: (): string => {
      return `Hello from Practera!`;
    },
  },
};
