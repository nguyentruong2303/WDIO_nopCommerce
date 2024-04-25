const REVIEW_TITLE_TXB = "#AddProductReview_Title";
const REVIEW_REVIEW_TEXT_TXB = "#AddProductReview_ReviewText";
const PRODUCT_RATING_1 = "#addproductrating_1";
const PRODUCT_RATING_2 = "#addproductrating_2";
const PRODUCT_RATING_3 = "#addproductrating_3";
const PRODUCT_RATING_4 = "#addproductrating_4";
const PRODUCT_RATING_5 = "#addproductrating_5";
const SUBMIT_REVIEW_BTN = ".write-product-review-button";

class ProductReview {
    async inputReviewTitle(reviewTitle) {
        await $(REVIEW_TITLE_TXB).setValue(reviewTitle);
        return this;
    }

    async inputReviewText(reviewText) {
        await $(REVIEW_REVIEW_TEXT_TXB).setValue(reviewText);
        return this;
    }

    async selectProductRating1() {
        await $(PRODUCT_RATING_1).click();
        return this;
    }

    async selectProductRating2() {
        await $(PRODUCT_RATING_2).click();
        return this;
    }

    async selectProductRating3() {
        await $(PRODUCT_RATING_3).click();
        return this;
    }

    async selectProductRating4() {
        await $(PRODUCT_RATING_4).click();
        return this;
    }

    async clickSubmitReview() {
        await $(SUBMIT_REVIEW_BTN).click();
        return this;
    }
}
module.exports = new ProductReview();