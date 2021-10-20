import { createOneCapitalLetterValidator } from './one-capital-letter-validator';

describe('OneCapitalLetterValidator', () => {
  it('should create an instance', () => {
    expect( createOneCapitalLetterValidator()).toBeTruthy();
  });
});
