export const generateMathTask = (limit: number = 10): number[] => {
  const firstNumber: number = Math.floor(Math.random() * (limit - 1) + 1);
  const secondNumber: number = Math.floor(Math.random() * (limit - 1) + 1);

  return [firstNumber, secondNumber];
};
