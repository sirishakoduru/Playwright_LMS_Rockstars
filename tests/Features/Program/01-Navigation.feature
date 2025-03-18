@Navigation
Feature: Navigation program

Background: Admin is logged in to LMS Portal
Given The browser is open 
When Admin gives the correct lms portal url

@TC_01
Scenario Outline: Verify that Admin is able to navigate to <page>
Given Admin is on home page after Login
When Admin clicks "<page>" on the navigation bar
Then Admin should be navigated to "<page>"

Examples:
|page|
|program|
|batch|
|class|