import dataRegister from '../../resources/test_data/Register'

const dataChangePassword = {
    oldPassword: dataRegister.correct.password,
    newPassword: '123456',
    confirmPassword: '123456'
}

const oldLogin = {
    email : dataRegister.correct.email,
    password: dataRegister.correct.password
 }
const newLogin = {
   email : dataRegister.correct.email,
   password: dataChangePassword.confirmPassword
}

const data = {
    correctChangePW : dataChangePassword,
    incorrectLogin : oldLogin,
    correctLogin : newLogin
}

export default data;