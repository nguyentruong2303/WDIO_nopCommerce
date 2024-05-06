const SORT_BY_DDL = '.product-sorting #products-orderby';
const PRODUCT_TITLE_TXT = '.product-item .product-title a';
const PAGE_SIZE_DDL = '.product-page-size #products-pagesize';
const CURRENT_PAGE_BTN = '.current-page';
const INDIVIDUAL_PAGE_BTN = '.individual-page';
const NEXT_PAGE_BTN = '.next-page';
const PREVIOUS_PAGE_BTN = '.previous-page';
const ACTUAL_PRICE_TXT = '.actual-price';
const AJAX_PRODUCTS_LOADING = ".ajax-products-busy";


class Notebooks {

    async selectSortBy(keySort) {
        await $(SORT_BY_DDL).selectByVisibleText(keySort);
        return this;
    }

    async selectDisplayPerPage(number) {
        await $(PAGE_SIZE_DDL).selectByVisibleText(number);
        return this;
    }

    async clickOnIndividualPage() {
        await $(INDIVIDUAL_PAGE_BTN).click();
        return this;
    }

    async isNotDisplayedAjaxProductLoading() {
        await $(AJAX_PRODUCTS_LOADING).waitForDisplayed({ reverse: true });
        await browser.pause(2000);
        return this;
    }

    async getProductTitleBeforeSort() {
        const PRODUCT_TITLE_SLT =  await $$(PRODUCT_TITLE_TXT);
        const PRODUCT_TITLE_DEFAULT = await PRODUCT_TITLE_SLT.map(pTitle =>  pTitle.getText());
        return PRODUCT_TITLE_DEFAULT;
    }

    async getProductTitleAfterSortAtoZ() {

        const PRODUCT_TITLE_SLT =  await $$(PRODUCT_TITLE_TXT);
        const PRODUCT_TITLE_DEFAULT = await PRODUCT_TITLE_SLT.map(pTitle =>  pTitle.getText());


        return PRODUCT_TITLE_DEFAULT;
    }

    async getProductTitleAfterSortZtoA() {

        const PRODUCT_TITLE_SLT =  await $$(PRODUCT_TITLE_TXT);
        const PRODUCT_TITLE_DEFAULT = await PRODUCT_TITLE_SLT.map(pTitle =>  pTitle.getText());


        return PRODUCT_TITLE_DEFAULT;
    }

    async getQualityProduct() {
        await this.isDisplayedNextIcon();
        const PRODUCT_TITLE_SLT =  await $$(PRODUCT_TITLE_TXT);
        const PRODUCT_TITLE_DEFAULT = await PRODUCT_TITLE_SLT.map(pTitle =>  pTitle.getText());
        console.log(PRODUCT_TITLE_DEFAULT);
        return PRODUCT_TITLE_DEFAULT;
    }


    async getActualPrice() {
        const ACTUAL_PRICE_SLT = await $$(ACTUAL_PRICE_TXT);
        const ACTUAL_PRICE_DEFAULT = await ACTUAL_PRICE_SLT.map(price =>  price.getText());
        return ACTUAL_PRICE_DEFAULT;
    }

    async getActualPriceAfterSortLowHigh() {
        const ACTUAL_PRICE_SLT = await $$(ACTUAL_PRICE_TXT);
        const ACTUAL_PRICE_DEFAULT = await ACTUAL_PRICE_SLT.map(price =>  price.getText());
        return ACTUAL_PRICE_DEFAULT;
    }

    async getActualPriceAfterSortHighLow() {
        const ACTUAL_PRICE_SLT = await $$(ACTUAL_PRICE_TXT);
        const ACTUAL_PRICE_DEFAULT = await ACTUAL_PRICE_SLT.map(price =>  price.getText());
        return ACTUAL_PRICE_DEFAULT;
    }

    async getCurrentPage() {
        await $(CURRENT_PAGE_BTN).getText();
        return this;
    }

    async isDisplayedNextIcon() {
        await $(NEXT_PAGE_BTN).isDisplayed();
        return this;
    }

    async isDisplayedPreviousIcon() {
        await $(PREVIOUS_PAGE_BTN).isDisplayed();
        return this;
    }

    async isNotDisplayedPaging() {
        await $(CURRENT_PAGE_BTN).waitForDisplayed({reverse: true});
        return this;
    }
}
module.exports = new Notebooks();