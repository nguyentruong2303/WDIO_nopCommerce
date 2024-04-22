const HEADER_REGISTER_LINK = "a.ico-register";
const HEADER_LOGIN_LINK = "a.ico-login";
const HEADER_WISHLISH_LINK = "a.ico-wishlist";
const HEADER_CART_LINK = "a.ico-cart";
const HEADER_LOGO_LINK = "div.header-logo a";
const HEADER_SEARCH_TXB = ".search-box input";
const HEADER_SEARCH_BTN = ".search-box button";
const MY_ACCOUNT_LINK = '.ico-account';

class HeaderModule {
    async registerUser() {
        await $(HEADER_REGISTER_LINK).click();

        return this;
    };

    async loginUser() {
        await $(HEADER_LOGIN_LINK).click();

        return this;
    };

    async openWishLish() {
        await $(HEADER_WISHLISH_LINK).click();

        return this;
    };

    async openCart() {
        await $(HEADER_CART_LINK).click();

        return this;
    };

    async openHomePage() {
        await $(HEADER_LOGO_LINK).click();

        return this;
    };

    async openMyAccount() {
        await $(MY_ACCOUNT_LINK).click();
        return this;
    }

    async searchProducts(key_search) {
        await $(HEADER_SEARCH_TXB).setValue(key_search);
        await $(HEADER_SEARCH_BTN).click();
        
        return this;
    };
}

module.exports = new HeaderModule();