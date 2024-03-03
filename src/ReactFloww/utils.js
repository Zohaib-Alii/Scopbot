export function wrapInArray(input) {
  if (!Array.isArray(input)) {
    return [input];
  }
  return input;
}
