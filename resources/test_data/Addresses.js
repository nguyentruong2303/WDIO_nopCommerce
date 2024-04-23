const randEmail = 'automation'+Math.floor(100000 + Math.random() * 900000)+'@gmail.com';

const addNewAddress = {
    firstName : 'Automation',
    lastName : 'FC',
    email : randEmail,
    company : 'Automation FC',
    country : 'Viet Nam',
    city : 'Ho Chi Minh',
    address1: '123 Nguyen Hue',
    address2: '321 Nguyen Hue',
    zipCode : '650000',
    phoneNumber: '0987654321',
    faxNumber: '0912345678'
}

const data = {
    correct : addNewAddress
}
export default data;

