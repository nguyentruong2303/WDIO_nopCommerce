const OLD_PASSWORD_TXB = '#OldPassword';
const NEW_PASSWORD_TXB = '#NewPassword';
const CONFIRM_PASSWORD_TXB = '#ConfirmNewPassword';
const CHANGE_PASSWORD_BTN = '.change-password-button';
const BAR_NOTIFICATION_LBL = '.bar-notification';
const CLOSE_BTN = '.close';

class ChangePassword {
    async inputOldPassword(oldPassword) {
        await $(OLD_PASSWORD_TXB).setValue(oldPassword);
        return this;
    }

    async inputNewPassword(newPassword) {
        await $(NEW_PASSWORD_TXB).setValue(newPassword);
        return this;
    }

    async inputConfirmPassword(confirmPassword) {
        await $(CONFIRM_PASSWORD_TXB).setValue(confirmPassword);
        return this;
    }

    async clickChangePasswordBtn() {
        await $(CHANGE_PASSWORD_BTN).click();
        return this;
    }

    async getContentNotificationChangePassword() {
       return await $(BAR_NOTIFICATION_LBL).getText();
    }

    async clickCloseBarNotification() {
        await $(CLOSE_BTN).click();
        return this;
    }

}
module.exports = new ChangePassword();

