//Import the js file to test
import { checkForName } from '../src/client/js/nameChecker'

test('testing nameChecker function', () => {
//Define the input for the function.
const input = 'Picard';
//Define the expected output
const output = true;
//Check if the function produces the expected output
expect(checkForName(input, true)).toEqual(output);     
 });