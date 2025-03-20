@Class
Feature: Class Page Navigation

Background: Admin successfully Logged on to the LMS Portal
Given Admin is on the loginPage
When Admin enter valid data in all field and clicks login button   

@Class_Menu_Click
Scenario: Verify Admin Navigate to Class page successfully
Given Admin is on the home Page
When Admin clicks the Class Navigation bar in the Header
Then Admin should land on the Manage Class Page
