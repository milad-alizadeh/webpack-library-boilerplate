import Greeting from '../index.js';

describe('Greeting', () => {
    describe('sayHello()', () => {
        test('it should exist', () => {
            let greeting = new Greeting();
            expect(greeting.sayHello).not.toBe(undefined);
        });

        test('it should return message', () => {
            let greeting = new Greeting();
            let message = greeting.sayHello('John');

            expect(message).toBe('Hi John');
        });
    });
});
