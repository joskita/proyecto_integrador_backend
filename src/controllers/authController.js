const authController = {
    
Login:(req, res) => res.send("Route for auth a login view"),
Loginpost:(req, res) => res.send("Route for auth  a login view post"),
Register:(req, res) => res.send("Route for auth a register view"),
RegisterPost:(req, res) => res.send("Route for auth a register view post"),
logout: (req, res) => res.send("Route for auth a logout view"),


}
module.exports = authController;