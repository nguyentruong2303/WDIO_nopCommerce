import RegisterFlow from "../../test_flows/users/Register";
import LoginFlow from "../../test_flows/users/Login";
import WishlistFlow from "../../test_flows/users/Wishlish";
import RegisterData from "../../../resources/test_data/Register";
import LoginData from "../../../resources/test_data/Login";

describe('Wishlist, Compare And Recent View Testing', () => {
    before('Register And Login', async () => {
        const registerFlow = new RegisterFlow(RegisterData.correct);
        await registerFlow.openPage();
        await registerFlow.register();

        const loginFlow = new LoginFlow(LoginData.correct);
        await loginFlow.openPage();
        await loginFlow.doLogin();

    });

    it('Add Product To Wishlist', async () => {
        console.log('test');
        const wishListFlow = new WishlistFlow();
        await wishListFlow.selectProductAndAddToWishlist();
        await wishListFlow.verifyMessageWhenAddProductToWishlist();
        await wishListFlow.clickCloseBtn();
        await wishListFlow.openWishlistPage();
        await wishListFlow.verifyProductAddedToWishlist();
        await wishListFlow.openWishlistFromLinkShare();
        await wishListFlow.verifyDisplayWishlistLinkShare();
    })
})