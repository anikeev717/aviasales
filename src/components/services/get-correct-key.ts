export const getCorrectKey = (): number => +String(Math.random()).replace('0.', '') + Date.now();
