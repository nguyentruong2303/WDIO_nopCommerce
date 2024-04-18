import RegisterPage from '../../pages/users/Register.js';

export default class Register {
    constructor(registerData) {
        // this._birthDay = RegisterData.birthDay;
        // this._birthMonth = RegisterData.birthMonth;
        // this._birthYear = RegisterData.birthYear;
        this._firstname = registerData.firstname;
        this._lastname = registerData.lastname;
        this._email = registerData.email;
        this._company = registerData.company;
        this._password = registerData.password;
        this._confirmPassword = registerData.confirmPassword;
    }

    async openPage() {
        await browser.url('/register');

        return this;
    }

    async register() {
        //await RegisterPage.selectDateOfBirth(this._birthDay, this._birthMonth, this._birthYear);
        await RegisterPage.inputFirstName(this._firstname);
        await RegisterPage.inputLastName(this._lastname);
        await RegisterPage.inputEmail(this._email);
        await RegisterPage.inputCompany(this._company);
        await RegisterPage.inputPassword(this._password);
        await RegisterPage.inputConfirmPassword(this._confirmPassword);
        await RegisterPage.clickRegisterBtn();

        return this;
    }

    async verifyRegisterWithCorrectCreds() {
        let expectedResultMSG = 'Your registration completed';
        let actualResultMSG = await RegisterPage.getResultMessage();

        await expect(actualResultMSG).toEqual(expectedResultMSG);
        return this;
    }

    async verifyRegisterUnsuccesWithDataEmpty() {
        let expectedFirstNameErrorMSG = 'First name is required.';
        let actualFirstNameErrorMSG = await RegisterPage.getFirstNameError();

        await expect(expectedFirstNameErrorMSG).toEqual(actualFirstNameErrorMSG);

        let expectedLastNameErrorMSG = 'Last name is required.';
        let actualLastNameErrorMSG = await RegisterPage.getLastNameError();

        await expect(expectedLastNameErrorMSG).toEqual(actualLastNameErrorMSG);

        let expectedEmailErrorMSG = 'Email is required.';
        let actualEmailErrorMSG = await RegisterPage.getEmailError();

        await expect(expectedEmailErrorMSG).toEqual(actualEmailErrorMSG);

        let expectedPasswordErrorMSG = 'Password is required.';
        let actualPasswordErrorMSG = await RegisterPage.getPasswordError();

        await expect(expectedPasswordErrorMSG).toEqual(actualPasswordErrorMSG);

        let expectedConfirmPasswordErrorMSG = 'Password is required.';
        let actualConfirmPasswordErrorMSG = await RegisterPage.getConfirmPasswordError();

        await expect(expectedConfirmPasswordErrorMSG).toEqual(actualConfirmPasswordErrorMSG);
        return this;
    }

    async verifyRegisterUnsuccesWithInvalidEmail() {
        let expectedInvalidEmail = 'Wrong email';
        let actualInvalidEmail = await RegisterPage.getEmailError();

        await expect(expectedInvalidEmail).toEqual(actualInvalidEmail);
        return this;
    }

    async verifyRegisterUnsuccessWithEmailExists() {
        let expectedEmailExists = 'The specified email already exists';
        let actualEmailExists = await RegisterPage.getMessageErrorEmail();

        await expect(expectedEmailExists).toEqual(actualEmailExists);
        return this;
    }

    async verifyRegisterUnsuccessWithInvalidPassword() {
        let expectedInvalidPassword = 'must have at least 6 characters';
        let actualInvalidPassword = await RegisterPage.getPasswordError();

        await expect(actualInvalidPassword).toContain(expectedInvalidPassword);
        return this;
    }

    async verifyRegisterUnsuccessWithPasswordAndConfirmPasswordDoNotMatch() {
        let expectedPasswordAndConfirmPasswordNotMatch = 'The password and confirmation password do not match.';
        let actualPasswordAndConfirmPasswordNotMatch = await RegisterPage.getConfirmPasswordError();

        await expect(expectedPasswordAndConfirmPasswordNotMatch).toEqual(actualPasswordAndConfirmPasswordNotMatch);
        return this;
    }
}
