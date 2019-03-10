"use strict";
const EasyGraphQLTester = require("easygraphql-tester");
const schemaCode = require('../schema')

describe("Test my schema, Mock", () => {
  let tester;
  beforeAll(() => {
    tester = new EasyGraphQLTester(schemaCode);
  });
  describe("Mock", () => {
    test("Should return mocked fields of schema", () => {
      const query = `
        {
          getUsers {
            email
            username
            fullName
            phone
          }
        }
      `;
      const mockedResult = tester.mock(query);
      // You can use something like chai and validate that the
      // mockedResult returns the type of data you expected
      console.log("Mocked result: ", mockedResult);
    });
  });
});

/*

var faker = require('faker/locale/pt_BR');

var randomName = faker.name.findName(); // Rowan Nikolaus



const birthDate = new Date().toISOString()
const description = "Missionário falante de inglês e francês com foco em evangelismo na Europa"
const email = "fabiano@teste1.com"
const aim = "Pregar a Cristo"
const name = "Fabiano Lavis"
const password = name+"123"

const signup = `
    mutation{
        signup(
            birthDate: ${birthDate},
            description: ${description},
            email: ${email},
            aim: ${aim},
            name: ${name},
            password: ${password}
        ){
            _id
            email
        }
    }
`

mutation {
  addEvent(creator:"5c8334d77241750e836a7feb",
  description: "Somos um grupo liderado pelo pastor XYZ e vamos destribuir folhetos",
    eventDate:"2019-03-09T02:10:31.641Z",
  host: "IBCC",
    location:[23,-54],
    name: "Evangelismo na praça",
    recurrence: 0,
    duration: 120
  ){
  	_id
    location{
      value
      latitude
      longitude
    }
    createdAt
    updatedAt
  }
}

*/
