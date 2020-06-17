import { isFirstUpperCase } from "../isFirstUpperCase";

describe('isFirstUpperCase', () => {
  it('throws Error when no argument provided', () => {
    expect(() => isFirstUpperCase()).toThrow(Error);
  });

  it('throws Error when non-string argument provided', () => {
    expect(() => isFirstUpperCase({ foo: 'bar' })).toThrow(Error);
  });

  it('returns false when empty string provided', () => {
    expect(isFirstUpperCase('')).toBe(false);
  });

  it('returns false when string starts with a number', () => {
    expect(isFirstUpperCase('1Uppercase')).toBe(false);
  });

  it('returns false when first letter is lowercase', () => {
    expect(isFirstUpperCase('lowercase')).toBe(false);
  });

  it('returns true when first letter is uppercase', () => {
    expect(isFirstUpperCase('Uppercase')).toBe(true);
  });
});
