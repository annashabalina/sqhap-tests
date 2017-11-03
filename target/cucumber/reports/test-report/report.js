$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hireCandidate.feature");
formatter.feature({
  "line": 1,
  "name": "As a user of this application, I want to go through the entire process of hiring a candidate",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"\u003ccandidate\u003e\" with \"\u003cstatus\u003e\" in my list",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"\u003ctab\u003e\" is selected",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"\u003cfeedback\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"\u003cdecision\u003e\" from Decision section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"\u003cinterviewers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"\u003ccandidate\u003e\" is absent from \"\u003ctabName\u003e\" tab",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"\u003ccandidate\u003e\" is present in \"\u003cnextTab\u003e\" tab with \"\u003cnew status\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;",
  "rows": [
    {
      "cells": [
        "user",
        "candidate",
        "status",
        "tab",
        "feedback",
        "decision",
        "interviewers",
        "tabName",
        "nextTab",
        "new status"
      ],
      "line": 15,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;1"
    },
    {
      "cells": [
        "admin",
        "Test Candidate",
        "CV Review: Assigned",
        "CVReview",
        "ok",
        "Yes",
        "Test Supervisor",
        "My Candidates",
        "In Processing",
        "Prescreen: Assigned"
      ],
      "line": 16,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;2"
    },
    {
      "cells": [
        "supervisor",
        "Test Candidate",
        "Prescreen: Assigned",
        "Prescreen",
        "ok",
        "Yes",
        "",
        "My Candidates",
        "In Processing",
        "Prescreen: Assigned"
      ],
      "line": 17,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;3"
    },
    {
      "cells": [
        "admin",
        "Test Candidate",
        "Prescreen: Assigned",
        "Prescreen",
        "",
        "",
        "Test Supervisor, Test Interviewer",
        "My Candidates",
        "In Processing",
        "TI: Assigned"
      ],
      "line": 18,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;4"
    },
    {
      "cells": [
        "interviewer",
        "Test Candidate",
        "TI: Assigned",
        "Interview",
        "ok",
        "Yes",
        "",
        "My Candidates",
        "In Processing",
        "PMI: Assigned"
      ],
      "line": 19,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;5"
    },
    {
      "cells": [
        "admin",
        "Test Candidate",
        "PMI: Assigned",
        "Final",
        "ok",
        "Yes",
        "",
        "My Candidates",
        "Archive",
        "Offer Accepted"
      ],
      "line": 20,
      "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1168025570,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Test Candidate\" with \"CV Review: Assigned\" in my list",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"CVReview\" is selected",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"ok\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"Yes\" from Decision section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"Test Supervisor\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Test Candidate\" is absent from \"My Candidates\" tab",
  "matchedColumns": [
    1,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"Test Candidate\" is present in \"In Processing\" tab with \"Prescreen: Assigned\"",
  "matchedColumns": [
    1,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 698317415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 12
    },
    {
      "val": "CV Review: Assigned",
      "offset": 34
    }
  ],
  "location": "CandidatesTableStepDefs.iClickOnWithInMyList(String,String)"
});
formatter.result({
  "duration": 129573139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CVReview",
      "offset": 13
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpAIsSelected(String)"
});
formatter.result({
  "duration": 148530645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 21
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpIWriteA(String)"
});
formatter.result({
  "duration": 56855916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectFromDecisionSection(String)"
});
formatter.result({
  "duration": 97005764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Supervisor",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectAnAnd(String\u003e)"
});
formatter.result({
  "duration": 252765833,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.clickSave()"
});
formatter.result({
  "duration": 86065661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "My Candidates",
      "offset": 33
    }
  ],
  "location": "HomePageStepdefs.isAbsentFromTab(String,String)"
});
formatter.result({
  "duration": 120143446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "In Processing",
      "offset": 32
    },
    {
      "val": "Prescreen: Assigned",
      "offset": 57
    }
  ],
  "location": "HomePageStepdefs.isPresentInTabWith(String,String,String)"
});
formatter.result({
  "duration": 240224099,
  "status": "passed"
});
formatter.after({
  "duration": 93020717,
  "status": "passed"
});
formatter.before({
  "duration": 642856427,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"supervisor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Test Candidate\" with \"Prescreen: Assigned\" in my list",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"Prescreen\" is selected",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"ok\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"Yes\" from Decision section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Test Candidate\" is absent from \"My Candidates\" tab",
  "matchedColumns": [
    1,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"Test Candidate\" is present in \"In Processing\" tab with \"Prescreen: Assigned\"",
  "matchedColumns": [
    1,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "supervisor",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 565250631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 12
    },
    {
      "val": "Prescreen: Assigned",
      "offset": 34
    }
  ],
  "location": "CandidatesTableStepDefs.iClickOnWithInMyList(String,String)"
});
formatter.result({
  "duration": 119351830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prescreen",
      "offset": 13
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpAIsSelected(String)"
});
formatter.result({
  "duration": 130961979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 21
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpIWriteA(String)"
});
formatter.result({
  "duration": 72177145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectFromDecisionSection(String)"
});
formatter.result({
  "duration": 110420974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectAnAnd(String\u003e)"
});
formatter.result({
  "duration": 47535,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.clickSave()"
});
formatter.result({
  "duration": 93540707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "My Candidates",
      "offset": 33
    }
  ],
  "location": "HomePageStepdefs.isAbsentFromTab(String,String)"
});
formatter.result({
  "duration": 143036489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "In Processing",
      "offset": 32
    },
    {
      "val": "Prescreen: Assigned",
      "offset": 57
    }
  ],
  "location": "HomePageStepdefs.isPresentInTabWith(String,String,String)"
});
formatter.result({
  "duration": 213394731,
  "status": "passed"
});
formatter.after({
  "duration": 64637966,
  "status": "passed"
});
formatter.before({
  "duration": 615525459,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Test Candidate\" with \"Prescreen: Assigned\" in my list",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"Prescreen\" is selected",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"\" from Decision section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"Test Supervisor, Test Interviewer\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Test Candidate\" is absent from \"My Candidates\" tab",
  "matchedColumns": [
    1,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"Test Candidate\" is present in \"In Processing\" tab with \"TI: Assigned\"",
  "matchedColumns": [
    1,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 559793206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 12
    },
    {
      "val": "Prescreen: Assigned",
      "offset": 34
    }
  ],
  "location": "CandidatesTableStepDefs.iClickOnWithInMyList(String,String)"
});
formatter.result({
  "duration": 123397664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prescreen",
      "offset": 13
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpAIsSelected(String)"
});
formatter.result({
  "duration": 150925258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpIWriteA(String)"
});
formatter.result({
  "duration": 39714963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectFromDecisionSection(String)"
});
formatter.result({
  "duration": 49638943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Supervisor, Test Interviewer",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectAnAnd(String\u003e)"
});
formatter.result({
  "duration": 453919146,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.clickSave()"
});
formatter.result({
  "duration": 68730765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "My Candidates",
      "offset": 33
    }
  ],
  "location": "HomePageStepdefs.isAbsentFromTab(String,String)"
});
formatter.result({
  "duration": 106103717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "In Processing",
      "offset": 32
    },
    {
      "val": "TI: Assigned",
      "offset": 57
    }
  ],
  "location": "HomePageStepdefs.isPresentInTabWith(String,String,String)"
});
formatter.result({
  "duration": 227135210,
  "status": "passed"
});
formatter.after({
  "duration": 65351822,
  "status": "passed"
});
formatter.before({
  "duration": 662970915,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"interviewer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Test Candidate\" with \"TI: Assigned\" in my list",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"Interview\" is selected",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"ok\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"Yes\" from Decision section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Test Candidate\" is absent from \"My Candidates\" tab",
  "matchedColumns": [
    1,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"Test Candidate\" is present in \"In Processing\" tab with \"PMI: Assigned\"",
  "matchedColumns": [
    1,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "interviewer",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 561314340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 12
    },
    {
      "val": "TI: Assigned",
      "offset": 34
    }
  ],
  "location": "CandidatesTableStepDefs.iClickOnWithInMyList(String,String)"
});
formatter.result({
  "duration": 119445250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interview",
      "offset": 13
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpAIsSelected(String)"
});
formatter.result({
  "duration": 128482105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 21
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpIWriteA(String)"
});
formatter.result({
  "duration": 61258163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectFromDecisionSection(String)"
});
formatter.result({
  "duration": 104649593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectAnAnd(String\u003e)"
});
formatter.result({
  "duration": 89691,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.clickSave()"
});
formatter.result({
  "duration": 78003338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "My Candidates",
      "offset": 33
    }
  ],
  "location": "HomePageStepdefs.isAbsentFromTab(String,String)"
});
formatter.result({
  "duration": 119048797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "In Processing",
      "offset": 32
    },
    {
      "val": "PMI: Assigned",
      "offset": 57
    }
  ],
  "location": "HomePageStepdefs.isPresentInTabWith(String,String,String)"
});
formatter.result({
  "duration": 217020056,
  "status": "passed"
});
formatter.after({
  "duration": 66500513,
  "status": "passed"
});
formatter.before({
  "duration": 717990882,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "hire a candidate who is not Internal Mobility",
  "description": "",
  "id": "as-a-user-of-this-application,-i-want-to-go-through-the-entire-process-of-hiring-a-candidate;hire-a-candidate-who-is-not-internal-mobility;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on \"Test Candidate\" with \"PMI: Assigned\" in my list",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "on pop up a \"Final\" is selected",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "on pop up I write a \"ok\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select \"Yes\" from Decision section",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select \"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click \u0027Save\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Test Candidate\" is absent from \"My Candidates\" tab",
  "matchedColumns": [
    1,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "\"Test Candidate\" is present in \"Archive\" tab with \"Offer Accepted\"",
  "matchedColumns": [
    1,
    8,
    9
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 550184264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 12
    },
    {
      "val": "PMI: Assigned",
      "offset": 34
    }
  ],
  "location": "CandidatesTableStepDefs.iClickOnWithInMyList(String,String)"
});
formatter.result({
  "duration": 123394942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Final",
      "offset": 13
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpAIsSelected(String)"
});
formatter.result({
  "duration": 179111146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 21
    }
  ],
  "location": "FeedbackFormStepDefs.onPopUpIWriteA(String)"
});
formatter.result({
  "duration": 80137120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectFromDecisionSection(String)"
});
formatter.result({
  "duration": 96291700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "FeedbackFormStepDefs.selectAnAnd(String\u003e)"
});
formatter.result({
  "duration": 49691,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.clickSave()"
});
formatter.result({
  "duration": 92969565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "My Candidates",
      "offset": 33
    }
  ],
  "location": "HomePageStepdefs.isAbsentFromTab(String,String)"
});
formatter.result({
  "duration": 117822498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Candidate",
      "offset": 1
    },
    {
      "val": "Archive",
      "offset": 32
    },
    {
      "val": "Offer Accepted",
      "offset": 51
    }
  ],
  "location": "HomePageStepdefs.isPresentInTabWith(String,String,String)"
});
formatter.result({
  "duration": 270398888,
  "status": "passed"
});
formatter.after({
  "duration": 74604787,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "To test that login works fine,",
  "description": "I want to be able to login with correct credentials\nand to see an error when user name/password are incorrect",
  "id": "to-test-that-login-works-fine,",
  "keyword": "Feature"
});
formatter.before({
  "duration": 743025501,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "login with existing user name and password",
  "description": "",
  "id": "to-test-that-login-works-fine,;login-with-existing-user-name-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login as existing user",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I find myself on the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdefs.iAmOnTheLoginPage()"
});
formatter.result({
  "duration": 252200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdefs.iLoginAsExistingUser()"
});
formatter.result({
  "duration": 665435610,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iFindMyselfOnTheHomepage()"
});
formatter.result({
  "duration": 14492469,
  "status": "passed"
});
formatter.after({
  "duration": 65311169,
  "status": "passed"
});
formatter.before({
  "duration": 744056102,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "attempt login with bad user name",
  "description": "",
  "id": "to-test-that-login-works-fine,;attempt-login-with-bad-user-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter bad user name",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter correct password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdefs.iAmOnTheLoginPage()"
});
formatter.result({
  "duration": 172602,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdefs.iEnterBadEmail()"
});
formatter.result({
  "duration": 75086560,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdefs.iEnterCorrectPassword()"
});
formatter.result({
  "duration": 70607141,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdefs.iClickSubmit()"
});
formatter.result({
  "duration": 169879766,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdefs.iSeeAnErrorMessage()"
});
formatter.result({
  "duration": 27071190,
  "status": "passed"
});
formatter.after({
  "duration": 64871029,
  "status": "passed"
});
formatter.uri("newCandidatePopUp.feature");
formatter.feature({
  "line": 1,
  "name": "As an admin, I want to check that different steps of hiring workflow are defined when Internal Mobility is checked",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Do not check Internal Mobility checkbox and verify hiring workflow steps",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;do-not-check-internal-mobility-checkbox-and-verify-hiring-workflow-steps",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I can see \"\u003csteps of hiring process\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;do-not-check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;",
  "rows": [
    {
      "cells": [
        "steps of hiring process"
      ],
      "line": 11,
      "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;do-not-check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;1"
    },
    {
      "cells": [
        "Info, CVReview, Prescreen, Interview, Final"
      ],
      "line": 12,
      "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;do-not-check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 686081681,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Add candidate\u0027 btn",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\u0027New Candidate\u0027 pop up appears",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 592296743,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iClickAddCandidateBtn()"
});
formatter.result({
  "duration": 89437163,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.newCandidatePopUpAppears()"
});
formatter.result({
  "duration": 34371056,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Do not check Internal Mobility checkbox and verify hiring workflow steps",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;do-not-check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I can see \"Info, CVReview, Prescreen, Interview, Final\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Info, CVReview, Prescreen, Interview, Final",
      "offset": 11
    }
  ],
  "location": "NewCandidatePopupStepdefs.iCanSee(String\u003e)"
});
formatter.result({
  "duration": 53105415,
  "status": "passed"
});
formatter.after({
  "duration": 65476477,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Check Internal Mobility checkbox and verify hiring workflow steps",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;check-internal-mobility-checkbox-and-verify-hiring-workflow-steps",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I check Internal Mobility checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can see \"\u003csteps of hiring process\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;",
  "rows": [
    {
      "cells": [
        "steps of hiring process"
      ],
      "line": 18,
      "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;1"
    },
    {
      "cells": [
        "Info, CVReview, Interview, Final"
      ],
      "line": 19,
      "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 679095268,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I\u0027m logged in as \"admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Add candidate\u0027 btn",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\u0027New Candidate\u0027 pop up appears",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "HomePageStepdefs.iMLoggedInAs(String)"
});
formatter.result({
  "duration": 565114953,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.iClickAddCandidateBtn()"
});
formatter.result({
  "duration": 84484976,
  "status": "passed"
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.newCandidatePopUpAppears()"
});
formatter.result({
  "duration": 27342529,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check Internal Mobility checkbox and verify hiring workflow steps",
  "description": "",
  "id": "as-an-admin,-i-want-to-check-that-different-steps-of-hiring-workflow-are-defined-when-internal-mobility-is-checked;check-internal-mobility-checkbox-and-verify-hiring-workflow-steps;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I check Internal Mobility checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can see \"Info, CVReview, Interview, Final\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "NewCandidatePopupStepdefs.iCheckInternalMobilityCheckbox()"
});
formatter.result({
  "duration": 63710892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Info, CVReview, Interview, Final",
      "offset": 11
    }
  ],
  "location": "NewCandidatePopupStepdefs.iCanSee(String\u003e)"
});
formatter.result({
  "duration": 34932179,
  "status": "passed"
});
formatter.after({
  "duration": 64602310,
  "status": "passed"
});
});