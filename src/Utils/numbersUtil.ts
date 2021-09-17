// Gets a non repeating randome number in the sepecific range.
export const getRandomNumber = (lastRandom: number): number => {
  const MIN_IN_ROW = 1;
  const MAX_IN_ROW = 4;
  let current = 0;
  do {
    current = Math.floor(Math.random() * MAX_IN_ROW) + MIN_IN_ROW;
  } while (current === lastRandom);
  return current;
};
