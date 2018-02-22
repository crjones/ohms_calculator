var test = require('tape').test;
//require('../src/modules/ohmscalculator.js');
import {IOhmValueCalculator} from './../src/modules/ohmscalculator';

test('IOhmValueCalculator:', function (t) {
    let ohmcalc = IOhmValueCalculator.calculateOhmValue;
    t.ok(Number.isFinite(ohmcalc('OG','BK','BK','BK')), "should return a Number on valid params.");
    t.equal(ohmcalc('','','',''),null, "should return null on emtpy params.");
    t.equal(ohmcalc('FV','GL','WD',''),null, "should return null on invalid params.");    
    t.equal(ohmcalc('RD','VT','BK','SR'),27, "should return 27 Ohms for Red, Violet, Black, Silver.");
    t.equal(ohmcalc('RD','RD','OG','SR'),22000, "should return 22k Ohms for Red, Red, Orange, Silver.");
    t.equal(ohmcalc('BU','GY','SR','SR'),0.68, "should return 0.68 Ohms for Blue, Gray, Silver, Silver.");
    t.equal(ohmcalc('YE','VT','BN','GD'),470, "should return 470 Ohms for Yellow, Violet, Brown, Gold.");
    t.equal(ohmcalc('GN','BU','GD','GD'),5.6, "should return 5.6 Ohms for Green, Blue, Gold, Gold.");
    t.equal(ohmcalc('OG','WH','BU','GD'),39000000, "should return 39M Ohms for Orange, White, Blue, Gold.");
    t.equal(ohmcalc('BN','RD','RD','SR'),1200, "should return 1.2k Ohms for Brown, Red, Red, Silver.");

    t.end();
});