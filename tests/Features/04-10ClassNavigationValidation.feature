Feature: Navigation Validation from Manage Class to other Pages

Background: Admin is on Manage Class page after login

Given AAdmin is on Manage Class page
       
Scenario: Class link on navigation bar
Given Admin is on Manage Class Page
When Admin clicks on Class link on Manage Class page
Then Admin is redirected to class page

Scenario: Class link to Batch page on navigation bar
Given Admin is on Manage Class Page
When Admin clicks on Batch page link on Manage Class page
Then Admin is redirected to Btach page link they clicked.

Scenario: Class link to Program page on navigation bar
Given Admin is on Manage Class Page
When Admin clicks on Program page link on Manage Class page
Then Admin is redirected to Program page link they clicked.

Scenario: Logout link on navigation bar
Given Admin is on Manage Class Page
When Admin clicks on Logout link on Manage class page
Then Admin is redirected to Login page