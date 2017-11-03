package com.myTest.project.steps;

import java.util.List;

import com.myTest.project.pages.NewCandidatePopup;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class NewCandidatePopupStepdefs {
	private NewCandidatePopup newCandidatePopup = new NewCandidatePopup(new BaseStepDef().getDriver());

	@And("^'New Candidate' pop up appears$")
	public void newCandidatePopUpAppears() throws Throwable {
		newCandidatePopup.verifyAddCandidatePopUpAppeared();
	}

	@Then("^I can see \"([^\"]*)\"$")
	public void iCanSee(List<String> expectedSteps) throws Throwable {
		newCandidatePopup.verifyStepsOfHiringFlow(expectedSteps);
	}

	@And("^I check Internal Mobility checkbox$")
	public void iCheckInternalMobilityCheckbox() throws Throwable {
		newCandidatePopup.clickInternalMobilityCheckBox();
	}

	@And("^I type \"([^\"]*)\"$")
	public void iType(String name) throws Throwable {
		newCandidatePopup.addCandidateName(name);
	}

	@And("^click 'Save'$")
	public void clickSave() throws Throwable {
		newCandidatePopup.saveNewCandidate();
	}
}
