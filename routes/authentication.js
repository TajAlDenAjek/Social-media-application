const path=require('path');
const express=require('express');
const router=express.Router();
const {authController}=require(path.join(__dirname,'..','controllers'));


const Validators= require(path.resolve(__dirname , '..', 'middlewares' , 'validate.middleware.js'));


router.post('/register' ,Validators.signup, authController.register);
router.post('/login', Validators.login , authController.login);

module.exports = router;




