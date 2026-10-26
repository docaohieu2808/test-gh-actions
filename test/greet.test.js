const { test } = require("node:test");
const assert = require("node:assert");
const { greet } = require("../index.js");

test("greets by name", () => assert.strictEqual(greet(" Hieu "), "Hello, Hieu!"));
test("rejects an empty name", () => assert.throws(() => greet(""), TypeError));
