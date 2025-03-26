Feature: Manage Program - Sorting Program
    
Background: Admin is on program module after reaching dashboard
Given Admin is logged in to LMS Portal
When Admin clicks on program in dashboard and admin lands on Manage program Page


Scenario: Verify sorting of  Program name in Ascending order/Descending order
Given Admin is on Program module
When Admin clicks on Arrow next to programName
Then Admin See the Program Name is sorted in Ascending order or Descending order

Scenario: Verify sorting of  Program Description in  Ascending order/Descending order
Given Admin is on Program module
When Admin clicks on Arrow next to Program Description
Then Admin See the program Description is sorted in Ascending order or Descending order

Scenario: Verify sorting of Program status in Ascending order/Descending order
Given Admin is on Program module
When Admin clicks on Arrow next to Program status
Then Admin See the  Program Status is sorted in Ascending order or Descending order

