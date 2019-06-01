import { DOB } from './../src/calculator.js';

describe('DOB', function() {

  it('should test the constructor for year, month, and day', function() {
    var test = new DOB(1969, 10, 31);
    expect(test.year).toEqual(1969);
    expect(test.month).toEqual(10);
    expect(test.day).toEqual(31);
  });

  it('should test the mercury function for expected return', function() {
    var m = new DOB(1988, 8, 18);
    expect(m.mercuryAge()).toEqual('127.543');
  });

  it('should test the earth function is creating an instance', () => {
    var n = new DOB(2000, 1, 1);
    expect(n).toBeTruthy();
  });

  it('should test the venus function for correct year ratio', () => {
    var o = new DOB(2000, 1, 1);
    var venusYear = (225/365).toFixed(3);
    expect(o).toBeTruthy();
    expect(o.venusAge()).toEqual('31.362');
    expect(venusYear).toEqual('0.616');
    
  });


});