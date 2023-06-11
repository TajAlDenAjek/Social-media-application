
let Validator = require('validatorjs');

Validator.register('telephone', function(value, requirement, attribute) {  // name , function return true/false , errormessage
    return value.match(/^\d{3}-\d{3}-\d{4}$/);
} , 'The :attribute phone number is not in the format XXX-XXX-XXXX.');


Validator.registerAsync('username_available', function(username, attribute, req, passes) {
    // do your database/api checks here etc
    // then call the `passes` method where appropriate:
    let exist = true ;
    if(exist){
        passes(); // if username is available
    }
    else{
        passes(false, 'Username has already been taken.'); // if username is not available
    }
});

let validation = new Validator({
    name: 'D',
    email: 'not an email address.com'
    }, {
    name: 'telephone',
    email: 'required|email'
  }
);
let validationWithCustomErrorMessages = new Validator(input, rules, { required: 'You forgot to give a :attribute' });

  