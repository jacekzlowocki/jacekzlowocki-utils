import { circleArea } from '../../index';

describe('circleArea', () => {
  it('returns NaN if non number argument is provided', () => {
    expect(circleArea('invalid')).toBe(NaN);
  });

  it('returns 0 when radius is 0', () => {
    expect(circleArea(0)).toEqual(0);
  });

  it('returns PI when radius is 1', () => {
    expect(circleArea(1)).toEqual(Math.PI);
  });

  it('returns PI when radius is "1" string', () => {
    expect(circleArea('1')).toEqual(Math.PI);
  });

  it('returns ~314.159 when radius is 10', () => {
    expect(Math.round(circleArea(10) * 1000) / 1000).toEqual(314.159);
  });
});
