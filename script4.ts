class T_01 {
    name: string = " ";
}

class T_02 extends T_01 {
    email: string = " ";

}

const obj_2 = new T_02();
console.log(obj_2);

class T_03 extends T_02 {
    showData(): void {
        console.log(this.name, this.email);
    }
}

const obj_03 = new T_03();
obj_03.name = "test"
obj_03.email = "test@mail.ru"
obj_03.showData();

class T_04 extends T_01 {
    email: string = " ";
    constructor(name: string, email: string) {
        super();
        this.name = name;
        this.email = email;
    }
    showData(): void {
        console.log(this.name, this.email);
    }
    showInfo(): string {
        return this.name + this.email;
    }
}

const obj_04 = new T_04('hello', 'test@mail.ua');
obj_04.showData();

class T_05 extends T_04 {
    age: number  = 0;
    constructor(name: string, email: string, age: number) {
        super(name,email);
        this.age = age;
    }
    showData(): void {
        super.showData();
        console.log(this.age)
    }
    showInfo(): string {
        const s = super.showInfo();
        return s + this.age;
    }
}
const obj_05 = new T_05 ('Hi', 'hello@email.ru', 55);
console.log(obj_05.showInfo());

//===================================

class ElementHTML {
    text: string;
    tag: string = 'DIV';

    constructor(a: string) {
        this.text = a;
    }

    render(): HTMLElement {
        const div = document.createElement(this.tag);
        div.textContent = this.text;
        return div;
    }
}

const div_1 = new ElementHTML('hello');
document.body.append(div_1.render());

class ElementHTMLCSS extends ElementHTML {
    cssClass: string[];

    constructor(a: string, b: string[]) {
        super(a);
        this.cssClass = b;
    }
    render(): HTMLElement{
        const div = super.render();
        this.cssClass.forEach(item => div.classList.add(item));
        return div;
    }
}

const div_2 = new ElementHTMLCSS('div with css', ['red', 'bold']);
document.body.append(div_2.render());

class ElementImage extends ElementHTMLCSS{
    src: string = '';
    constructor(src: string, b: string[], a: string) {
        super(a,b);
        this.src = src;
        this.tag = 'img';
    }
    render(): HTMLElement{
        const img =document.createElement(this.tag);
        img.setAttribute('src', this.src);
        img.setAttribute('alt', this.text);
        this.cssClass.forEach(item => img.classList.add(item));
        return img;
    }
}

const img = new ElementImage('./image/licensed-image.jpeg', ['responsive-image'], 'Picture');
document.body.append(img.render());

class PictureHTML extends ElementImage {
    //576, 768, 992
    source: string[];
    constructor(src: string, b: string[], a: string, source: string[]) {
        super(src, b, a);
        this.source = source;
    }
    render(): HTMLElement{
        const img = super.render();
        const pictures = document.createElement('picture');
        this.source.forEach( item => {
            const source = document.createElement('source');
            source.setAttribute('srcset', item);
            source.setAttribute('media', "min-width: 600px");
            pictures.append(source);
        });
        pictures.append(img);
        return pictures;
    }
}

const pic = new PictureHTML('./image/doroga.png', ['responsive-image'], 'Дорога', ['./image/licensed-image.jpeg']);
document.body.append(pic.render());