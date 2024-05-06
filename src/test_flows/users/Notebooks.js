import NotebooksPage from "../../pages/users/Notebooks";
import MenuModule from "../../pages/users/modules/MenuModule";

export default class Notebooks {
    constructor(NotebooksData) {
        this._sortKey = NotebooksData.sortKey;
        this._displayPage = NotebooksData.displayPage;
    }

    async openNotebooksPage() {
        await MenuModule.openNoteBooksPage();
        return this;
    }

    async doSortBy() {
        await NotebooksPage.selectSortBy(this._sortKey);
        return this;
    }

    async verifySortProductNameAtoZ() {
        let expectedSortProductNameAtoZ = (await NotebooksPage.getProductTitleBeforeSort()).sort();
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualSortProductNameAtoZ = await NotebooksPage.getProductTitleAfterSortAtoZ();
        await expect(expectedSortProductNameAtoZ).toEqual(actualSortProductNameAtoZ);
        return this;
    }

    async verifySortProductNameZtoA() {
        let expectedSortProductNameZtoA = (await NotebooksPage.getProductTitleBeforeSort()).reverse();
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualSortProductNameZtoA = await NotebooksPage.getProductTitleAfterSortZtoA();
        await expect(expectedSortProductNameZtoA).toEqual(actualSortProductNameZtoA);
        return this;
    }


    async verifySortProductPriceLowToHigh() {
        let expectedSortProductPriceLowToHigh = (await NotebooksPage.getActualPrice()).sort();
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualSortProductPriceLowToHigh = await NotebooksPage.getActualPriceAfterSortLowHigh();
        await expect(expectedSortProductPriceLowToHigh).toEqual(actualSortProductPriceLowToHigh);
        return this;
    }

    async verifySortProductPriceHighToLow() {
        let sortPriceLowToHigh = (await NotebooksPage.getActualPrice()).sort();
        let expectedSortProductPriceHighToLow = sortPriceLowToHigh.reverse();
        console.log(expectedSortProductPriceHighToLow);

        await browser.pause(5000);
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualSortProductPriceHighToLow = await NotebooksPage.getActualPriceAfterSortHighLow();
        await expect(expectedSortProductPriceHighToLow).toEqual(actualSortProductPriceHighToLow);
        return this;
    }

    async doDisplayPerPage() {
        await NotebooksPage.selectDisplayPerPage(this._displayPage);
        return this;
    }

    async verifyDisplayedWithThreeProductOnePage() {
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualDisplayedThreeProduct = (await NotebooksPage.getQualityProduct()).length;
        await expect(actualDisplayedThreeProduct).toBeLessThanOrEqual(3);

        let actualCurrentPage = await NotebooksPage.getCurrentPage();
        await expect(actualCurrentPage).toBeLessThanOrEqual(1);
        await NotebooksPage.isDisplayedNextIcon();

        await expect(actualCurrentPage).toBeLessThanOrEqual(2);
        await NotebooksPage.isDisplayedPreviousIcon();

        return this;
    }


    async verifyDisplayedWithSixProductOnePage() {
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualDisplayedSixProduct = await NotebooksPage.getQualityProduct();
        await expect(actualDisplayedSixProduct).toBeLessThanOrEqual(6);
        await NotebooksPage.isNotDisplayedPaging();
        return this;
    }

    async verifyDisplayedWithNineProductOnePage() {
        await NotebooksPage.isNotDisplayedAjaxProductLoading();
        let actualDisplayedNineProduct = await NotebooksPage.getQualityProduct();
        await expect(actualDisplayedNineProduct).toBeLessThanOrEqual(9);
        await NotebooksPage.isNotDisplayedPaging();
        return this;
    }

}