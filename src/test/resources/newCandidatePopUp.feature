Feature: As an admin, I want to check that different steps of hiring workflow are defined when Internal Mobility is checked

  Background:
    Given I'm logged in as "admin"
    When I click 'Add candidate' btn
    And 'New Candidate' pop up appears

  Scenario Outline: Do not check Internal Mobility checkbox and verify hiring workflow steps
    Then I can see "<steps of hiring process>"
    Examples:
      | steps of hiring process                     |
      | Info, CVReview, Prescreen, Interview, Final |

  Scenario Outline: Check Internal Mobility checkbox and verify hiring workflow steps
    And I check Internal Mobility checkbox
    Then I can see "<steps of hiring process>"
    Examples:
      | steps of hiring process          |
      | Info, CVReview, Interview, Final |
