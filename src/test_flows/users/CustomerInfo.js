import CustomerInfoPage from '../../pages/users/CustomerInfo';
import HeaderModule from '../../pages/users/modules/HeaderModule';

export default class CustomerInfo {
    constructor(CustomerInfoData) {
        this._firstName = CustomerInfoData.firstName;
        this._lastName = CustomerInfoData.lastName;
        this._day = CustomerInfoData.day;
        this._month = CustomerInfoData.month;
        this._year = CustomerInfoData.year;
        this._email = CustomerInfoData.email;
        this._company = CustomerInfoData.company;
    }

    async openMyAccountPage() {
        await HeaderModule.openMyAccount();
        return this;
    }

    async updateCustomerInformation() {
        await CustomerInfoPage.selectFemale();
        await CustomerInfoPage.inputFirstName(this._firstName);
        await CustomerInfoPage.inputLastName(this._lastName);
        await CustomerInfoPage.selectDay(this._day);
        await CustomerInfoPage.selectMonth(this._month);
        await CustomerInfoPage.selectYear(this._year);
        await CustomerInfoPage.inputEmail(this._email);
        await CustomerInfoPage.inputCompanyName(this._company);
        await CustomerInfoPage.clickSaveBtn();
        return this;
    }

    async verifyContentNotification() {
        let expectedUpdateCustomerInfo = 'The customer info has been updated successfully.';
        let actualUpdateCustomerInfo = await CustomerInfoPage.getContentNotification();
        await expect(expectedUpdateCustomerInfo).toEqual(actualUpdateCustomerInfo);
        return this;
    }

}