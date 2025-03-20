Feature: Validate row level edit icon

Background: Admin Is on the Manage class page after login
           Given Admin is on the Manage class page
           

Scenario: Validate row level edit icon
Given Admin is on the Manage class page
When Admin clicks on the edit icon 
Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window
