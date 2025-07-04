"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
function hello(name = '') {
    if (!name.length) {
        return 'Hello, World!';
    }
    else {
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
}
