const obj: object = {
    user: 1,
};
obj.valueOf;
obj.toString;

const user2: {
    name: string,
    surname: string,
    height?: number;
} = {
    name: 'Alexandra',
    surname: 'Perova',
    height: 180
}

user2.height = 178;