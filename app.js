import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import session from "express-session";
import routes from "./routes/index.js";

function createApp({ sessionSecret } = {}) {
    const isTest = process.env.NODE_ENV === "test";
    const secret = sessionSecret || process.env.SESSION_SECRET || (isTest ? "test-session-secret" : undefined);

    if (!secret) {
        throw new Error("A variável de ambiente SESSION_SECRET é obrigatória.");
    }

    const app = express();
    const frontendDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), "frontend");

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(session({
        secret,
        resave: false,
        saveUninitialized: false,
        store: new session.MemoryStore(),
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        }
    }));

    app.use("/", routes);
    app.use(express.static(frontendDirectory));

    return app;
}

export default createApp;
