class MyDemo {
    constructor(P) {
        this.name = P.name;
        this.age = P.age;

        // @rollup/plugin-replace, preventAssignment
        // process.env.NODE_ENV = true;
        console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
    }

    getInfo() {
        console.log(this.name + this.age);
    }
}

export default MyDemo;
