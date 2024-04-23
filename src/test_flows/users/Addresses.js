import AddressesPage from "../../pages/users/Addresses";
import MyAccountModule from "../../pages/users/modules/MyAccountModule";
import HeaderModule from "../../pages/users/modules/HeaderModule";

export default class Addresses {
    constructor(AddressData) {
        this._firstName = AddressData.firstName;
        this._lastName = AddressData.lastName;
        this._email = AddressData.email;
        this._company = AddressData.company;
        this._country = AddressData.country;
        this._city = AddressData.city;
        this._address1 = AddressData.address1;
        this._address2 = AddressData.address2;
        this._zipCode = AddressData.zipCode;
        this._phoneNumber = AddressData.phoneNumber;
        this._faxNumber = AddressData.faxNumber;
    }

    async openAddressPage() {
        await HeaderModule.openMyAccount();
        await MyAccountModule.openCustomerAddressPage();
        return this;
    }

    async addNewAddress() {
        await AddressesPage.clickAddNewAddress();
        await AddressesPage.inputFirstName(this._firstName);
        await AddressesPage.inputLastName(this._lastName);
        await AddressesPage.inputEmail(this._email);
        await AddressesPage.inputCompany(this._company);
        await AddressesPage.selectCountry(this._country);
        await AddressesPage.inputCity(this._city);
        await AddressesPage.inputAddress1(this._address1);
        await AddressesPage.inputAddress2(this._address2);
        await AddressesPage.inputZipCode(this._zipCode);
        await AddressesPage.inputPhoneNumber(this._phoneNumber);
        await AddressesPage.inputFaxNumber(this._faxNumber);
        await AddressesPage.clickSaveBtn();
    }

    async verifyContentNotificationAddNewAddress() {
        let expectedAddNewAddress = 'The new address has been added successfully.';
        let actualAddNewAddress = await AddressesPage.getContentNotification();

        await expect(expectedAddNewAddress).toEqual(actualAddNewAddress);
        return this;
    }
}