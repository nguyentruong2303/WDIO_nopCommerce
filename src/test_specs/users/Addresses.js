import AddressesFlow from "../../test_flows/users/Addresses";
import AddressesData from '../../../resources/test_data/Addresses';
import LoginFlow from "../../test_flows/users/Login";
import LoginData from '../../../resources/test_data/Login'
import RegisterFlow from "../../test_flows/users/Register";
import RegisterData from '../../../resources/test_data/Register';

describe('Add New Address testing', () => {
    before('Register and Login', async () => {
        const registerFlow = new RegisterFlow(RegisterData.correct);
        await registerFlow.openPage();
        await registerFlow.register();

        const loginFlow = new LoginFlow(LoginData.correct);
        await loginFlow.openPage();
        await loginFlow.doLogin();
    });

    it('Add New Address Successfully', async () => {
        const addressFlow = new AddressesFlow(AddressesData.correct);
        await addressFlow.openAddressPage();
        await addressFlow.addNewAddress();
        await addressFlow.verifyContentNotificationAddNewAddress();
    });
})