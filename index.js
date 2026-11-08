require("dotenv").config();

const isProduction = process.env.RENDER === "true" || process.env.NODE_ENV === "production";
process.env.NODE_ENV = isProduction ? "production" : "development";

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const frontendDirectory = path.join(__dirname, "frontend");

app.get("/", (req, res) => {
    res.redirect("/home.html");
});

app.get("/health", (req, res) => {
    res.status(200).send("Servidor está funcionando corretamente.");
});

app.use(express.static(frontendDirectory));

app.listen(port, () => {
    console.log(`Servidor em modo ${app.get("env")} disponível na porta ${port}`);
});
