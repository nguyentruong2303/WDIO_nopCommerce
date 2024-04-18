import LoginFlow from '../../test_flows/users/Login';
import LoginData from '../../../resources/test_data/Login';
import RegisterFlow from '../../test_flows/users/Register';
import RegisterData from '../../../resources/test_data/Register';

describe('Login testing 1', () => {
    before('Register user',async () => {
        const testRegisterFlow = new RegisterFlow(RegisterData.correct);
        await testRegisterFlow.openPage();
        await testRegisterFlow.register();
        await testRegisterFlow.verifyRegisterWithCorrectCreds();
    });

    it('Login Success With Correct Creds', async() => {
        const testLoginFlow = new LoginFlow(LoginData.correct);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginWithCorrectCreds();
    });

    it('Login Unsuccess With Empty Password', async() => {
        const testLoginFlow = new LoginFlow(LoginData.emptyPass);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginUnsuccessWithEmptyPassword();
    });

    it('Login Unsuccess With Invalid Password', async() => {
        const testLoginFlow = new LoginFlow(LoginData.invalidPass);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginUnsuccessWithInvalidPassword();
    });
})
    describe('Login testing 2', () => {
    it('Login Unsuccess With Empty Email', async() => {
        const testLoginFlow = new LoginFlow(LoginData.emptyE);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginUnsuccessWithEmptyData();
    });

    it('Login Unsuccess With Invalid Email', async() => {
        const testLoginFlow = new LoginFlow(LoginData.invalidE);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginUnsuccessWithInvalidEmail();
    });

    it('Login Unsuccess With Not Exists Email', async() => {
        const testLoginFlow = new LoginFlow(LoginData.notExists);
        await testLoginFlow.openPage();
        await testLoginFlow.doLogin();
        await testLoginFlow.verifyLoginUnsuccessWithNotFoundAccount();
    });
})