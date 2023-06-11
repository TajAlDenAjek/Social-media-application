const Validator = require('validatorjs');
/*
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

Validator.register('telephone', function(value, requirement, attribute) {  // name , function return true/false , errormessage
    return value.match(/^\d{3}-\d{3}-\d{4}$/);
} , 'The :attribute phone number is not in the format XXX-XXX-XXXX.');

let validationWithCustomErrorMessages = new Validator(input, rules, { required: 'You forgot to give a :attribute' });

*/

const signup = async (req, res, next) => {
    
    const validationRule = {
        "username": "required",
        "email": "required|email",
        "password": "required|min:6|max:20",
    };
    let validation = new Validator(req.body , validationRule );
    if(validation.passes()){
        next();
    }
    return res.json(validation.errors.errors);
}
const login = async (req , res , next )=>{
    const validationRule = {
        "email": "required|email",
        "password": "required|min:6|max:20",
    };
    let validation = new Validator(req.body , validationRule );
    
    if(validation.passes()){
        next()
    }
    return res.json(validation.errors.errors);
}
let Validators ={
    signup ,
    login
}

module.exports = Validators;
