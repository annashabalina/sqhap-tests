package com.myTest.project.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NavigationBar extends BasePage {

	public NavigationBar(WebDriver driver) {
		super(driver);
	}

	@FindBy(xpath = "//a[contains(.,'Hiring portal')]")
	WebElement hiringPortalLink;

}
