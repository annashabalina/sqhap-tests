Feature: To test that login works fine,
  I want to be able to login with correct credentials
  and to see an error when user name/password are incorrect

  Scenario: login with existing user name and password
    Given I am on the login page
    When I login as existing user
    Then I find myself on the homepage

  Scenario: attempt login with bad user name
    Given I am on the login page
    When I enter bad user name
    And I enter correct password
    And I click Submit
    Then I see an error message

