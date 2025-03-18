
Feature: search bar program Validation

Background: Admin is logged in to LMS Portal
Given The browser is open 
When Admin gives the correct lms portal url
Then Admin should land on the login page

@sp1
Scenario: Verify Admin is able to search results found for program name
Given Admin is on Program page
When Admin enter the program to search By program name
Then Admin should able to see Program name, description, and status for searched program name

@sp2
Scenario: Verify Admin is able to search results found for program description
Given Admin is on Program page
When Admin enter the program to search By program description
Then Admin should able to see Program name, description, and status for searched program name

@sp3
Scenario: Verify Admin is able to search results not found 
Given Admin is on Program page
When Admin enter the program to search By program name that does not exist
Then There should be zero results.

@sp4
Scenario: Verify Admin is able to search with partial program name
Given Admin is on Program page
When Admin enter the program to search By partial name of program
Then Admin should able to see Program name, description, and status for searched program name
