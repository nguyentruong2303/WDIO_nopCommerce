import CustomerInfoFlow from "../../test_flows/users/CustomerInfo";
import RegisterFlow from "../../test_flows/users/Register";
import RegisterData from '../../../resources/test_data/Register';
import LoginData from '../../../resources/test_data/Login';
import LoginFlow from "../../test_flows/users/Login";
import CustomerInfoData from '../../../resources/test_data/CustomerInfo';

describe('Update Customer Information Testing', () => {
    before('Register and Login', async () => {
        const registerFlow = new RegisterFlow(RegisterData.correct);
        await registerFlow.openPage();
        await registerFlow.register()
        
        const loginFlow = new LoginFlow(LoginData.correct);
        await loginFlow.openPage();
        await loginFlow.doLogin();

    });

    it('Update Customer Information successfully', async () => {
        const customerInfoFlow = new CustomerInfoFlow(CustomerInfoData.correct);
        await customerInfoFlow.openMyAccountPage(); 
        await customerInfoFlow.updateCustomerInformation();
        await customerInfoFlow.verifyContentNotification();
    })

})
