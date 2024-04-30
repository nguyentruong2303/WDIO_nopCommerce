import SearchFlow from "../../test_flows/users/Search";
import SearchData from "../../../resources/test_data/Search"


describe('Search and Advance Search Testing', () => {
    it('TC_01_Seach_With_Empty_Data', async () => {
        const searchFlow = new SearchFlow(SearchData.emptyData);
        await searchFlow.openSeachPage();
        await searchFlow.searchNormal();
        await searchFlow.verifySearchWithEmptyData();
    })

    it('TC_02_Search_With_Data_Not_Exist', async () => {
        const searchFlow = new SearchFlow(SearchData.dataNotExist);
        await searchFlow.openSeachPage();
        await searchFlow.searchNormal();
        await searchFlow.verifySearchWithDataNotExist();
    })

    it('TC_03_Search_With_Product_Name_Relative', async () => {
        const searchFlow = new SearchFlow(SearchData.searchRelative);
        await searchFlow.openSeachPage();
        await searchFlow.searchNormal();
        await searchFlow.verifySearchWithProductNameRelative();
    })

    it('TC_04_Search_With_Product_Name_Absolute', async () => {
        const searchFlow = new SearchFlow(SearchData.searchAbsolute);
        await searchFlow.openSeachPage();
        await searchFlow.searchNormal();
        await searchFlow.verifySearchWithProductNameAbsolute();
    })

    it('TC_05_Advance_Search_With_Parent_Cateogory', async () => {
        const searchFlow = new SearchFlow(SearchData.searchParentCategory);
        await searchFlow.openSeachPage();
        await searchFlow.advanceSearchWithParentCategory();
        await searchFlow.verifySearchWithDataInvalid();
    })

    it('TC_06_Advance_Search_With_Sub_Cateogory', async () => {
        const searchFlow = new SearchFlow(SearchData.searchSubCategory);
        await searchFlow.openSeachPage();
        await searchFlow.advanceSearchWithSubCategory();
        await searchFlow.verifySearchWithSubCategory();
    })

    it('TC_07_Advance_Search_With_Incorrect_Manufacturer', async () => {
        const searchFlow = new SearchFlow(SearchData.searchIncorrentManufacturer);
        await searchFlow.openSeachPage();
        await searchFlow.advanceSearchWithManufacturer();
        await searchFlow.verifySearchWithDataInvalid();
    })

    it('TC_08_Advance_Search_With_Correct_Manufacturer', async () => {
        const searchFlow = new SearchFlow(SearchData.searchCorrentManufacturer);
        await searchFlow.openSeachPage();
        await searchFlow.advanceSearchWithManufacturer();
        await searchFlow.verifySearchWithCorrectManufacturer();
    })


})