  const express = require("express");
  const router = express.Router();
  const shopController = require ("../controllers/shopController");
  
  router.get("/",shopController.shop);
  router.get("/item/:id",shopController.shopItemId);
  router.post("/item/:id/add",shopController.shopItemIdAddPost);
  router.get("/cart",shopController.shopCart);
  router.post("/cart",shopController.shopCartPost);
  
  
  module.exports = router;