const ADD_YOUR_REVIEW_LINK = "//a[text()='Add your review']";
const ADD_TO_WISH_LIST_LINK = ".add-to-wishlist";
const CONTENT_TEXT = ".content";
const CLOSE_CONTENT_BTN = ".close";

class ProductDetail {
    async clickAddYourReview() {
        await $(ADD_YOUR_REVIEW_LINK).click();
        return this;
    };

    async clickAddToWishList() {
        await $(ADD_TO_WISH_LIST_LINK).click();
        return this;
    }

    async getContent() {
        return await $(CONTENT_TEXT).getText();
    }

    async clickCloseContentBtn() {
        await $(CLOSE_CONTENT_BTN).click();
        return this;
    }
}
module.exports = new ProductDetail();