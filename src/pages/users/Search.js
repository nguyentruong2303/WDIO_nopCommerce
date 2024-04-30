const SEARCH_TEXT_TXB = '.search-text';
const ADVANCE_SEARCH_CKB = "//label[text()='Advanced search']/preceding-sibling::input";
const SEARCH_BTN = '.search-button';
const WARNING_SEARCH = '.warning';
const NO_RESULT = '.no-result';
const CATEGORY_SLT = '.inputs select#cid';
const SEARCH_CATEGORY_CKB = ".reversed input#isc";
const MANUFACTURER_SLT = '.inputs select#mid';
const SEARCH_DESCRIPTION_CKB = '.inputs select#mid';

const LENOVO_IDEA_TXT = "//a[text()='Lenovo IdeaCentre 600 All-in-One PC']";
const LENOVO_THINKPAD_TXT = "//a[text()='Lenovo Thinkpad X1 Carbon Laptop']";
const APPLE_MACBOOK_TXT = "//a[text()='Apple MacBook Pro 13-inch']";

class Search {
    async inputSearchText(searchText) {
        await $(SEARCH_TEXT_TXB).setValue(searchText);
        return this;
    }

    async clickCheckOnAdvanceSearch() {
        await $(ADVANCE_SEARCH_CKB).click();
        return this;
    }

    async selectCategorySearch(category) {
        await $(CATEGORY_SLT).selectByVisibleText(category);
        return this;
    }

    async clickCheckOnSearchSubCategory() {
        await $(SEARCH_CATEGORY_CKB).click();
        return this;
    }

    async selectManufacturer(manufacturer) {
        await $(MANUFACTURER_SLT).selectByVisibleText(manufacturer);
        return this;
    }

    async clickCheckOnSearchInProductDescription() {
        await $(SEARCH_DESCRIPTION_CKB).click();
        return this;
    }

    async clickSearchBtn() {
        await $(SEARCH_BTN).click();
        return this;
    }

    async getWarningSearch() {
        return await $(WARNING_SEARCH).getText();
    }

    async getNoResultMessage() {
        return await $(NO_RESULT).getText();
    }

    async isDisplayedLenovoIdea() {
        await $(LENOVO_IDEA_TXT).isDisplayed();
        return this;
    }

    async isDisplayedLenovoThinkPad() {
        await $(LENOVO_THINKPAD_TXT).isDisplayed();
        return this;
    }

    async isDisplayedAppleMacbook() {
        await $(APPLE_MACBOOK_TXT).isDisplayed();
        return this;
    }


}
module.exports = new Search();






