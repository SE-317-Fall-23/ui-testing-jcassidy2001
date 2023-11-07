//@vitest-environment jsdom
import userModel from './main.js';
import {test, expect} from 'vitest'

//postivite tests 
test('user Input returns true', () => {
    expect(userModel.validateName('Jack')).toBe(true);
    expect(userModel.validateName('Cassidy')).toBe(true);
    expect(userModel.validateEmail('jcassidy@iastate.edu')).toBe(true);
    expect(userModel.validateAddress("123 Fake Street")).toBe(true);
    expect(userModel.validateAddress("Apartment 73")).toBe(true);
    expect(userModel.validateAddress("Ames")).toBe(true);
    expect(userModel.validateAddress("Iowa")).toBe(true);
    expect(userModel.validateZipCode("50014")).toBe(true);
  });
  //negative tests 
  test('user Input returns false', ()=> {

  });