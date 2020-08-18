//Import the js file to test
import { checkForName } from '../src/client/js/nameChecker'

test('testing sidet data', () => {
    expect(checkForName('/test')).resolves.toBe({
//Define the input for the function.
        'title':'kbkb',
//Define the expected output
        'message':'this is a message',
        'time': 'now'
      })
})
//Check if the function produces the expected output????