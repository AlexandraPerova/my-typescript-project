/* class T01 {
    private n1: number = 33;
    private n2: number = 55;
    public access: boolean = false;
    constructor(a: boolean) {
        this.access = a;
    }
    public get N1 (): number {
        return (this.access) ? this.n1 : 0;
    }
}*/

class T01 {
    private _n1: number = 33;
    private _n2: number = 55;
    public get n1 (): number {
        return this._n1;
    }
    public get n2 (): number {
        return this._n2;
    }

    public set n1 (a:number) {
        this._n1 = a;
    }
}

const obj1 = new T01();
console.log(obj1.n1);
obj1.n1 = 777;
console.log(obj1.n1);


class T02 extends T01 {
    public get n1(): number {
        return super.n1;
    }

    public set n1 (a:number) {
        super.n1 = a;
    }
};

const obj2 = new T02;
console.log(obj2.n1);
obj2.n1 = 1000;
console.log(obj2.n1);


class T03 {
    protected _n1: number = 33;
    protected _n2: number = 55;
    public get n1 (): number {
        return this._n1;
    }
    public get n2 (): number {
        return this._n2;
    }

    public set n1 (a:number) {
        this._n1 = a;
    }
}

const obj3 =  new T03();
console.log(obj3.n1);
obj3.n1 = 444;
console.log(obj3.n1);

class T04 extends T03 {
    public get n1(): number {
        return this._n1;
    }
    public set n1 (a: number) {
        this._n1 = a;
    }
}

const obj4 =  new T04();
console.log(obj4.n1);
obj4.n1 = 444;
console.log(obj4.n1);





