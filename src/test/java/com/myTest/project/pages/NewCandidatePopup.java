package com.myTest.project.pages;

import java.util.List;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewCandidatePopup extends BasePage {
	public NewCandidatePopup(WebDriver driver) {
		super(driver);
	}

	@FindBy(css = "div.modal-content")
	private WebElement newCandidatePopUp;

	@FindBy(css = "div.modal-content>ul li")
	private List<WebElement> listOfSteps;

	@FindBy(id = "internalMobility")
	private WebElement internalMobilityCheckbox;

	@FindBy(css = "input[name='name']")
	private WebElement candidateName;

	@FindBy(css = "div.dropzone")
	private WebElement cvZone;

	@FindBy(xpath = "//button[contains(@class,'btn-saveCandidate')][text()[contains(.,'Save')]]")
	private WebElement saveCandidateBtn;

	public void verifyAddCandidatePopUpAppeared() {
		newCandidatePopUp.isDisplayed();
	}

	public void verifyStepsOfHiringFlow(List<String> expectedSteps) {
		for (String expectedStep : expectedSteps) {
			listOfSteps.contains(expectedStep);
		}
	}

	public void clickInternalMobilityCheckBox() {
		internalMobilityCheckbox.sendKeys(Keys.RETURN);
		internalMobilityCheckbox.isSelected();
	}

	public void addCandidateName(String name) {
		candidateName.sendKeys(name);
	}

	public void saveNewCandidate() {
		System.out.println(saveCandidateBtn.getText());
		saveCandidateBtn.click();
	}
}
