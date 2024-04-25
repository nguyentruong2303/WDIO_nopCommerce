const ADD_YOUR_REVIEW_LINK = "//a[text()='Add your review']";

class ProductDetail {
    async clickAddYourReview() {
        await $(ADD_YOUR_REVIEW_LINK).click();
        return this;
    }
}
module.exports = new ProductDetail();