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

//как создать массив
const arr_1: number[] = [];
arr_1.push(55, 66, 67);
arr_1[3]=77;
console.log(arr_1);
arr_1.length = 0;
console.log(arr_1);

//Создание read only массива
const arr_2: readonly number[] = [22,33,44,55];
//arr_2.push(88);
//arr_2[5]=22;
console.log(arr_2);

//Автоопределение типа
const arr_3 = ['Hello', 'TS'];
//arr_3.push(5);
console.log(arr_3);

//Декомпозиция массива
const arr_4: number[] = [222,333,444,555];
const [, a,b, ...c] = arr_4;
console.log(a, b, c);

//Создание двумерного массива
//const arr_5: number[][] = [[33,44,45],[55,66,77]];
const arr_5: number[][] = [];
arr_5[5]=[11,22];
arr_5.push([44,55])
console.log(arr_5[0],[1])

console.log(arr_5);

//Смешанные по типу массивы
const arr_6: (number | boolean)[] = [2,3,false]
console.log(arr_6);
const arr_7: Array<string | number> = [33,44,'hello'];
console.log(arr_7);

//Кортежи
const cort_01: [string, number] = ['Alex', 55]
console.log(cort_01);
cort_01.push('data');
//cort_01.push(false);
console.log(cort_01);

//Необязательный элемент в кортеже
const cort_02: [string, number, number?] = ['Alex', 55];
console.log(cort_02);

console.log(cort_02[0]);
cort_02[0] = 'Hello';
console.log(cort_02);

//Если количество элементов в кортеже не определено
const cort_03: [number, ...string[]] = [222, 'Hello', 'You'];
console.log(cort_03);
