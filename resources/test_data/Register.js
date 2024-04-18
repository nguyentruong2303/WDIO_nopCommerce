

const randEmail = 'automation'+Math.floor(100000 + Math.random() * 900000)+'@gmail.com';

const correctRegister = {
    firstname : 'John',
    lastname: 'Nguyen',
    email: randEmail,
    company: 'test',
    password: 'test12345',
    confirmPassword:'test12345'
}

const EmailExistsRegister = {
    firstname : 'John',
    lastname: 'Nguyen',
    email: randEmail,
    company: 'test',
    password: 'test12345',
    confirmPassword:'test12345'
}

const emptyRegister = {
    firstname : '',
    lastname: '',
    email: '',
    company: '',
    password: '',
    confirmPassword:''
}

const invalidEmailRegister = {
    firstname : '',
    lastname: '',
    email: 'automation',
    company: '',
    password: '',
    confirmPassword:''
}

const invalidPasswordRegister = {
    firstname : 'John',
    lastname: 'Nguyen',
    email: randEmail,
    company: 'test',
    password: '1234',
    confirmPassword:'1234'
}

const invalidConfirmPasswordRegister = {
    firstname : 'John',
    lastname: 'Nguyen',
    email: randEmail,
    company: 'test',
    password: '12345678',
    confirmPassword:'1234'
}

const data = {
    correct: correctRegister,
    empty : emptyRegister,
    invalidEmail: invalidEmailRegister,
    existsEmail : EmailExistsRegister,
    invalidPassword: invalidPasswordRegister,
    invalidConfirmPassword: invalidConfirmPasswordRegister
}
export default data;


