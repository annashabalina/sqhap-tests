$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("firstTry.feature");
formatter.feature({
  "line": 1,
  "name": "To test my cucumber test is running",
  "description": "I want to run a sample feature file.",
  "id": "to-test-my-cucumber-test-is-running",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "sample feature file is ready",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I run the feature file",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "run should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberSetupdefs.sampleFeatureFileIsReady()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cucumberSetupdefs.iRunTheFeatureFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cucumberSetupdefs.runShouldBeSuccessful()"
});
formatter.result({
  "status": "skipped"
});
});