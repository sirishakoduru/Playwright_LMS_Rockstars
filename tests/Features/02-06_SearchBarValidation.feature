Feature:Manage Program - Search bar

Background: Admin is on program module after reaching dashboard
Given Admin is logged in to LMS Portal
When Admin clicks on program in dashboard and admin lands on Manage program Page


Scenario: Verify Admin is able to search results found for program name
Given Admin is on the Program module
When Admin enter the program to search By program name
Then Admin should able to see Program name, description, and status for searched program name


Scenario: Admin should able to see Program name, description, and status for searched program name
Given Admin is on the Program module
When Admin enter the program to search By program description
Then Admin should able to see Program name, description, and status for searched program description


Scenario: Verify Admin is able to search results not found
Given Admin is on the Program module
When Admin enter the program to search By program name that does not exist
Then There should be zero results.

Scenario: Verify Admin is able to search with partial program name
Given Admin is on the Program module
When Admin enter the program to search By partial name of program
Then Admin should able to see Program name, description, and status for searched program name for partial search