import RegisterFlow from '../../test_flows/users/Register.js';
import RegisterData from '../../../resources/test_data/Register.js';

describe('Register testing', () => {
    it.skip('Register successfully', async () => {
        const testFlow = new RegisterFlow(RegisterData.correct);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterWithCorrectCreds();
    });

    it.skip('Register Unsuccess With Email Exists', async () => {
        const testFlow = new RegisterFlow(RegisterData.existsEmail);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterUnsuccessWithEmailExists();
    });

    it.skip('Register Unsuccess with data is empty', async () => {
        const testFlow = new RegisterFlow(RegisterData.empty);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterUnsuccesWithDataEmpty();
    });

    it.skip('Register Unsuccess with Invalid Email', async () => {
        const testFlow = new RegisterFlow(RegisterData.invalidEmail);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterUnsuccesWithInvalidEmail();
    });

    it.skip('Register Unsuccess with Invalid Password', async () => {
        const testFlow = new RegisterFlow(RegisterData.invalidPassword);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterUnsuccessWithInvalidPassword();
    });

    it('Register Unsuccess with Invalid Confirm Password', async () => {
        const testFlow = new RegisterFlow(RegisterData.invalidConfirmPassword);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterUnsuccessWithPasswordAndConfirmPasswordDoNotMatch();
    });
});