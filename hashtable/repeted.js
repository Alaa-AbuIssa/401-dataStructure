'use strict';

const {HashTable} =require("./hashtable");

function repeatedWord(string){
    if(!string){
        return 'Empty Srting';
    }

    let hashtable= new HashTable();
    let words = string.toLowerCase().split(',').join('').split(' ');
    let outPuts ="There is no duplicated words"

    for (let i = 0; i < words.length; i++) {
       let element = words[i];
       if(!hashtable.contains(element)){
           hashtable.add(element,element)
       }else{
        outPuts = element;
           break;
       }
    };
    return outPuts;
   
}
module.exports=repeatedWord;

