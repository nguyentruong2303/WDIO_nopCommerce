
class CustomerServiceModule {
    async openSearchPage() {
        await browser.url('/search');
        return this;
    }

    async openCompareProductList() {
        await browser.url('/compareproducts');
        return this;
    }
}
module.exports = new CustomerServiceModule();