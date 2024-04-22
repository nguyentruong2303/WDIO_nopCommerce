const MALE_RAD = ".male";
const FEMALE_RAD = ".female";
const FIRST_NAME_TXB = "#FirstName";
const LAST_NAME_TXB = "#LastName";
const DATE_OF_BIRTH_DAY_SELECT = "//select[@name='DateOfBirthDay']";
const DATE_OF_BIRTH_MONTH_SELECT = "//select[@name='DateOfBirthMonth']";
const DATE_OF_BIRTH_YEAR_SELECT = "//select[@name='DateOfBirthYear']";
const EMAIL_TXB = "#Email";
const COMPANY_TXB = "#Company";
const SAVE_BTN = "#save-info-button";
const BAR_NOTIFICATION_LBL = '.bar-notification';

class CustomerInfo {
    async selectMale() {
        await $(MALE_RAD).click();
        return this;
    }

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

    async selectDay(day) {
        await $(DATE_OF_BIRTH_DAY_SELECT).selectByVisibleText(day);
        return this;
    }

    async selectMonth(month) {
        await $(DATE_OF_BIRTH_MONTH_SELECT).selectByVisibleText(month);
        return this;
    }

    async selectYear(year) {
        await $(DATE_OF_BIRTH_YEAR_SELECT).selectByVisibleText(year);
        return this;
    }

    async inputEmail(email) {
        await $(EMAIL_TXB).setValue(email);
        return this;
    }

    async inputCompanyName(company) {
        await $(COMPANY_TXB).setValue(company);
        return this;
    }
    
    async clickSaveBtn() {
        await $(SAVE_BTN).click();
        return this;
    }
    
    async getContentNotification() {
       return await $(BAR_NOTIFICATION_LBL).getText();
    }
}
module.exports = new CustomerInfo();