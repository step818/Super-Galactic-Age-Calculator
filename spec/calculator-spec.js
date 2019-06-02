import { DOB } from './../src/calculator.js';

describe('DOB', function() {

  it('should test the constructor for year, month, and day', function() {
    var test = new DOB(1969, 10, 31, "male");
    expect(test.year).toEqual(1969);
    expect(test.month).toEqual(10);
    expect(test.day).toEqual(31);
    expect(test.sex).toEqual('male');
  });

  it('should test the mercury function for expected return', function() {
    var m = new DOB(1988, 8, 18,"");
    expect(m.mercuryAge()).toEqual('127.812');
  });

  it('should test the earth function is creating an instance', () => {
    var n = new DOB(2000, 1, 1, "");
    expect(n).toBeTruthy();
  });

  it('should test the venus function for correct year ratio', () => {
    var o = new DOB(2000, 1, 1, "");
    var venusYear = (225/365).toFixed(3);
    expect(o).toBeTruthy();
    expect(o.venusAge()).toEqual('31.468');
    expect(venusYear).toEqual('0.616');
    
  });
  
  it('should test mars function for correct return result', () => {
    var p = new DOB(1988, 8, 18, "");
    expect(p.marsAge()).toEqual('16.372');
  });

  it('should test jupiter function for correct return', () => {
    var q = new DOB(1988, 8, 18, "");
    expect(q.jupiterAge()).toEqual('2.568');
  });

  it('should test saturn function for correct return', () => {
    var r = new DOB(1988, 8, 18, "");
    expect(r.saturnAge()).toEqual('1.063');
  });

  it('should test Earth life expectancy returns correct output', () => {
    var s = new DOB (1988, 8, 18, "male");
    expect(s.LifeExp()).toEqual('45.585');
  });

});