const express = require("express");
const app = express();

const { User, users } = require("./models/user.model");
const { Company, companies } = require("./models/company.model");

app.get("/api/users/new", (req, res) => {
  // const newUser = {
  //   id: faker.database.mongodbObjectId(),
  //   firstName: faker.name.firstName(),
  //   lastName: faker.name.lastName(),
  //   phoneNumber: faker.phone.phoneNumber(),
  //   email: faker.internet.email(),
  //   password: faker.internet.password(),
  // };
  res.status(200).json(users);
});

app.get("/api/companies/new", (req, res) => {
  // const newCompany = {
  //   id: faker.database.mongodbObjectId(),
  //   name: faker.company.name(),
  //   adress: faker.address.street().city().state().zipCode().country()
  // };
  res.status(200).json(companies);
});

app.get("/api/user/company", (req, res) => {
  const user = new User();
  const company = new Company();
  // console.log(user)
  const join = { ...company, ...user };

  res.status(200).json(join);
});


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
