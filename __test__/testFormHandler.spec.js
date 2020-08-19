//Import the js file to test
import { handleSubmit } from '../src/client/js/formHandler'
    test("Testing if the handleSubmit() function exists", () => {
           expect(handleSubmit).toBeDefined();
});