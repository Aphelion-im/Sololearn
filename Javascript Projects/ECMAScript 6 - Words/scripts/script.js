"use strict";

window.addEventListener("load", () => {

  class Add {
    constructor(...words) {
      this.words = words;
    }
    //your code goes here
    print() {
      const wordsWithDolars = this.words.map(word => `${word}$`);
      const reducedWordsWithDolars = wordsWithDolars.reduce((acc, currentValue) => acc + currentValue, '$');
      console.log(reducedWordsWithDolars);
    }
  }

  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();












}); // End load event listener