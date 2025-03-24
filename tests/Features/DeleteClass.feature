Feature: Delete Class

Background: Admin is on the Manage Class page after login

Given Admin is on the Manage class page
       
Scenario: Validate row level delete icon
Given Admin is on Manage Class Page
When Admin clicks the delete icon
Then Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion in Class

Scenario: Click Yes on deletion window
Given Admin is on Confirm Deletion alert in Class
When Admin clicks yes option in class delete
Then Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table

Scenario: Click No on deletion window
Given Admin is on Confirm Deletion alert in class
When Admin clicks  No option in class
Then Admin can see the deletion alert disappears without deleting in class delete

Scenario: Validate Close(X) icon on Confirm Deletion alert
Given Admin is on Confirm Deletion alert in class
When Admin clicks on close button in class delete
Then Admin can see the deletion alert disappears without any changes in class delete