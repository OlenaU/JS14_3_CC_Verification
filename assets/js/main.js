//https://en.wikipedia.org/wiki/Payment_card_number


let card = '3537791645445008';
//2720990734838177

const arrlength = [13, 14, 15, 16, 17, 18, 19]

function cardcheck(){

  let card = document.getElementById('xvar').value.split("").reverse() .map(i => +i);
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
}


  let card = document.getElementById('xvar').value.split("")
     
     let amex = /^3[47][0-9]{13}$/;
     let visa =/^4[0-9]{12}(?:[0-9]{3})?$/;
   
     //let mastercard = /(^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
     
     let disco1 = /65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
     
     
     let diners = /^3[0689][0-9]{12}[0-9]*$/;
     let jcb =  /^35[0-9]{14}[0-9]*$/;
   
    
     var x = document.getElementById("xvar").value;

  if(amex.test(x))
        {
            window.alert(`${x} is a valid American Express number`);
            
        }
     else if (visa.test (x)) 
        {
            window.alert(`${x} is a valid Visa number`);
        }

        else 
        { 
            window.alert(" uknown card number.");
         } 

    if(amex.test(x))
        {
            window.alert(`${x} is a valid American Express number`);
            
        }
 else { window.alert("Invalid Aadhar no.");
       }
      









