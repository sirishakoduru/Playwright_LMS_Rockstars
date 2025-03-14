// Generated from: tests\Features\Class.feature
import { test } from "playwright-bdd";

test.describe('Class Page Validation', () => {

  test('Verify user is able to login', async ({  }) => { 
  });

  test('validating login page', async ({ Given, When, Then }) => { 
    await Given('Admin navigates to "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login"'); 
    await When('Admin enters username "Playwright@gmail.com" and password "March@2025"'); 
    await Then('Admin is landed on "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/"'); 
  });

  test('Validating the Title in the Manage class page', async ({ Given, When, Then }) => { 
    await Given('Admin is on the home Page'); 
    await When('clicks the Class Navigation bar in the Header'); 
    await Then('Admin should see the "LMS-Learning Management System" Title'); 
  });

  test('Validating the Header in the Manage class page', async ({ Given, When, Then }) => { 
    await Given('Admin is on the home page after login'); 
    await When('Admin clicks the Class Navigation bar in the Header'); 
    await Then('Admin should see the "Mange Class" Header'); 
  });

  test('Validating Search bar in class page', async ({ Given, When, Then }) => { 
    await Given('Admin is on the home page after login'); 
    await When('Admin clicks the Class Navigation bar in the Header'); 
    await Then('Admin should see the Search Bar in Manage class page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\Class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[]},
  {"pwTestLine":9,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given Admin navigates to \"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login\"","stepMatchArguments":[{"group":{"start":19,"value":"\"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login\"","children":[{"start":20,"value":"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Admin enters username \"Playwright@gmail.com\" and password \"March@2025\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Playwright@gmail.com\"","children":[{"start":23,"value":"Playwright@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":58,"value":"\"March@2025\"","children":[{"start":59,"value":"March@2025","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin is landed on \"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/\"","stepMatchArguments":[{"group":{"start":19,"value":"\"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/\"","children":[{"start":20,"value":"https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given Admin is on the home Page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"LMS-Learning Management System\" Title","stepMatchArguments":[{"group":{"start":21,"value":"\"LMS-Learning Management System\"","children":[{"start":22,"value":"LMS-Learning Management System","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Mange Class\" Header","stepMatchArguments":[{"group":{"start":21,"value":"\"Mange Class\"","children":[{"start":22,"value":"Mange Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page","stepMatchArguments":[]}]},
]; // bdd-data-end