import { Main } from './types/main.type';

class MyDemo {
    name: string;

    age: number;

    constructor(P: Main) {
        this.name = P.name;
        this.age = P.age;

        // process.env.NODE_ENV = true; // @rollup/plugin-replace, preventAssignment
        console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    }

    getInfo() {
        console.log(this.name + this.age);
    }

    *generatorFn() {
        console.log(this.name);
        yield 1;
        yield 2;
    }
}

export default MyDemo;
