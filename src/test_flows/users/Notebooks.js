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
        let expectedSortProductNameAtoZ = await NotebooksPage.getProductTitleBeforeSort();
        let actualSortProductNameAtoZ = await NotebooksPage.getProductTitleAfterSortAtoZ();
        await expect(expectedSortProductNameAtoZ).toEqual(actualSortProductNameAtoZ);
        return this;
    }

    async verifySortProductNameZtoA() {
        let expectedSortProductNameZtoA = (await NotebooksPage.getProductTitleBeforeSort()).reverse();
        let actualSortProductNameZtoA = await NotebooksPage.getProductTitleAfterSortZtoA();
        await expect(expectedSortProductNameZtoA).toEqual(actualSortProductNameZtoA);
        return this;
    }


    async verifySortProductPriceLowToHigh() {
        let expectedSortProductPriceLowToHigh = (await NotebooksPage.getActualPrice()).sort();
        let actualSortProductPriceLowToHigh = await NotebooksPage.getActualPriceAfterSortLowHigh();
        await expect(expectedSortProductPriceLowToHigh).toEqual(actualSortProductPriceLowToHigh);
        return this;
    }

    async verifySortProductPriceHighToLow() {
        let expectedSortProductPriceHighToLow = (await NotebooksPage.getActualPrice()).reverse();
        let actualSortProductPriceHighToLow = await NotebooksPage.getActualPriceAfterSortHighLow();
        await expect(expectedSortProductPriceHighToLow).toEqual(actualSortProductPriceHighToLow);
        return this;
    }

    async doDisplayPerPage() {
        await NotebooksPage.selectDisplayPerPage(this._displayPage);
        return this;
    }

    async verifyDisplayedWithThreeProductOnePage() {
        let actualDisplayedThreeProduct = await NotebooksPage.getQualityProduct();
        await expect(actualDisplayedThreeProduct).toBeLessThanOrEqual(3);

        let actualCurrentPage = await NotebooksPage.getCurrentPage();
        await expect(actualCurrentPage).toBeLessThanOrEqual(1);
        await NotebooksPage.isDisplayedNextIcon();

        await expect(actualCurrentPage).toBeLessThanOrEqual(2);
        await NotebooksPage.isDisplayedPreviousIcon();

        return this;
    }

    async verifyDisplayedWithThreeProductOnePage_2() {
        let testQuality = await NotebooksPage.getQualityProduct_2();

        let actualDisplayedThreeProduct = (await testQuality.map(quality => quality.getText())).length;

        await expect(actualDisplayedThreeProduct).toBeLessThanOrEqual(3);

        let actualCurrentPage = await NotebooksPage.getCurrentPage();
        await expect(actualCurrentPage).toBeLessThanOrEqual(1);
        await NotebooksPage.isDisplayedNextIcon();

        await expect(actualCurrentPage).toBeLessThanOrEqual(2);
        await NotebooksPage.isDisplayedPreviousIcon();

        return this;
    }

    async verifyDisplayedWithSixProductOnePage() {
        let actualDisplayedSixProduct = await NotebooksPage.getQualityProduct();
        await expect(actualDisplayedSixProduct).toBeLessThanOrEqual(6);
        await NotebooksPage.isNotDisplayedPaging();
        return this;
    }

    async verifyDisplayedWithNineProductOnePage() {
        let actualDisplayedNineProduct = await NotebooksPage.getQualityProduct();
        await expect(actualDisplayedNineProduct).toBeLessThanOrEqual(9);
        await NotebooksPage.isNotDisplayedPaging();
        return this;
    }

}