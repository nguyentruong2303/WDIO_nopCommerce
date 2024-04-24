import ChangePasswordFlow from "../../test_flows/users/ChangePassword";
import RegisterFlow from "../../test_flows/users/Register";
import LoginFlow from "../../test_flows/users/Login";
import HeaderModule from "../../pages/users/modules/HeaderModule";
import MyAccountModule from "../../pages/users/modules/MyAccountModule";

import ChangePasswordData from "../../../resources/test_data/ChangePassword";
import RegisterData from "../../../resources/test_data/Register";
import LoginData from "../../..//resources/test_data/Login";

describe('Change Password testing' , () => {
    before('Register, Login and Open Change Password Page', async () => {
        const registerFlow = new RegisterFlow(RegisterData.correct);
        await registerFlow.openPage();
        await registerFlow.register();

        const loginFlow = new LoginFlow(LoginData.correct);
        await loginFlow.openPage();
        await loginFlow.doLogin();

        await HeaderModule.openMyAccount();
        await MyAccountModule.openChangePasswordPage();

    })

    it('Change Password successfully', async () => {
        const changePasswordFlow = new ChangePasswordFlow(ChangePasswordData.correctChangePW);
        await changePasswordFlow.doChangePassword();
        await changePasswordFlow.verifyContentNotificationChangePassword();
        await changePasswordFlow.closeBarNotification();

        await HeaderModule.clickLogout();
        await HeaderModule.loginUser();
    
        
        let loginFlowOld = new LoginFlow(LoginData.invalidPass);
        await loginFlowOld.doLogin();
        await loginFlowOld.verifyLoginUnsuccessWithInvalidPassword();

        let loginFlowNew = new LoginFlow(ChangePasswordData.correctLogin);
        await loginFlowNew.doLogin();
        await loginFlowNew.verifyLoginWithCorrectCreds();

    })

})