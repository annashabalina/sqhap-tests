package com.myTest.project.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class CandidatesTable extends BasePage {
	public CandidatesTable(WebDriver driver) {
		super(driver);
	}

	private By row = By.tagName("tr");
	private By nameCell = By.cssSelector("td:first-child");
	private By statusCell = By.cssSelector("td:nth-child(3)");

	@FindBy(xpath = "//table[contains(@class,'table')]//thead[contains(.,'Name') and contains(.,'Status')]/following-sibling::tbody")
	private WebElement candidatesTable;

	public void findCandidate(String candidateName, String expectedStatus) {
		List<WebElement> rows = candidatesTable.findElements(row);
		for (WebElement row : rows) {
			String rowData = row.getText();
			if (rowData.contains(candidateName) && rowData.contains(expectedStatus)) {
				System.out.println("found candidate");
				System.out.println(row.getText());
				row.click();
				break;
			}
		}
	}

	public void verifyCandidateWithStatusPresent(String expectedName, String expectedStatus) {
		String trText;
		List<WebElement> rows = candidatesTable.findElements(row);
		for (WebElement row : rows) {
			trText = row.getText();
			System.out.println(trText);
			if (trText.contains(expectedName)) {
				Assert.assertEquals(row.findElement(nameCell).getText(), expectedName);
				Assert.assertEquals(row.findElement(statusCell).getText(), expectedStatus);
				break;
			}
		}
	}

	public void verifyCandidateAbsent(String candidateName) {
		List<WebElement> rows = candidatesTable.findElements(row);
		for (WebElement row : rows) {
			String rowData = row.getText();
			Assert.assertTrue(!(rowData.contains(candidateName)));
		}
	}
}
