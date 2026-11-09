import "dotenv/config";
import { randomBytes } from "node:crypto";
import createApp from "./app.js";

if (process.env.NODE_ENV !== "test") {
    const isProduction = process.env.RENDER === "true" || process.env.NODE_ENV === "production";
    process.env.NODE_ENV = isProduction ? "production" : "development";
}

const isTest = process.env.NODE_ENV === "test";
const port = process.env.PORT || 3000;
let sessionSecret = process.env.SESSION_SECRET;

if (!isTest && !sessionSecret) {
    sessionSecret = randomBytes(32).toString("hex");
    console.warn("SESSION_SECRET não definida; usando uma chave temporária para esta execução.");
}

const app = createApp({ sessionSecret });

if (!isTest) {
    const server = app.listen(port, () => {
        console.log(`Servidor em modo ${app.get("env")} disponível na porta ${port}`);
    });

    server.on("error", (error) => {
        console.error("Erro ao iniciar o servidor:", error);
        process.exitCode = 1;
    });
}

export default app;
