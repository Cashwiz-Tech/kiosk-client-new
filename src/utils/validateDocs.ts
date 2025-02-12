export function isIdValid(id: string): boolean {
  id = id.trim();

  return id.length === 9 &&
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) % 10 === 0
}
