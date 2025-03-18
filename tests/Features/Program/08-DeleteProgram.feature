
Feature: Delete program Validation

Background: Admin is logged in to LMS Portal
Given The browser is open 
When Admin gives the correct LMS portal URL
Then Admin should land on the login page

@dp1
Scenario: Verify delete feature
Given Admin is on Program page
When Admin clicks on delete button for a program
Then Admin will get confirm deletion popup

@dp2
Scenario: Verify Admin is able to click 'Yes'
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin clicks on yes button
Then Admin can see 'Successful Program Deleted' message

@dp3
Scenario: Verify Admin is able to see deleted program
Given Admin is on Program page
When Admin Searches for "Deleted Program name"
Then There should be zero results.

@dp4
Scenario: Verify Admin is able to click 'No'
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin clicks on No button
Then Admin can see Confirmation form disappears

@dp5
Scenario: Verify Admin is able to close the window with "X" 
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin Click on X button
Then Admin can see Confirmation form disappears