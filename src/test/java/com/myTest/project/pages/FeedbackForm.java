package com.myTest.project.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class FeedbackForm extends BasePage {
	public FeedbackForm(WebDriver driver) {
		super(driver);
	}

	private By tabList = By.xpath("//ul/li[contains(@class, 'steps')]");
	private By interviewerDropdown = By.cssSelector(".Select");
	private By selectedStep = By.className("steps-doing active");
	private By saveBtn = By.xpath("//button[contains(@class,'btn-saveCandidate')][text()[contains(.,'Save')]]");
	private By decisionOptions = By.xpath("label/span");
	private By decisionLabels = By.xpath("label");

	@FindBy(css = ".modal-content")
	private WebElement feedbackPopup;

	@FindBy(xpath = "//div[@class='modal-body']")
	private WebElement hiringStage;

	@FindBy(css = "div.modal-content textarea")
	private WebElement feedbackInput;

	@FindBy(xpath = "//div[@name='options']")
	private WebElement decisionButtonsArea;

	public void leaveFeedback(String feedback) {
		feedbackInput.sendKeys(feedback);
	}

	public void selectDecision(String decision) {
		List<WebElement> decisions = decisionButtonsArea.findElements(decisionOptions);
		for (WebElement d : decisions) {
			if (d.getText().contains(decision)) {
				d.click();
				break;
			}
		}
	}

	public void verifyTabSelected(String tabText) {
		List<WebElement> tabs = hiringStage.findElements(tabList);
		for (WebElement tab : tabs) {
			if (tab.getText().equals(tabText)) {
				Assert.assertTrue(tab.getAttribute("class").equals("steps-doing active "));
			}
		}
	}

	public void selectInterviewers(List<String> interviewerName) {
		if (interviewerName.size() != 0) {
			List<WebElement> dropdown = feedbackPopup.findElements(interviewerDropdown);
			for (int i = 0; i < interviewerName.size(); i++) {
				dropdown.get(i).click();
				WebElement input = dropdown.get(i).findElement(By.tagName("input"));
				input.sendKeys(interviewerName.get(i));
				input.sendKeys(Keys.RETURN);
			}
		}
	}

	public void verifyFeedbackPresent() {
		Assert.assertNotEquals(feedbackInput.getText(), "");
	}

	public void verifyDecisionMade() {
		List<WebElement> labels = decisionButtonsArea.findElements(decisionLabels);
		for (WebElement l : labels) {
			System.out.println(l.getAttribute("class"));
			if (l.getAttribute("class").contains("active")) {
				break;
			}
		}
	}
}
