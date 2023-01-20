//this is ES6 MODULE SYNTAX
//we have to change it to common JS
//import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

class Company {
  constructor() {
    const adjective = this.titleCase(faker.word.adjective());
    const nouns = this.titleCase(faker.word.noun()) + "s";

    this._id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.street = faker.address.street();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
  titleCase(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const companies = [
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
]



// const newCompany = new Company();
// console.log(newCompany);


//  COMMON JS EXPORT 
module.exports = { Company, companies };
