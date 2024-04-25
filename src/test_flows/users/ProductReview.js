import MenuModule from "../../pages/users/modules/MenuModule";
import DesktopsPage from "../../pages/users/Desktops";
import ProductDetailPage from "../../pages/users/ProductDetail";
import HeaderModule from "../../pages/users/modules/HeaderModule";
import MyAccountModule from "../../pages/users/modules/MyAccountModule";
import ProductReviewPage from "../../pages/users/ProductReview";
import MyProductReviewPage from "../../pages/users/MyProductReview";

export default class ProductReview {
    constructor(ProductReviewData){
        this._reviewTitle = ProductReviewData.reviewTitle;
        this._reviewText = ProductReviewData.reviewText;
    }

    async openProductReviewPage() {
        await MenuModule.openDesktopsPage();
        await DesktopsPage.clickProductBuildYourOwnComputer();
        await ProductDetailPage.clickAddYourReview();
        return this;
    }

    async writeProductReview() {
        await ProductReviewPage.inputReviewTitle(this._reviewTitle);
        await ProductReviewPage.inputReviewText(this._reviewText);
        await ProductReviewPage.selectProductRating4();
        await ProductReviewPage.clickSubmitReview();
        return this;
    }

    async openMyProductReviewPage() {
        await HeaderModule.openMyAccount();
        await MyAccountModule.openCustomerReviewPage();
        return this;
    }
    
    async verifyReviewIsDisplayed() {
        let expectedReviewInfo = "Product review for: Build your own computer";
        let actualReviewInfo = await MyProductReviewPage.getReviewInfo();

        expect(actualReviewInfo).toContain(expectedReviewInfo);
        return this;
    }
}