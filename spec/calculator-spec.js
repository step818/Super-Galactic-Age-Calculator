import { DOB } from './../src/calculator.js';

describe('DOB', function() {

  it('should test the constructor for year, month, and day', function() {
    var test = new DOB(1969, 10, 31);
    expect(test.year).toEqual(1969);
    expect(test.month).toEqual(10);
    expect(test.day).toEqual(31);
  });
});