Feature: Search box Class

Background: Admin is on the Manage Class page after login

Given Admin is on the Manage class page for search

Scenario: Search class by Batch Name
Given Admin is on the Manage class page
When Admin enter the Batch Name in search textbox
Then Admin should see Class details are searched by Batch Name

Scenario: Search class by Class topic
Given Admin is on the Manage class page
When Admin enter the Class topic in search textbox
Then Admin should see Class details are searched by Class topic

Scenario: Search class by Staff Name
Given Admin is on the Manage class page
When Admin enter the Staff Name in search textbox
Then Admin should see Class details are searched by Staff name