import RegisterFlow from '../../test_flows/users/Register.js';
import RegisterData from '../../../resources/test_data/Register.js';

describe('Register testing', () => {
    it('Register successfully', async () => {
        const testFlow = new RegisterFlow(RegisterData.correct);
        await testFlow.openPage();
        await testFlow.register();
        await testFlow.verifyRegisterWithCorrectCreds();
    })
});