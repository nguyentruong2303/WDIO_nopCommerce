const PRODUCT_BUILD_PC_LINK = "//h2[@class='product-title']/a[text()='Build your own computer']";
const PRODUCT_LENOVO_PC_LINK = "//h2[@class='product-title']/a[text()='Lenovo IdeaCentre 600 All-in-One PC']";
const ADD_TO_COMPARE_LIST_BTN = "//a[text()='Lenovo IdeaCentre 600 All-in-One PC']/parent::h2[@class='product-title']/following-sibling::div[@class='add-info']//div[@class='buttons']/button[text()='Add to compare list']";
const BAR_NOTIFICATION_TXT = ".bar-notification";
const CLOSE_BTN = ".close";




class Desktops {
    async clickProductBuildYourOwnComputer() {
        await $(PRODUCT_BUILD_PC_LINK).click();
        return this;
    }

    async clickProductLenovoPC() {
        await $(PRODUCT_LENOVO_PC_LINK).click();
        return this;
    }
}
module.exports = new Desktops();