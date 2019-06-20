# LAB - 29

## React State - External State

### Author: Jesse Van Volkinburg

### Links and Resources

**Assignment 2, Challenge 1**

- [PR - GitHub](https://github.com/401-advanced-javascript-jv/28a-props/pull/1)
- [Travis ![Build Status](https://travis-ci.com/401-advanced-javascript-jv/28c-external-state.svg?branch=submission)](https://travis-ci.com/401-advanced-javascript-jv/28c-external-state)

**Assignment 2, Challenge 2**

- [PR - GitHub](https://github.com/401-advanced-javascript-jv/28a-props/pull/2)
- [Travis ![Build Status](https://travis-ci.com/401-advanced-javascript-jv/28c-external-state.svg?branch=submission2)](https://travis-ci.com/401-advanced-javascript-jv/28c-external-state)

#### Running the app

- `npm start` - to start the app
- If a browser window does not appear, navigate manually to http://localhost:3000

## Requirements

### Assignment 3 - External State Practice

Begin with: `/lab/starter-code/external-state`

**Challenge Instructions (Part 1)**

- Leave these instructions in place
- Fork this sandbox
- Complete the challenge below and submit the URL to your fork
- Add a constructor and declare a state object
- "state" should have "count" and "name" properties
- Create a "handler" method that will take name as a parameter and updates the state with the given name and an increased count
- Render the "Form" component with a reference to the update method created above, via property
- Create a new "Form" Component
- Add a form element with a single field
- As the user types in the field, change the "name" property in state
- When the user "submits" the form invoke handler method in the parent component, sending the updated name
- The output section below should update as state changes

**Challenge Instructions (Part 2)**

- Fork your completed sandbox
- Refactor your work using new modules for each component
- Be prepared to discuss/defend file & directory structures chosen

**Stretch Goals / Further Practice**

- Instead of updating the count on submit, create a link that updates the count on demand
- Use multiple fields in your form to update multiple state properties
- Make evaluations on the state of your state to dynamically render things. For example, if the name is empty, show an error or if there are 2 names given (first and last), reverse and comma separate them.

### Tests

Write mount/enzyme tests for each component/assignment
