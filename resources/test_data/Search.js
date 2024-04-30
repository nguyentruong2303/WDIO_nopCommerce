const searchWithEmptyData = {
    searchText : ''
}

const searchWithDataNotExist = {
    searchText : 'Macbook Pro 2050'
}

const searchWithDataRelative = {
    searchText : 'Lenovo'
}

const searchWithDataAbsolute = {
    searchText : 'ThinkPad X1 Carbon'
}

const advanceSearchWithParentCategory = {
    searchText : 'Apple Macbook Pro',
    category : 'Computers'
}

const advanceSearchWithSubCategory = {
    searchText : 'Apple Macbook Pro',
    category : 'Computers'
}

const advanceSearchWithIncorrectManufacturer = {
    searchText : 'Apple Macbook Pro',
    category : 'Computers',
    manufacturer: 'HP'
}

const advanceSearchWithCorrectManufacturer = {
    searchText : 'Apple Macbook Pro',
    category : 'Computers',
    manufacturer: 'Apple'
}

const data = {
    emptyData : searchWithEmptyData,
    dataNotExist : searchWithDataNotExist,
    searchRelative : searchWithDataRelative,
    searchAbsolute : searchWithDataAbsolute,
    searchParentCategory : advanceSearchWithParentCategory,
    searchSubCategory : advanceSearchWithSubCategory,
    searchIncorrentManufacturer : advanceSearchWithIncorrectManufacturer,
    searchCorrentManufacturer : advanceSearchWithCorrectManufacturer
}

export default data;
