//this is ES6 MODULE SYNTAX
//we have to change it to common JS
//import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

class User {
  constructor() {
    const adjective = this.titleCase(faker.word.adjective());
    const nouns = this.titleCase(faker.word.noun()) + "s";

    this._uid = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
  titleCase(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const users = [
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
]



// const newBand = new Band();
// console.log(newBand);


//  COMMON JS EXPORT 
module.exports = { User, users };
