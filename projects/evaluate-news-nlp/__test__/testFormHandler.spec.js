//Import the js file to test
import { handleSubmit } from '../src/client/js/formHandler'
//Define the input for the function.
//Define the expected output
//Check if the function produces the expected output
// The describe() function takes two arguments - a string description, 
//and a test suite as a callback function.  
// A test suite may contain one or more related tests    

    test("Testing if the handleSubmit() function exists", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit.toBeDefined();
});

const request = require('supertest');
const app = require('../server/index');

test('Respond with 200 status code', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
});