Feature: As a user of this application, I want to go through the entire process of hiring a candidate

  Scenario Outline: hire a candidate who is not Internal Mobility
    Given I'm logged in as "<user>"
    When I click on "<candidate>" with "<status>" in my list
    And on pop up a "<tab>" is selected
    And on pop up I write a "<feedback>"
    And select "<decision>" from Decision section
    And select "<interviewers>"
    And click 'Save'
    Then "<candidate>" is absent from "<tabName>" tab
    And "<candidate>" is present in "<nextTab>" tab with "<new status>"

    Examples:
      | user        | candidate      | status              | tab       | feedback | decision | interviewers                      | tabName       | nextTab       | new status          |
      | admin       | Test Candidate | CV Review: Assigned | CVReview  | ok       | Yes      | Test Supervisor                   | My Candidates | In Processing | Prescreen: Assigned |
      | supervisor  | Test Candidate | Prescreen: Assigned | Prescreen | ok       | Yes      |                                   | My Candidates | In Processing | Prescreen: Assigned |
      | admin       | Test Candidate | Prescreen: Assigned | Prescreen |          |          | Test Supervisor, Test Interviewer | My Candidates | In Processing | TI: Assigned        |
      | interviewer | Test Candidate | TI: Assigned        | Interview | ok       | Yes      |                                   | My Candidates | In Processing | PMI: Assigned       |
      | admin       | Test Candidate | PMI: Assigned       | Final     | ok       | Yes      |                                   | My Candidates | Archive       | Offer Accepted      |