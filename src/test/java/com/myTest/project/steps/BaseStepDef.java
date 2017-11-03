package com.myTest.project.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.myTest.project.TestConfiguration;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseStepDef {

	private static WebDriver driver;
	private static final String baseUrl = TestConfiguration.getInstance().getBaseUrl();
	private static final String chromedriverPath = TestConfiguration.getInstance().getChromeDriverPath();

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", chromedriverPath);
		driver = new ChromeDriver();
		driver.get(baseUrl);
	}

	@After
	public void tearDown() {
		driver.quit();
	}

	public WebDriver getDriver() {
		return driver;
	}
}
