const shopController= {
    
shop:(req, res) => res.send("Route for Shop view"),
shopItemId:(req, res) => res.send("Route for find and retrieve a product from an ID"),
shopItemIdAddPost:(req, res) => res.send("Route for add the current item to the shop cart"),
shopCart:(req, res) => res.send("Route for cart view"),
shopCartPost:(req, res) => res.send("Route for got checkout page"),

}

module.exports = shopController;