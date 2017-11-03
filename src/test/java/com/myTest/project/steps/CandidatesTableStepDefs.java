package com.myTest.project.steps;

import org.openqa.selenium.WebDriver;

import com.myTest.project.pages.CandidatesTable;
import com.myTest.project.pages.HomePage;

import cucumber.api.java.en.When;

public class CandidatesTableStepDefs {
	private WebDriver driver = new BaseStepDef().getDriver();
	private CandidatesTable table = new CandidatesTable(driver);
	private HomePage homePage = new HomePage(driver);

	@When("^I click on \"([^\"]*)\" with \"([^\"]*)\" in my list$")
	public void iClickOnWithInMyList(String name, String status) throws Throwable {
		table.findCandidate(name, status);
	}

	@When("^I click on \"([^\"]*)\" with \"([^\"]*)\" in my list on \"([^\"]*)\"$")
	public void iClickOnWithInMyListOn(String name, String status, String tabName) throws Throwable {
		homePage.goToTab(tabName);
		homePage.verifyTabSelected(tabName);
		table.findCandidate(name, status);
	}
}
