
class CustomerServiceModule {
    async openSearchPage() {
        await browser.url('/search');
        return this;
    }
}
module.exports = new CustomerServiceModule();