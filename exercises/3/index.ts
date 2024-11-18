interface User {
    username: string;
    email: string;
}

interface Admin extends User {
    adminCode: string;
}

const registerUser = (user: User | Admin) => {
    if ("adminCode" in user) {
        console.log('Admin created')
    } else {
        console.log('User created')
    }
}