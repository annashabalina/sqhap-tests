package com.myTest.project.runners;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.myTest.project.persistence.PersistentUsers;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/cucumber/reports/test-report"},
		features = "src/test/resources/",
		glue = "com.myTest.project.steps"
)
public class TestRunner {
	private static PersistentUsers users = new PersistentUsers();

	@BeforeClass
	public static void setUpUsers() {
		users.setUp();
	}

	@AfterClass
	public static void tearDownUsers() {
		users.tearDown();
	}
}
