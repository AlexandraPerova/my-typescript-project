interface userInfo {
    phone: number,
    email: string
}



interface User extends userInfo {
            name: string,
            readonly surname: string,
            dateBirth?: number
        }

        interface Customer {
        user: User;
        bill: number;
        }

        const customer: Customer = {
    user: {
        name: 'Hello',
        surname: 'Hello2',
        phone: 5689,
        email: '7769'
    },
            bill: 1232
        }