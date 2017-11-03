package com.myTest.project.steps;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;
import com.myTest.project.TestConfiguration;
import com.myTest.project.pages.CandidatesTable;
import com.myTest.project.pages.HomePage;
import com.myTest.project.pages.LoginPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepdefs {
	private WebDriver driver = new BaseStepDef().getDriver();
	private HomePage homePage = new HomePage(driver);
	private LoginPage loginPage = new LoginPage(driver);
	private CandidatesTable table = new CandidatesTable(driver);

	@Then("^I find myself on the homepage$")
	public void iFindMyselfOnTheHomepage() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, TestConfiguration.getInstance().getTimeoutInSeconds(),
				TestConfiguration.getInstance().getTimeoutSleep());

		wait.until(new Function<WebDriver, Boolean>() {
			@Override
			public Boolean apply(WebDriver driver) {
				if (homePage.getPageTitle().equals("Luxoft Hiring Portal")) {
					return true;
				} else {
					return false;
				}
			}
		});
	}

	@Then("^I can see \"([^\"]*)\" on my home page$")
	public void iCanSeeOnMyHomePage(List<String> expectedTabs) throws Throwable {
		homePage.assertTabsPresent(expectedTabs);
	}

	@When("^I click 'Add candidate' btn$")
	public void iClickAddCandidateBtn() throws Throwable {
		homePage.clickAddCandidateBtn();
	}

	@Given("^I'm logged in as \"([^\"]*)\"$")
	public void iMLoggedInAs(String userRole) throws Throwable {
		loginPage.loginAsUser(userRole).assertPageTitle();
	}

	@Then("^I see \"([^\"]*)\" in the list of My Candidates with status \"([^\"]*)\"$")
	public void iSeeInTheListOfMyCandidatesWithStatus(String candidateName, String status) throws Throwable {
		table.verifyCandidateWithStatusPresent(candidateName, status);
	}

	@Then("^\"([^\"]*)\" is absent from \"([^\"]*)\" tab$")
	public void isAbsentFromTab(String candidateName, String tabName) throws Throwable {
		homePage.verifyTabSelected(tabName);
		table.verifyCandidateAbsent(candidateName);
	}

	@And("^\"([^\"]*)\" is present in \"([^\"]*)\" tab with \"([^\"]*)\"$")
	public void isPresentInTabWith(String candidateName, String tab, String newStatus) throws Throwable {
		if (!(candidateName.equals(""))) {
			homePage.goToTab(tab);
			homePage.verifyTabSelected(tab);
			table.verifyCandidateWithStatusPresent(candidateName, newStatus);
		}
	}
}
