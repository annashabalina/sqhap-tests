package com.myTest.project.pages;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {
	public HomePage(WebDriver driver) {
		super(driver);
	}

	private By candidateStates = By.xpath("//div[@class= 'candidatesContainer']//ul/li");

	@FindBy(css = "li.dropdown")
	private WebElement myMenu;

	@FindBy(xpath = "//a[@href='/logout']")
	private WebElement logoutItem;

	@FindBy(css = "ul.tabButtons li")
	private List<WebElement> navTabList;

	@FindBy(css = ".addButton button")
	private WebElement addCandidateBtn;

	public void assertPageTitle() {
		assertEquals("Luxoft Hiring Portal", basePageDriver().getTitle());
	}

	public String getPageTitle() {
		return basePageDriver().getTitle();
	}

	public void assertTabsPresent(List<String> expectedTabs) {
		for (String tab : expectedTabs) {
			navTabList.contains(tab);
		}
	}

	public void clickAddCandidateBtn() {
		addCandidateBtn.click();
	}

	public void verifyTabSelected(String tabName) {
		List<WebElement> tabs = basePageDriver().findElements(candidateStates);
		for (WebElement tab : tabs) {
			System.out.println(tab.getAttribute("class"));
			System.out.println(tab.getText());
			if (tab.getText().contains(tabName)) {
				Assert.assertTrue(tab.getAttribute("class").contains("active"));
				break;
			}
		}
	}

	public void goToTab(String tabName) {
		List<WebElement> tabs = basePageDriver().findElements(candidateStates);
		for (WebElement tab : tabs) {
			if (tab.getText().contains(tabName)) {
				tab.click();
				break;
			}
		}
	}
}
