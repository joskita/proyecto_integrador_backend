const adminController = {
    
admin:(req, res) => res.send("Route for admin view"),
adminCreate:(req, res) => res.send("Route for admin the create a product view"),
admincreatepost:(req, res) => res.send("Route for admin the create a product view post"),
adminEdit:(req, res) => res.send("Route for admin the edit and ID view"),
adminEditPut:(req, res) => res.send("Route for admin the edit and ID view PUT"),
adminDelete:(req, res) => res.send("Route for admin and delete view"),
}


module.exports = adminController;