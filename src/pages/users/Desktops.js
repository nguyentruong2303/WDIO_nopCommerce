const PRODUCT_TITLE_LINK = "//h2[@class='product-title']/a[text()='Build your own computer']";



class Desktops {
    async clickProductBuildYourOwnComputer() {
        $(PRODUCT_TITLE_LINK).click();
        return this;
    }
}
module.exports = new Desktops();