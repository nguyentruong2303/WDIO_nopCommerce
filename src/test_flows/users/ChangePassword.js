import ChangePasswordPage from "../../pages/users/ChangePassword";
import HeaderModule from "../../pages/users/modules/HeaderModule";
import MyAccountModule from "../../pages/users/modules/MyAccountModule";

export default class ChangePassword {
    constructor(ChangePasswordData) {
        this._oldPassword = ChangePasswordData.oldPassword;
        this._newPassword = ChangePasswordData.newPassword;
        this._confirmPassword = ChangePasswordData.confirmPassword;
    }

    async openChangePasswordPage() {
        await HeaderModule.openMyAccount();
        await MyAccountModule.openChangePasswordPage();
        return this;
    }

    async doChangePassword() {
        await ChangePasswordPage.inputOldPassword(this._oldPassword);
        await ChangePasswordPage.inputNewPassword(this._newPassword);
        await ChangePasswordPage.inputConfirmPassword(this._confirmPassword);
        await ChangePasswordPage.clickChangePasswordBtn();
        return this;
    }

    async verifyContentNotificationChangePassword() {
        let expectedContentNotificationChangePassword = 'Password was changed';
        let actualContentNotificationChangePassword = await ChangePasswordPage.getContentNotificationChangePassword();
        await expect(expectedContentNotificationChangePassword).toEqual(actualContentNotificationChangePassword);
        return this;
    }

    async closeBarNotification() {
        await ChangePasswordPage.clickCloseBarNotification();
        return this;
    }
}