/*
  function cardcheck(){
  let card = document.getElementById('xvar').value.split("")//.reverse() .map(i => +i);
  console.log(card);
    let amex = /('^3[47][0-9]{13}$');
    let visa = /('^4[0-9]{12}(?:[0-9]{3})?$');
    let cup1 = /('^62[0-9]{14}[0-9]*$');
    let cup2 = /('^81[0-9]{14}[0-9]*$');
  
    let mastercard = /("^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$";);
    
    let disco1 = /('^6011[0-9]{12}[0-9]*$');
    let disco2 = /('^62[24568][0-9]{13}[0-9]*$');
    let disco3 = /('^6[45][0-9]{14}[0-9]*$');
    
    let diners = /('^3[0689][0-9]{12}[0-9]*$');
    let jcb =  /('^35[0-9]{14}[0-9]*$');
  
  
    if (visa.test(card) {    //RegExp.prototype.test()
      return 'VISA';
    }
    if (amex.test(cc)) {
      return 'AMEX';
    }
    if (mastercard.test(cc) || mastercard2.test(cc)) {
      return 'MASTERCARD';
    }
    if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
      return 'DISCOVER';
    }
    if (diners.test(cc)) {
      return 'DINERS';
    }
    if (jcb.test(cc)) {
      return 'JCB';
    }
    if (cup1.test(cc) || cup2.test(cc)) {
      return 'CHINA_UNION_PAY';
    }
    return undefined;
  }




/*


  //let card = '3537791645445008'
  let  regExMastercard = (/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/);
   if(cardnum.value.match(regExMastercard))
     {
      console.log(`you have a MasterCard`);
     }
   else
     {
     alert("Please enter a valid credit card number.");
     console.log(`your card number type is uknown`);
     }
    }
     
/*
  let regExMastercard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
  let regExAmEx = /^3[47][0-9]{13}$/
  let regExVisa = /^4[0-9]{12}(?:[0-9]{3})?$/
  let regExDiscover = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
  let regExMaestro = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/;
  let regExJCB = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/;
  let regExDiners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;*/



  
  /*

//


console.log(card);


/*
jQuery Credit Card Validator 1.2

 

(function() {
  var $, Range, Trie,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var bind, card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, j, len, normalize, ref, validate, validate_number;
    card_types = [
      {
        name: 'amex',
        range: '34,37',
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        range: '300-305',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'diners_club_international',
        range: '3095, 36, 38-39',
        valid_length: [14, 15, 16, 17, 18, 19]
      }, {
        name: 'jcb',
        range: '3088-3094, 3096-3102, 3112-3120, 3158-3159, 3337-3349, 3528-3589',
        valid_length: [16]
      }, {
        name: 'laser',
        range: '6304, 6706, 6709, 6771',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        range: '4026, 417500, 4508, 4844, 4913, 4917',
        valid_length: [16]
      }, {
        name: 'visa',
        range: '4',
        valid_length: [13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'mastercard',
        range: '51-55,2221-2720',
        valid_length: [16]
      }, {
        name: 'discover',
        range: '6011, 622126-622925, 644-649, 65',
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'dankort',
        range: '5019',
        valid_length: [16]
      }, {
        name: 'maestro',
        range: '50, 56-69',
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'uatp',
        range: '1',
        valid_length: [15]
      }, {
        name: 'mir',
        range: '2200-2204',
        valid_length: [16]
      }
    ];
    bind = false;
    if (callback) {
      if (typeof callback === 'object') {
        options = callback;
        bind = false;
        callback = null;
      } else if (typeof callback === 'function') {
        bind = true;
      }
    }
    if (options == null) {
      options = {};
    }
    if (options.accept == null) {
      options.accept = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = card_types.length; j < len; j++) {
          card = card_types[j];
          results.push(card.name);
        }
        return results;
      })();
    }
    ref = options.accept;
    for (j = 0, len = ref.length; j < len; j++) {
      card_type = ref[j];
      if (indexOf.call((function() {
        var k, len1, results;
        results = [];
        for (k = 0, len1 = card_types.length; k < len1; k++) {
          card = card_types[k];
          results.push(card.name);
        }
        return results;
      })(), card_type) < 0) {
        throw Error("Credit card type '" + card_type + "' is not supported");
      }
    }
    get_card_type = function(number) {
      var k, len1, r, ref1;
      ref1 = (function() {
        var l, len1, ref1, results;
        results = [];
        for (l = 0, len1 = card_types.length; l < len1; l++) {
          card = card_types[l];
          if (ref1 = card.name, indexOf.call(options.accept, ref1) >= 0) {
            results.push(card);
          }
        }
        return results;
      })();
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        card_type = ref1[k];
        r = Range.rangeWithString(card_type.range);
        if (r.match(number)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, k, len1, n, ref1, sum;
      sum = 0;
      ref1 = number.split('').reverse();
      for (n = k = 0, len1 = ref1.length; k < len1; n = ++k) {
        digit = ref1[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var ref1;
      return ref1 = number.length, indexOf.call(card_type.valid_length, ref1) >= 0;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid;
      card_type = get_card_type(number);
      luhn_valid = is_valid_luhn(number);
      length_valid = false;
      if (card_type != null) {
        length_valid = is_valid_length(number, card_type);
      }
      return {
        card_type: card_type,
        valid: luhn_valid && length_valid,
        luhn_valid: luhn_valid,
        length_valid: length_valid
      };
    };
    validate = (function(_this) {
      return function() {
        var number;
        number = normalize($(_this).val());
        return validate_number(number);
      };
    })(this);
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    if (!bind) {
      return validate();
    }
    this.on('input.jccv', (function(_this) {
      return function() {
        $(_this).off('keyup.jccv');
        return callback.call(_this, validate());
      };
    })(this));
    this.on('keyup.jccv', (function(_this) {
      return function() {
        return callback.call(_this, validate());
      };
    })(this));
    callback.call(this, validate());
    return this;
  };

  Trie = (function() {
    function Trie() {
      this.trie = {};
    }

    Trie.prototype.push = function(value) {
      var char, i, j, len, obj, ref, results;
      value = value.toString();
      obj = this.trie;
      ref = value.split('');
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        char = ref[i];
        if (obj[char] == null) {
          if (i === (value.length - 1)) {
            obj[char] = null;
          } else {
            obj[char] = {};
          }
        }
        results.push(obj = obj[char]);
      }
      return results;
    };

    Trie.prototype.find = function(value) {
      var char, i, j, len, obj, ref;
      value = value.toString();
      obj = this.trie;
      ref = value.split('');
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        char = ref[i];
        if (obj.hasOwnProperty(char)) {
          if (obj[char] === null) {
            return true;
          }
        } else {
          return false;
        }
        obj = obj[char];
      }
    };

    return Trie;

  })();

  Range = (function() {
    function Range(trie1) {
      this.trie = trie1;
      if (this.trie.constructor !== Trie) {
        throw Error('Range constructor requires a Trie parameter');
      }
    }

    Range.rangeWithString = function(ranges) {
      var j, k, len, n, r, range, ref, ref1, trie;
      if (typeof ranges !== 'string') {
        throw Error('rangeWithString requires a string parameter');
      }
      ranges = ranges.replace(/ /g, '');
      ranges = ranges.split(',');
      trie = new Trie;
      for (j = 0, len = ranges.length; j < len; j++) {
        range = ranges[j];
        if (r = range.match(/^(\d+)-(\d+)$/)) {
          for (n = k = ref = r[1], ref1 = r[2]; ref <= ref1 ? k <= ref1 : k >= ref1; n = ref <= ref1 ? ++k : --k) {
            trie.push(n);
          }
        } else if (range.match(/^\d+$/)) {
          trie.push(range);
        } else {
          throw Error("Invalid range '" + r + "'");
        }
      }
      return new Range(trie);
    };

    Range.prototype.match = function(number) {
      return this.trie.find(number);
    };

    return Range;

  })();

}).call(this);
*/