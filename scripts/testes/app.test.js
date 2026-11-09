import assert from "node:assert/strict";
import test from "node:test";

process.env.NODE_ENV = "test";

const { default: app } = await import("../../index.js");

test("exports the app without requiring database configuration", () => {
    assert.equal(typeof app, "function");
});

test("serves the existing routes and frontend", async (t) => {
    const server = app.listen(0);
    await new Promise((resolve, reject) => {
        server.once("listening", resolve);
        server.once("error", reject);
    });
    t.after(() => new Promise((resolve) => server.close(resolve)));

    const baseUrl = `http://127.0.0.1:${server.address().port}`;
    const rootResponse = await fetch(baseUrl, { redirect: "manual" });
    assert.equal(rootResponse.status, 302);
    assert.equal(rootResponse.headers.get("location"), "/home.html");

    const healthResponse = await fetch(`${baseUrl}/health`);
    assert.equal(healthResponse.status, 200);

    const homeResponse = await fetch(`${baseUrl}/home.html`);
    assert.equal(homeResponse.status, 200);
});
