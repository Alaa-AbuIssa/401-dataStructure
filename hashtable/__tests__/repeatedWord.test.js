'use strict';
const repeatedWords = require('../repeted')

describe('check repeated word',()=>{

    it('check one line statment with one letter reapeated',()=>{
        let test= "Once upon a time, there was a brave princess who..."
        expect(repeatedWords(test)).toEqual('a');
    })
    it('check one line statment with word reapeated',()=>{
        let test = " It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York.."
        expect(repeatedWords(test)).toBe('summer');
    })
    it('check if There is no duplicated words',()=>{
        let test = 'some string with no repeated words';
        expect(repeatedWords(test)).toBe('There is no duplicated words');
    })
  })
