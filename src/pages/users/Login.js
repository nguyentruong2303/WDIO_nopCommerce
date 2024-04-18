const EMAIL_TXB = "#Email";
const PASSWORD_TXB = "#Password";
const LOG_IN_BTN = "//button[text()='Log in']";
const EMAIL_ERROR_MSG = "#Email-error";
const MESSAGE_ERROR_MSG = ".message-error";
const HEADER_LOGO_LINK = "div.header-logo a";

class Login {



    async inputEmail(email) {
        await $(EMAIL_TXB).setValue(email);

        return this;
    }

    async inputPassword(password) {
        await $(PASSWORD_TXB).setValue(password);

        return this;
    }

    async clickLoginBtn() {
        await $(LOG_IN_BTN).click();

        return this
    }

    async getEmailError() {
       return await $(EMAIL_ERROR_MSG).getText();
    }

    async getMessageError() {
        return await $(MESSAGE_ERROR_MSG).getText();
    }

    async isHomePage() {
        await $(HEADER_LOGO_LINK).isDisplayed();
        return this;
    }
}
module.exports = new Login();