const PRODUCT_NAME_TXT = ".product-name";
const SHARE_LINK = ".share-link";
const PAGE_TITLE_TXT = ".page-title";
const ADD_TO_CART_CKB = "input[name='addtocart']";
const ADD_TO_CART_BTN = ".wishlist-add-to-cart-button";
const UPDATE_WISH_LIST_BTN = ".update-wishlist-button";
const REMOVE_CART_BTN = ".remove-btn";
const NO_DATA_TXT = ".no-data";


class Wishlist {
    async getProductName() {
       return await $(PRODUCT_NAME_TXT).getText();
    }

    async clickShareLink() {
        await $(SHARE_LINK).click();
        return this;
    }

    async isDisplayedProductInWishlist() {
        await $(PRODUCT_NAME_TXT).isDisplayed();
        return this;
    }

    async isDisplayedPageTitle() {
         await $(PAGE_TITLE_TXT).isDisplayed();
         return this;
    }
}
module.exports = new Wishlist();