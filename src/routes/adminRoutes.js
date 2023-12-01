  const express = require("express");
  const router = express.Router();
  const adminController = require("../controllers/adminController");
  
  router.get("/", adminController.admin);
  router.get("/create",adminController.adminCreate );
  router.post("/create",adminController.admincreatepost);
  router.get("/edit/:id",adminController.adminEdit);
  router.put("/edit/:id",adminController.adminEditPut);
  router.delete("/delete/:id",adminController.adminDelete);
  
  module.exports = router;