import LoginPage from '../../pages/users/Login';

export default class Login {
    constructor(loginData) {
        this._email = loginData.email;
        this._password = loginData.password;
    }

    async openPage() {
        await browser.url('/login');
        return this;
    }

    async doLogin() {
        await LoginPage.inputEmail(this._email);
        await LoginPage.inputPassword(this._password);
        await LoginPage.clickLoginBtn();

        return this;
    }

    async verifyLoginWithCorrectCreds() {
       return await LoginPage.isHomePage();
    }

    async verifyLoginUnsuccessWithEmptyData() {
        let expectedEmailEmpty = 'Please enter your email';
        let actualEmailEmpty = await LoginPage.getEmailError();

        await expect(expectedEmailEmpty).toEqual(actualEmailEmpty);
        return this;
    }

    async verifyLoginUnsuccessWithInvalidEmail() {
        let expectedInvalidEmail = 'Wrong email';
        let actualInvalidEmail = await LoginPage.getEmailError();

        await expect(expectedInvalidEmail).toEqual(actualInvalidEmail);
        return this;
    }

    async verifyLoginUnsuccessWithNotFoundAccount() {
        let expectedNotFoundAccount = 'No customer account found';
        let actualNotFoundAccount = await LoginPage.getMessageError();

        await expect(actualNotFoundAccount).toContain(expectedNotFoundAccount);
        return this;
    }

    async verifyLoginUnsuccessWithEmptyPassword() {
        let expectedInvalidPassword = 'The credentials provided are incorrect';
        let actualInvalidPassword = await LoginPage.getMessageError();

        await expect(actualInvalidPassword).toContain(expectedInvalidPassword);
        return this;
    }

    async verifyLoginUnsuccessWithInvalidPassword() {
        let expectedInvalidPassword = 'The credentials provided are incorrect';
        let actualInvalidPassword = await LoginPage.getMessageError();

        await expect(actualInvalidPassword).toContain(expectedInvalidPassword);
        return this;
    }
}