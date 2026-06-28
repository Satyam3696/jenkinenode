const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin123") {

        res.json({
            success: true,
            message: "Login Successful! Welcome Admin."
        });

    } else {

        res.json({
            success: false,
            message: "Invalid Username or Password"
        });

    }

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log("--------------------------------------");
    console.log(" Jenkins Demo Login App Started");
    console.log(" Running at http://localhost:3000");
    console.log("--------------------------------------");

});