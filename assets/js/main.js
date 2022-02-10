

//let card = '3537791645445008';


function IDcheck(){
  let card = document.getElementById('xvar').value.split("").reverse() .map(i => +i);
  console.log(card);

  let regExMastercard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
  let regExAmEx = /^3[47][0-9]{13}$/
  let regExVisa = /^4[0-9]{12}(?:[0-9]{3})?$/
  let regExDiscover = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
  let regExMaestro = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/;
  let regExJCB = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/;
  let regExDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;



  var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
   if(creditCradNum.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter a valid credit card number.");
     return false;
     }
  /*
card = card.split('') .reverse() .map(i => +i);
console.log(card);
let sum = 0;
for  (let i = 0; i< card.length; i++){
if(i % 2 == 0) {
    sum = sum + card[i];
} else {
    let double = card[i] * 2;
    sum = sum + (double > 9 ? double - 9 : double);
}

}
let isCorrect = sum % 10 == 0;

console.log(`Is Correct:`, isCorrect);
//


console.log(card);
*/
