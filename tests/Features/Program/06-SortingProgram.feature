Feature: program sorting

Background: Admin is logged in to LMS Portal
Given The browser is open 
When Admin gives the correct lms portal url


  @ps1
  Scenario: verify sorting of program name in ascending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program Name
    Then Admin See the Program Name is sorted in Ascending order

@ps2
  Scenario: Validate sorting of program name in Descending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program Name
    Then Admin See the Program Name is sorted in Descending order
  
  @ps3
  Scenario: Validate sorting of program description in ascending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program description
    Then Admin See the Program description is sorted in ascending order
    
@ps4
  Scenario: Validate sorting of program description in Descending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program description
    Then Admin See the Program description is sorted in Descending order
  
  @ps5
  Scenario: verify sorting of program status in ascending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program status
    Then Admin See the Program status is sorted in Ascending order
    
  @ps6  
  Scenario: verify sorting of program status in descending order
    Given Admin is on Program page
    When Admin clicks on Arrow next to program status
    Then Admin See the Program status is sorted in descending order 

  
