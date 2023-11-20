const { test, expect } = require("@jest/globals");
const createSlug = require("./createSlug");
const db = require("./db.js");


test("createSlug dovrebbe ritornare una stringa", () => {
    const arg = "ciao"
    const result = createSlug(arg)
    expect(result).toBe("ciao");
})

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
    const arg = "CIAO"
    const result = createSlug(arg)
    expect(result).toBe("ciao");
})

test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const arg = "Hello Moto"
    const result = createSlug(arg)
    expect(result).toBe("hello-moto");
})

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const arg = "ciambellone"
    const result = createSlug(arg, db)
    console.log(result)
    expect(result).toBe("ciambellone1");
})

test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
    const arg = 0;
    const result = () => createSlug(arg);
    expect(result).toThrowError("Il titolo non è valido");
});

