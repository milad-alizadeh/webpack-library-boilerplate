// Optional styling for library - This will compile to a css file in dist folder
import '../scss/style.scss';

export default class {
    constructor(name) {
        document.querySelector('.message').innerHTML = this.sayHello(name);
    }

    sayHello(name) {
        return `Hi ${name}`;
    }
}
