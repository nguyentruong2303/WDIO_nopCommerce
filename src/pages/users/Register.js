const MALE_RAD = ".male";
const FEMALE_RAD = ".female";
const FIRST_NAME_TXB = "#FirstName";
const FIRST_NAME_ERROR_MSG = "#FirstName-error";
const LAST_NAME_TXB = "#LastName";
const LAST_NAME_ERROR_MSG = "#LastName-error";
const DATE_OF_BIRTH_DAY_SELECT = "//select[@name='DateOfBirthDay']";
const DATE_OF_BIRTH_MONTH_SELECT = "//select[@name='DateOfBirthMonth']";
const DATE_OF_BIRTH_YEAR_SELECT = "//select[@name='DateOfBirthYear']";
const EMAIL_TXB = "#Email";
const EMAIL_ERROR_MSG = "#Email-error";
const MESSAGE_ERROR = ".message-error li";
const COMPANY_TXB = "#Company";
const PASSWORD_TXB = "#Password";
const PASSWORD_ERROR_MSG = "#Password-error";
const CONFIRM_PASSWORD_TXB = "#ConfirmPassword";
const CONFIRM_PASSWORD_ERROR_MSG = "#ConfirmPassword-error";
const REGISTER_BTN = "#register-button";
const RESULT_MSG = ".page-body div.result";
const CONTINUE_BTN = ".page-body div.buttons a";

class Register {
    async selectFemale() {
        await $(FEMALE_RAD).click();

        return this;
    }

    async inputFirstName(firstName) {
        await $(FIRST_NAME_TXB).setValue(firstName);

        return this;
    }

    async inputLastName(lastname) {
        await $(LAST_NAME_TXB).setValue(lastname);

        return this;
    }

    async inputEmail(email) {
        await $(EMAIL_TXB).setValue(email);

        return this;
    }

    async selectDateOfBirth(day, month, year) {
        await $(DATE_OF_BIRTH_DAY_SELECT).selectByVisibleText(day);
        await $(DATE_OF_BIRTH_MONTH_SELECT).selectByVisibleText(month);
        await $(DATE_OF_BIRTH_YEAR_SELECT).selectByVisibleText(year);

        return this;
    }

    async inputCompany(company) {
        await $(COMPANY_TXB).setValue(company);

        return this;
    }

    async inputPassword(password) {
        await $(PASSWORD_TXB).setValue(password);

        return this;
    }

    async inputConfirmPassword(confirmPassword) {
        await $(CONFIRM_PASSWORD_TXB).setValue(confirmPassword);

        return this;
    }

    async clickRegisterBtn() {
        await $(REGISTER_BTN).click();

        return this;
    }

    async getFirstNameError() {
       return await $(FIRST_NAME_ERROR_MSG).getText();
    }

    async getLastNameError() {
        return await $(LAST_NAME_ERROR_MSG).getText();
    }

    async getEmailError() {
        return await $(EMAIL_ERROR_MSG).getText();
    }

    async getMessageErrorEmail() {
        return await $(MESSAGE_ERROR).getText();
    }

    async getPasswordError() {
        return await $(PASSWORD_ERROR_MSG).getText();
    }

    async getConfirmPasswordError() {
        return await $(CONFIRM_PASSWORD_ERROR_MSG).getText();
    }

    async getResultMessage() {
       return await $(RESULT_MSG).getText();
    }

    async goHomePage() {
        await $(CONTINUE_BTN).click();

        return this;
    }
}
module.exports  = new Register();