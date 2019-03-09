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

// const birthDate = new Date().toISOString()
// const description = "Missionário falante de inglês e francês com foco em evangelismo na Europa"
// const email = "fabiano@teste1.com"
// const aim = "Pregar a Cristo"
// const name = "Fabiano Lavis"
// const password = name+"123"

// const signup = `
//     mutation{
//         signup(
//             birthDate: ${birthDate},
//             description: ${description},
//             email: ${email},
//             aim: ${aim},
//             name: ${name},
//             password: ${password}
//         ){
//             _id
//             email
//         }
//     }
// `
