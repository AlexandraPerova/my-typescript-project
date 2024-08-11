//TS
const user: {name: string; email: string} = {
    name: "ivanov",
    email: "ivanov@mail.ru"
}
console.log(user['email']);

user.name = "Oleg";
//user.name = 44;
console.log(user);

// Необязательные свойства

const user_2: {name: string; email: string; age?: number} = {
    name: "Oleg",
    email: "Oleg@mail.ru",
    age: 44
};

console.log(user_2);

// Проверяем свойств в объекте
console.log(user_2.email);
if ('test' in user_2) {
    console.log(1)
}
else {
    console.log(0)
}

//Обращение к необязательному свойству
console.log(user_2.age);

//Объект как аругент функции
function userProcess(some_argument: {name: string, email: string}) {
    console.log(some_argument.email);
}
userProcess(user_2);

const obj_1 = {name: 'Ivan', email: '22ivanov@mail.ru', test: false}
userProcess(obj_1);

//Декомпозиция

function foo({name, email} : {name: string, email: string}) {
    console.log(name, email);
}

foo(user_2);

// Объявляем класс
class Button {
    text : string | undefined;
    className : string[] | undefined;
}

const b_01 = new Button();
b_01.text = "Push me";
b_01.className = ['btn', 'btn-success']
console.log(b_01);

//Заносим данные сразу в класс

class Header {
    text: string = 'Header 1';
    fontsize: string = '24px';

}
const h_01 = new Header();
console.log(h_01);

//Методы

class Btn {
    text: string;
    className: string[];

    create(): HTMLButtonElement {
        const button  = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}

const b_02 = new Btn();
b_02.text = 'Button test';
b_02.className = ['btn', 'btn-success'];

console.log(b_02);
document.body.append(b_02.create());

b_02.text = 'Button test 2';
b_02.className = ['btn', 'btn-success'];
document.body.append(b_02.create());

// конструктор
class ButtonElement {
    text: string;
    className: string[];
    readonly role: string;
    readonly type: string = 'button';


    constructor(text: string, className: string[]) {
        this.text = text;
        this.className = className;
        this.role = 'button';
    }

    create(): HTMLButtonElement {
        const button  = document.createElement('button');
        button.setAttribute('role', this.role);
        button.setAttribute('type', this.type);
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}

const b_03 = new ButtonElement('Click on me', ['btn', 'btn-primary']);
console.log(b_03);
document.body.append(b_03.create());

const b_04 = new ButtonElement('new button', ['btn', 'btn-warning']);
b_04.text = "push push push";
//b_04.role = "new";
document.body.append(b_04.create());
