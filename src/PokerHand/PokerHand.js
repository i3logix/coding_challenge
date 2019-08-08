/*
* i3logix Code Challenge
*
* Please refer to the README.md for challenge questions and complete your challenge below.
*/
export default class PokerHand {

  constructor(hand) {
    this.hand = hand;
  }

  getRank = () => {

    //could move this to constructor if other methods need it.
    let cards = this.hand.split(" ");
    let suits = cards.map( (card) => card[card.length -1] );
    let faces = cards.map( (card) =>  card.slice( 0 , card.length -1)  );
    
    //more convient to have numbers.
    faces = faces.map( card => {
      if (card === "J"){
        return 11;
      }
      if (card === "Q"){
        return 12;
      }
      if (card === "K"){
        return 13;
      }
      if (card === "A"){
        return 14;
      }
      
      return parseInt(card)
    });

    //this is useful across multiple hands
    let duplicates = {}
    faces.forEach( (el) => {
 
      if(!duplicates[el]){
        duplicates[el] = 1;
      }
      else{
        duplicates[el] = duplicates[el] + 1;
      }
    });

    let isFlush = suits.every( suit => [suits[0]].indexOf(suit) > -1 );
    
    //this is not very elegant.  Not sure if there is an easier way to do it
    faces.sort( ( (a, b) => { return a > b ? 1 : -1} ) );
    let isStraight = faces.every( (el, index, arr) => {

      if(index == 4 && el == 14 && 2 == arr[0]){
        return true;
      }

      if(!arr[index+1] && el-1 == arr[index-1]){
        return true
      }

      if(el+1 == arr[index+1] || (el == 5 && arr[index+1] == 14)){
        return true;
      }

      return false;
    })

    //we can just go down from highest rank to lowest rank
    switch (true) {

      case (
        isFlush &&
        isStraight &&
        faces.includes(14)
      ) :

        return "Royal Flush";
        break;

      case (
        isFlush &&
        isStraight
      ) :

        return "Straight Flush";
        break;

      case Object.values(duplicates).includes(4):
        
        return "Four of a Kind";
        break;

      case Object.values(duplicates).includes(3) && Object.values(duplicates).includes(2) :
      
        return "Full House";
        break;

      case isFlush :
    
        return "Flush";
        break;

      case isStraight :
  
        return "Straight";
        break;
      
      case Object.values(duplicates).includes(3) :
  
        return "Three of a Kind";
        break;

      case Object.values(duplicates).includes(2) && Object.keys(duplicates).length === 3 :

        return "Two Pair";
        break;

      case Object.values(duplicates).includes(2) && Object.keys(duplicates).length === 4 :

        return "One Pair";
        break;

      default:
        
        return "High Card"
    }
  };

}
