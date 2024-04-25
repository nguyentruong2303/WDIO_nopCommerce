import ProductReviewFlow from "../../test_flows/users/ProductReview";
import ProductReviewData from "../../../resources/test_data/ProductReview"
import RegisterFlow from "../../test_flows/users/Register";
import RegisterData from "../../../resources/test_data/Register"
import LoginFlow from "../../test_flows/users/Login";
import LoginData from "../../../resources/test_data/Login";


describe('Product Review Testing', () => {
    before('Register And Login', async () => {
        const registerFlow = new RegisterFlow(RegisterData.correct);
        await registerFlow.openPage();
        await registerFlow.register();

        const loginFlow = new LoginFlow(LoginData.correct);
        await loginFlow.openPage();
        await loginFlow.doLogin();
    })

    it('Add Product Review is successfully', async () => {
        const productReviewFlow = new ProductReviewFlow(ProductReviewData.correct);
        await productReviewFlow.openProductReviewPage();
        await productReviewFlow.writeProductReview();
        await productReviewFlow.openMyProductReviewPage();
        await productReviewFlow.verifyReviewIsDisplayed();
    })
})