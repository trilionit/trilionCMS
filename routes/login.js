"use strict"
const express= require('express');
const router = express.Router();
//route for adding airports
router.get("/", function(req, res){
	console.log("Login");
	res.send("Login Page");
	

});
module.exports = router;