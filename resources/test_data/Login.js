import dataRegister from '../../resources/test_data/Register'
const randEmail = 'automation'+Math.floor(100000 + Math.random() * 900000)+'@gmail.com';

const correctLogin = {
    email: dataRegister.correct.email,
    password: dataRegister.correct.password
}

const emptyEmail = {
    email : '',
    password: '12345678'
}

const invalidEmail = {
    email : 'automation',
    password: '12345678'
}

const notExistsEmail = {
    email : randEmail,
    password: '12345678'
}

const emptyPassword = {
    email: dataRegister.correct.email,
    password: ''
}

const invalidPassword = {
    email: dataRegister.correct.email,
    password: '131231'
}

const data = {
    correct : correctLogin,
    emptyE: emptyEmail,
    invalidE : invalidEmail,
    notExists : notExistsEmail,
    emptyPass: emptyPassword,
    invalidPass : invalidPassword
}

export default data 

