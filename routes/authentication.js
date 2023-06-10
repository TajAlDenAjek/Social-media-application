const path=require('path');
const express=require('express');
const router=express.Router();
const {authController}=require(path.join(__dirname,'..','controllers'));

router.post('/register',authController.register);
router.post('/login',authController.login);

module.exports = router;




