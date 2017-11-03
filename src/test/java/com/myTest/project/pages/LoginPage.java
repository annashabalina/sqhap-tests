package com.myTest.project.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.myTest.project.TestConfiguration;

public class LoginPage extends BasePage {

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(name = "email")
	private WebElement email;

	@FindBy(name = "password")
	private WebElement password;

	@FindBy(xpath = "//button[@type='submit' and contains(.,'Login')]")
	private WebElement loginBtn;

	@FindBy(className = "loginError")
	private WebElement loginErrorMsg;

	private HomePage loginAsExistingUser(String userEmail, String userPassword) {
		email.sendKeys(userEmail);
		password.sendKeys(userPassword);
		loginBtn.click();
		return new HomePage(basePageDriver());
	}

	public HomePage loginAsUser(String userRole) {
		switch (userRole.toLowerCase()) {
			case "admin":
				loginAsAdministrator();
				break;
			case "supervisor":
				loginAsSupervisor();
				break;
			case "interviewer":
				loginAsInterviewer();
				break;
		}
		return new HomePage(basePageDriver());
	}

	public HomePage loginAsAdministrator() {
		String userEmail = TestConfiguration.getInstance().getAdminEmail();
		String pass = TestConfiguration.getInstance().getTestUserPassword();
		return loginAsExistingUser(userEmail, pass);
	}

	private HomePage loginAsSupervisor() {
		String userEmail = TestConfiguration.getInstance().getSupervisorEmail();
		String pass = TestConfiguration.getInstance().getTestUserPassword();
		return loginAsExistingUser(userEmail, pass);
	}

	private HomePage loginAsInterviewer() {
		String userEmail = TestConfiguration.getInstance().getInterviewerEmail();
		String pass = TestConfiguration.getInstance().getTestUserPassword();
		return loginAsExistingUser(userEmail, pass);
	}

	public LoginPage sendKeysToEmailInput(String text) {
		email.sendKeys(text);
		return this;
	}

	public LoginPage sendKeysToPasswordInput(String text) {
		password.sendKeys(text);
		return this;
	}

	public LoginPage clickLoginButton() {
		loginBtn.click();
		return this;
	}

	public LoginPage assertErrorMessageAppeared() {
		Assert.assertTrue(loginErrorMsg.getCssValue("display").equals("block"));
		return this;
	}
}
