export const addCapitalFirstLetter = (string: string | undefined) => {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
};
