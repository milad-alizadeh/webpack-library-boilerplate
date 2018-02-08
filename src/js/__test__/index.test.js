import Greeting from '../index.js';

describe('Index', () => {
    test('sayHello()', () => {
        let greeting = new Greeting();
        let message = greeting.sayHello('John');

        expect(message).toBe('Hi John');
    });
});
