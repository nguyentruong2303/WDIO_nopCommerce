const CUSTOMER_INFO_LINK = '.customer-info';
const CUSTOMER_ADDRESS_LINK = '.customer-addresses';
const CUSTOMER_ORDERS_LINK = '.customer-orders';
const DOWNLOADABLE_PRODUCTS_LINK = '.downloadable-products';
const BACK_IN_STOCK_SUB_LINK = '.back-in-stock-subscriptions';
const REWARD_POINTS_LINK = '.reward-points';
const CHANGE_PASSWORD_LINK = '.change-password';
const CUSTOMER_REVIEWS_LINK = '.customer-reviews';

class MyAccountModule {
    async openCustomerInfoPage() {
        await $(CUSTOMER_INFO_LINK).click();
        return this;
    }

    async openCustomerAddressPage() {
        await $(CUSTOMER_ADDRESS_LINK).click();
        return this;
    }

    async openCustomerOrderPage() {
        await $(CUSTOMER_ORDERS_LINK).click();
        return this;
    }

    async openDownloadableProductPage() {
        await $(DOWNLOADABLE_PRODUCTS_LINK).click();
        return this;
    }

    async openBackInStockSubPage() {
        await $(BACK_IN_STOCK_SUB_LINK).click();
        return this;
    }

    async openRewardPointsPage() {
        await $(REWARD_POINTS_LINK).click();
        return this;
    }

    async openChangePasswordPage() {
        await $(CHANGE_PASSWORD_LINK).click();
        return this;
    }

    async openCustomerReviewPage() {
        await $(CUSTOMER_REVIEWS_LINK).click();
        return this;
    }
}
module.exports = new MyAccountModule();