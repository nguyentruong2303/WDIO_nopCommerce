const EMAIL_TXB = "#Email";
const PASSWORD_TXB = "#Password";
const LOG_IN_BTN = "//button[text()='Log in']";

class Login {
    async doLogin(email, password) {
        await $(EMAIL_TXB).setValue(email);
        await $(PASSWORD_TXB).setValue(password);
        await $(LOG_IN_BTN).click();

        return this;
    }
}