import { greeting } from "./greeting";

describe('Greeting tests', () => {
    it('hello bob', () => {
        expect(greeting("Bob")).toEqual('Hello, Bob.');
    })
    it('hello, default with value', () => {
        expect(greeting()).toEqual('Hello, my friend.');
    })
    it('shout if name is upper case', () => {
        expect(greeting('JIM')).toEqual('HELLO, JIM!');
    })
})
export {}