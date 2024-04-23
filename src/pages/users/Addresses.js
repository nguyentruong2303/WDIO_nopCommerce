const ADD_ADDRESS_BTN = '.add-address-button';
const FIRST_NAME_TXB = '#Address_FirstName';
const LAST_NAME_TXB = '#Address_LastName';
const EMAIL_TXB = '#Address_Email';
const COMPANY_TXB = '#Address_Company';
const COUNTRY_SL = '#Address_CountryId';
const STATE_PROVINCE_TXB = "//label[text()='State / province:']/following-sibling::select";
const CITY_TXB = '#Address_City';
const ADDRESS_1_TXB = '#Address_Address1';
const ADDRESS_2_TXB = '#Address_Address2';
const ZIP_CODE_TXB = '#Address_ZipPostalCode';
const PHONE_NUMBER_TXB = '#Address_PhoneNumber';
const FAX_NUMBER_TXB = '#Address_FaxNumber';
const SAVE_BTN = '.save-address-button';
const BAR_NOTIFICATION_LBL = '.bar-notification';

class Addresses {
    async clickAddNewAddress() {
        await $(ADD_ADDRESS_BTN).click();
        return this;
    }

    async inputFirstName(firstName) {
        await $(FIRST_NAME_TXB).setValue(firstName);
        return this;
    }

    async inputLastName(lastName) {
        await $(LAST_NAME_TXB).setValue(lastName);
        return this;
    }

    async inputEmail(email) {
        await $(EMAIL_TXB).setValue(email);
        return this;
    }

    async inputCompany(company) {
        await $(COMPANY_TXB).setValue(company);
        return this;
    }

    async selectCountry(country) {
        await $(COUNTRY_SL).selectByVisibleText(country);
        return this;
    }

    async inputCity(city) {
        await $(CITY_TXB).setValue(city);
        return this;
    }

    async inputAddress1(address1) {
        await $(ADDRESS_1_TXB).setValue(address1);
        return this;
    }

    async inputAddress2(address2) {
        await $(ADDRESS_2_TXB).setValue(address2);
        return this;
    }

    async inputZipCode(zipCode) {
        await $(ZIP_CODE_TXB).setValue(zipCode);
        return this;
    }

    async inputPhoneNumber(phone) {
        await $(PHONE_NUMBER_TXB).setValue(phone);
        return this;
    }

    async inputFaxNumber(fax) {
        await $(FAX_NUMBER_TXB).setValue(fax);
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
module.exports = new Addresses();