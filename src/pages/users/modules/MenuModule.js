


class MenuModule {
    async openComputersPage() {
        await browser.url('/computers');
        return this;
    }

    async openDesktopsPage() {
        await browser.url('/desktops');
        return this;
    }

    async openNoteBooksPage() {
        await browser.url('/notebooks');
        return this;
    }
}
module.exports = new MenuModule();