const express = require ("express");
const app =express();

app.get("/home",(req, res) => res.sendFile(__dirname +"./public/index.html"));
app.use(express.static("public"));

app.get ("/ping", (req,res) => res.send("pong"));

const PORT = 3000;
app.listen(PORT, () => console.log(`servidor corriendo en http://localhost:${PORT}`));