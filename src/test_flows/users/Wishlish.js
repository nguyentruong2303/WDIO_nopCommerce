import WishListPage from "../../pages/users/Wishlist";
import HeaderModule from "../../pages/users/modules/HeaderModule";
import DesktopsPage from "../../pages/users/Desktops";
import ProductDetailPage from "../../pages/users/ProductDetail";
import MenuModule from "../../pages/users/modules/MenuModule";

export default class Wishlist {

    async openWishlistPage() {
        await HeaderModule.openWishLish();
        return this;
    }

    async selectProductAndAddToWishlist() {
        await MenuModule.openDesktopsPage();
        await DesktopsPage.clickProductLenovoPC();
        await ProductDetailPage.clickAddToWishList();
        return this;
    }

    async verifyMessageWhenAddProductToWishlist() {
        let expectedAddToWishlist = 'The product has been added to your wishlist';
        let actualAddToWishlist = await ProductDetailPage.getContent();

        await expect(actualAddToWishlist).toContain(expectedAddToWishlist);
        return this;
    }

    async clickCloseBtn() {
        await ProductDetailPage.clickCloseContentBtn();
        return this;
    }

    async verifyProductAddedToWishlist() {
        await WishListPage.isDisplayedProductInWishlist()

        let expectedProductAddedToWishlist = 'Lenovo IdeaCentre 600 All-in-One PC';
        let actualProductAddedToWishlist = await WishListPage.getProductName();

        await expect(expectedProductAddedToWishlist).toEqual(actualProductAddedToWishlist);
        return this;
    }

    async openWishlistFromLinkShare() {
        await WishListPage.clickShareLink();
        return this;
    }

    async verifyDisplayWishlistLinkShare() {
        await WishListPage.isDisplayedPageTitle();
        return this;
    }


}