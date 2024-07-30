function t01() {
    console.log(123)
}
t01();

//Возвращаем тип данных
function t02() : number {
    const n= 55;
    return n;
}

console.log(t02());

//Процедура
document.querySelector('.auth-form')

function fillLastName() : void {
   // document.querySelector('.auth-form').textContent = 'Перова';
}
fillLastName();

//Аргументы
function numbers (a:number, b:number) {
    return a* b;
}
console.log(100-numbers(6,8));

//Процедура
function t05(a:number, b:number) {
    console.log(a*b)
};
t05(5,6)

//количество аргументов

function t06(a:number,b ?:number): number {
    console.log(b);
    if (b) return a * b;
    else return a;
}

console.log(t06(10,20));

//несколько типов значений

function checkEmail(email:string): string | boolean {
    //@
    if (email.indexOf('@') !==-1) return email.toLowerCase();
    return false;

}
console.log(checkEmail('HarryPotter@mail.ru'))

if (checkEmail('harryPotter@ya')) {
    console.log('good');
}

//стрелочные функции

const function1 = ():void => {
    console.log(1);
}
function1();

//аргументы

const function2 = (a: number,b: number):number => a * b;
console.log(function2(5,7));

const function3 = (a: number, b:number): number => {
    if (b) return a * b;
    return a;
}
console.log(function3(10,2));

//один аргумент
const function4 = (a:number):number => a * a;
console.log(function4(6));

//аргументы по умолчанию
const function5 = (a :number = 0,b :number = 100):number =>
    Math.max(a,b);

console.log(function5());