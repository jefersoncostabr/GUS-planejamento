import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/home.html");
});

router.get("/health", (req, res) => {
    res.status(200).send("Servidor está funcionando corretamente.");
});

export default router;
