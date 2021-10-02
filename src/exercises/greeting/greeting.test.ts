import { greeting } from "./greeting";

describe('Greeting tests', () => {
    it('hello world', () => {
        expect(greeting("Bob")).toEqual('Hello, Bob.');
    })
})
export {}