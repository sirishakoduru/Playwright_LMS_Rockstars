// Generated from: tests\Features\Batch.feature
import { test } from "playwright-bdd";

test.describe('Batch Page Navigation', () => {

  test('Validate login with valid data in all field', { tag: ['@Batch'] }, async ({ Given, When, Then }) => { 
    await Given('Admin is on login Page'); 
    await When('Admin enter valid data in all field and clicks login button'); 
    await Then('Admin should land on home page'); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\Batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@Batch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end