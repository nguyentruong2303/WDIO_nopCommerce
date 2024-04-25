const REVIEW_INFO_LBL = ".review-info";

class MyProductReview {
    async getReviewInfo() {
       return await $(REVIEW_INFO_LBL).getText();
    }
}
module.exports = new MyProductReview();