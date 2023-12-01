 const express = require("express");
 const router = express.Router();
 const authController = require("../controllers/authController");
  
  router.get("/login",authController.Login);
  router.post("/login",authController.Loginpost);
  router.get("/register",authController.Register );
  router.post("/register",authController.RegisterPost );
  router.get("/logout",authController.logout);

  module.exports = router;
