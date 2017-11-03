package com.myTest.project.steps;

import com.myTest.project.pages.HomePage;
import com.myTest.project.pages.LoginPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepdefs {
	private LoginPage loginPage;
	private HomePage homePage;

	@Given("^I am on the login page$")
	public void iAmOnTheLoginPage() throws Throwable {
		loginPage = new LoginPage(new BaseStepDef().getDriver());
	}

	@When("^I login as existing user$")
	public void iLoginAsExistingUser() throws Throwable {
		homePage = loginPage.loginAsAdministrator();
	}

	@When("^I enter bad user name$")
	public void iEnterBadEmail() throws Throwable {
		loginPage.sendKeysToEmailInput("Tom@luxoft.com");
	}

	@And("^I enter correct password$")
	public void iEnterCorrectPassword() throws Throwable {
		loginPage.sendKeysToPasswordInput("testAdminPassword");
	}

	@And("^I click Submit$")
	public void iClickSubmit() throws Throwable {
		loginPage.clickLoginButton();
	}

	@Then("^I see an error message$")
	public void iSeeAnErrorMessage() throws Throwable {
		loginPage.assertErrorMessageAppeared();
	}

	@When("^I login as \"([^\"]*)\"$")
	public void iLoginAs(String userRole) throws Throwable {
		loginPage.loginAsUser(userRole);
	}

}
