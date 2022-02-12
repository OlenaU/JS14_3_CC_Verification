//https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0#JavaScript
//https://en.wikipedia.org/wiki/Payment_card_number
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#example_using_test
//https://www.youtube.com/watch?v=_pLpx6btq6U  Regex
//https://www.regular-expressions.info/creditcard.html regex

//JCB card with spaces 3569 9900 1009 5841

function cardcheck(){

  let card = document.getElementById('xvar').value.replace(/ /g,"").split("");
  console.log(card);
  let card1 = card.reverse().map(i => +i);
 
  let sum = 0;
  for  (let i = 0; i< card1.length; i++){
  if(i % 2 == 0) {
      sum = sum + card1[i];
  } 
  else 
  {
     let double = card1[i] * 2;
      sum = sum + (double > 9 ? double - 9 : double);
  }
  
  }
  let isCorrect = sum % 10 == 0;

     let amex = /^3[47][0-9]{13}$/;

     let visa = /^4\d{3}(| |-)(?:\d{4}\1){2}\d{4}$/;  
   
     let mastercard = /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
     
     let disco = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
     
     let diners =  /^(?:5[45]|36|30[0-5]|3095|3[8-9])\d+$/; //
     
     let jcb =  /^35[0-9]{14}[0-9]*$/;

     let maestro = /^(?:50|5[6-9]|6[0-9])\d+$/; 
     
                  
     if (isCorrect == true) 
     {
        
     var x = document.getElementById('xvar').value.replace(/ /g,"");
    
     if (visa.test(x)) 
        {
            window.alert(`${x} is a valid Visa card number`);
        }
       else if(amex.test(x))
        {
            window.alert(`${x} is a valid American Express card number`);
          
        }
        else if( mastercard.test(x))
        {
            window.alert(`${x} is a valid Mastercard number`);
          
        }
        else if( disco.test(x))
        {
            window.alert(`${x} is a valid Discover card number`);
          
        }
        else if( diners.test(x))
        {
            window.alert(`${x} is a valid Diners card number`);
          
        }
        else if( jcb.test(x))
        {
            window.alert(`${x} is a valid JCB card number`);
          
        }
        else if( maestro.test(x))
        {
            window.alert(`${x} is a valid Maestro card number`);
          
        }

        else 
        { 
            window.alert(" Uknown card vendor.");
         } 

   
       }
    
       else 

       { 
         window.alert(" Incorrect card number or uknown card vendor.");
       }  
}





