const randEmail = 'automation'+Math.floor(100000 + Math.random() * 900000)+'@gmail.com';


const dataUpdateCustomerInformation = {
    firstName: 'Automation',
    lastName: 'FC',
    day: '1',
    month:'January',
    year:'1999',
    email: randEmail,
    company:'Automation FC'
}
const data = {
    correct : dataUpdateCustomerInformation
}
export default data;