import NotebooksFlow from "../../test_flows/users/Notebooks";
import NotebooksData from "../../../resources/test_data/Notebooks";

describe('Sort, Display and Paging testing', () => {
    it('TC_01_Sort_With_Name_A_To_Z', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortAtoZ);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doSortBy();
        await notebooksFlow.verifySortProductNameAtoZ();
    })

    it.skip('TC_02_Sort_With_Name_Z_To_A', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortZtoA);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doSortBy();
        await notebooksFlow.verifySortProductNameZtoA();
    })

    it.skip('TC_03_Sort_With_Price_Low_To_High', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortLowtoHigh);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doSortBy();
        await notebooksFlow.verifySortProductPriceLowToHigh();
    })

    
    it.skip('TC_04_Sort_With_Price_High_To_Low', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortHightoLow);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doSortBy();
        await notebooksFlow.verifySortProductPriceHighToLow();
    })

    it.skip('TC_05_Display_With_Three_Product_One_Page', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortThreeProduct);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doDisplayPerPage();
        await browser.pause(5000);
        await notebooksFlow.verifyDisplayedWithThreeProductOnePage();
    })

    it.skip('TC_06_Display_With_Six_Product_One_Page', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortSixProduct);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doDisplayPerPage();
        await notebooksFlow.verifyDisplayedWithSixProductOnePage();
    })

    it.skip('TC_07_Display_With_Nine_Product_One_Page', async () => {
        const notebooksFlow = new NotebooksFlow(NotebooksData.sortNineProduct);
        await notebooksFlow.openNotebooksPage();
        await notebooksFlow.doDisplayPerPage();
        await notebooksFlow.verifyDisplayedWithNineProductOnePage();
    })
})