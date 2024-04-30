import CustomerServiceModule from "../../pages/users/modules/CustomerServiceModule";
import SearchPage from "../../pages/users/Search";

export default class Search {
    constructor(SearchData) {
        this._searchText = SearchData.searchText;
        this._category = SearchData.category;
        this._manufacturer = SearchData.manufacturer;
    }

    async openSeachPage() {
        await CustomerServiceModule.openSearchPage();
        return this;
    }

    async searchNormal() {
        await SearchPage.inputSearchText(this._searchText);
        await SearchPage.clickSearchBtn();
        return this;
    }

    async advanceSearchWithParentCategory() {
        await SearchPage.inputSearchText(this._searchText);
        await SearchPage.clickCheckOnAdvanceSearch();
        await SearchPage.selectCategorySearch(this._category);
        await SearchPage.clickSearchBtn();
        return this;
    }

    async advanceSearchWithSubCategory() {
        await SearchPage.inputSearchText(this._searchText);
        await SearchPage.clickCheckOnAdvanceSearch();
        await SearchPage.selectCategorySearch(this._category);
        await SearchPage.clickCheckOnSearchSubCategory();
        await SearchPage.clickSearchBtn();
        return this;
    }

    async advanceSearchWithManufacturer() {
        await SearchPage.inputSearchText(this._searchText);
        await SearchPage.clickCheckOnAdvanceSearch();
        await SearchPage.selectCategorySearch(this._category);
        await SearchPage.clickCheckOnSearchSubCategory();
        await SearchPage.selectManufacturer(this._manufacturer);
        await SearchPage.clickSearchBtn();
        return this;
    }

    async verifySearchWithEmptyData() {
        let expectedSearchWithEmptyData = 'Search term minimum length is 3 characters';
        let actualSearchWithEmptyData = await SearchPage.getWarningSearch();
        await expect(expectedSearchWithEmptyData).toEqual(actualSearchWithEmptyData);
        return this;
    }

    async verifySearchWithDataNotExist() {
        let expectedSearchWithDataNotExist = 'No products were found that matched your criteria.';
        let actualSearchWithDataNotExist = await SearchPage.getNoResultMessage();
        await expect(expectedSearchWithDataNotExist).toEqual(actualSearchWithDataNotExist);
        return this;
    }

    async verifySearchWithProductNameRelative() {
        await SearchPage.isDisplayedLenovoIdea();
        await SearchPage.isDisplayedLenovoThinkPad();
        return this;
    }

    async verifySearchWithProductNameAbsolute() {
        await SearchPage.isDisplayedLenovoThinkPad();
        return this;
    }

    async verifySearchWithSubCategory() {
        await SearchPage.isDisplayedAppleMacbook();
        return this;
    }

    async verifySearchWithCorrectManufacturer() {
        await SearchPage.isDisplayedAppleMacbook();
        return this;
    }

    async verifySearchWithDataInvalid() {
        let expectedSearchWithDataNotExist = 'No products were found that matched your criteria.';
        let actualSearchWithDataNotExist = await SearchPage.getNoResultMessage();
        await expect(expectedSearchWithDataNotExist).toEqual(actualSearchWithDataNotExist);
        return this;
    }
}